import { useEffect, useState, Children, cloneElement } from 'react'
import './Carousel.scss'

const PAGE_WIDTH = 50.6
export const Carousel = ({ children }) => {
  const [page, setPage] = useState([])
  const [offset, setOffset] = useState(0)
  const handleClickScrollRight = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }
  const handleClickScrollLeft = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (page.length - 1))
      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    setPage(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: '100%',
            maxWidth: `${PAGE_WIDTH}rem`,
            minWidth: `${PAGE_WIDTH}rem`,
          },
        })
      })
    )
  }, [])
  return (
    <div className='main_container'>
      <button className='arrow_two' onClick={handleClickScrollRight}>
        &lt;
      </button>
      <div className='window'>
        <div
          className='all_pages_container'
          style={{
            transform: `translateX(${offset}rem)`,
            transitionDuration: '0.5s',
          }}
        >
          {children}
        </div>
      </div>
      <button className='arrow' onClick={handleClickScrollLeft}>
        &gt;
      </button>
    </div>
  )
}
