import React from 'react'
import { ReactComponent as ArrowLeft } from '../img/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../img/icons/arrow-right.svg'

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
      <button
        className="btn flex items-center"
        disabled={postSkipCount === 0}
        onClick={prev}
      >
        <ArrowLeft aria-hidden="true" className="mr-8" />
        <span>Prev</span>
      </button>
      <button
        className="btn flex items-center"
        disabled={postViewCount >= totalPosts}
        onClick={next}
      >
        <span>Next</span>
        <ArrowRight aria-hidden="true" className="ml-8" />
      </button>
    </div>
  )
}
export default Pagination
