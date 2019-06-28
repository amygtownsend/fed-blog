import React from 'react'

const PublishDate = ({ date }) => {
  const d = new Date(date)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const month = months[d.getMonth()]
  const day = d.getDate()
  const year = d.getFullYear()

  return (
    <time dateTime={date} className="font-medium">
      {month} {day}, {year}
    </time>
  )
}

export default PublishDate
