import React from 'react'
import { ReactComponent as ArrowLeft } from '../img/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../img/icons/arrow-right.svg'
import Button from './Button'

const Pagination = ({
  totalPosts,
  maxPostsPerView,
  postSkipCount,
  postViewCount,
  setPostSkipCount,
  setPostViewCount
}) => {
  const next = () => {
    setPostSkipCount(postSkipCount + maxPostsPerView)
    setPostViewCount(postViewCount + maxPostsPerView)
  }
  const prev = () => {
    setPostSkipCount(postSkipCount - maxPostsPerView)
    setPostViewCount(postViewCount - maxPostsPerView)
  }

  return (
    <div className="flex justify-between m-30">
      <Button disabled={postSkipCount === 0} onClick={prev}>
        <span className="flex items-center">
          <ArrowLeft aria-hidden="true" className="mr-8" />
          <span>Prev</span>
        </span>
      </Button>
      <Button disabled={postViewCount >= totalPosts} onClick={next}>
        <span className="flex items-center">
          <span>Next</span>
          <ArrowRight aria-hidden="true" className="ml-8" />
        </span>
      </Button>
    </div>
  )
}
export default Pagination
