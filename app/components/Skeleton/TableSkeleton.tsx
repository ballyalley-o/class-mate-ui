import React, { FC } from 'react'

interface TableSkeletonProps {
  numRows: number
}

const TableSkeleton: FC<TableSkeletonProps> = ({ numRows }) => {
  const skeletonRows = Array.from({ length: numRows }, (_, rowIndex) => (
    <div
      key={rowIndex}
      className='h-5 bg-gray-200 py-5 mt-4 dark:bg-gray-900/60 w-full mb-4'
    ></div>
  ))

  return (
    <div
      role='status'
      className='space-y-8 animate-pulse md:space-x-10 rtl:space-x-reverse md:flex md:items-center'
    >
      <div className='w-full gap-5'>{skeletonRows}</div>
      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default TableSkeleton
