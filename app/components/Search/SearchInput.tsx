import React from 'react'
import Image from 'next/image'
import { LABEL, PLACEHOLDER } from '@constants'
// @assets
import { ICON } from '@assets/icons'
// @styles
import { def } from '@assets/styles'

const SearchInput = () => {
  return (
    <div className={def.StyledTopRightContainer}>
      <div className={def.StyledTopRightWrapper}>
        <label className={def.StyledSearchInputLabel}>{LABEL.search}</label>
        <div className={def.StyledSearchInputBase}>
          <div className={def.StyledSearchInputBaseWrapper}>
            <Image {...ICON.search.props} />
          </div>
          <input
            type='text'
            id='table-search-student'
            className={def.StyledSearchInput}
            placeholder={PLACEHOLDER.searchInput('Student')}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchInput
