import React from 'react'
import Image from 'next/image'
import { LABEL } from '@constants'
// @assets
import { ICON } from '@assets/icons'

const Search = () => {
  return (
    <div className='flex flex-end justify-end container'>
      <div className=' md:flex-column  space-y-4 md:space-y-0 py-4'>
        <label className='sr-only'>{LABEL.search}</label>
        <div className='relative'>
          <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
            <Image {...ICON.search.props} />
          </div>
          <input
            type='text'
            id='table-search-users'
            className='block pt-2 ps-10 text-sm text-gray-900/60  w-80 bg-gray-50 dark:bg-gray-900/60 dark:placeholder-gray-400 dark:text-white'
            placeholder='Search for Students'
          />
        </div>
      </div>
    </div>
  )
}

export default Search
