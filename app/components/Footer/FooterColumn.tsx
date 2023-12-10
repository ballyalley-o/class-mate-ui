import React from 'react'

type FooterColumn = {
  title: string
  children: React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumn) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default FooterColumn
