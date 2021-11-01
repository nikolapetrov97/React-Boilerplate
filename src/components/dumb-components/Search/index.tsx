import React, { useState } from 'react'
import { Avatar, Input, InputProps } from '@material-ui/core'
import './style.scss'
import { SearchSharp } from '@material-ui/icons'
import WarningIcon from '@material-ui/icons/Warning'

interface SearchFieldProps {
  value?: string
  checked?: boolean
  onChange?(value?: string): undefined
  onBlur?(e: React.ChangeEvent): undefined
}

export type Props = {
  errorMessage?: string
} & InputProps &
  SearchFieldProps

const Search: React.FC<Props> = (props: Props) => {
  const [searchIcon, setSearchIcon] = useState(false)
  const { errorMessage, ...rest } = props

  function toggleFocus() {
    setSearchIcon(!searchIcon)
  }

  function inputFunction() {
    return (
      <div className="input-container">
        <Input
          className={`text-area ${errorMessage} && 'error-bottom-border`}
          error={!!errorMessage}
          {...rest}
          onClick={() => {
            toggleFocus()
          }}
          onBlurCapture={() => {
            toggleFocus()
          }}
        />
      </div>
    )
  }

  function iconSearch() {
    return (
      <div className="search-icon-container">
        <div className="avatar-container">
          <Avatar className={searchIcon ? 'icon-active' : 'icon-inactive'}>
            <SearchSharp />
          </Avatar>
        </div>
      </div>
    )
  }

  return (
    <div className="location-search">
      <div className="location-search-container">
        <div className="input-container-wrap">
          {inputFunction()}
          {iconSearch()}
        </div>
        {errorMessage && (
          <p className="error-message">
            <WarningIcon /> {errorMessage}
          </p>
        )}
      </div>
    </div>
  )
}

export default Search
