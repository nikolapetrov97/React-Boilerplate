import React from 'react'
import WarningIcon from '@material-ui/icons/Warning'
import { TextFieldProps, TextField } from '@material-ui/core'
import './style.scss'

export type Props = {
  errorMessage?: string
  rowsNum?: number
} & TextFieldProps

const TextArea: React.FC<Props> = (props: Props) => {
  const { errorMessage, rowsNum, ...rest } = props
  function ErrorMessage() {
    return (
      errorMessage && (
        <div>
          <WarningIcon />
          <span>{errorMessage}</span>
        </div>
      )
    )
  }
  return (
    <TextField
      {...rest}
      className={`text-area ${errorMessage && 'error-bottom-border'}`}
      multiline
      rows={rowsNum}
      error={!!errorMessage}
      helperText={errorMessage ? ErrorMessage() : null}
    />
  )
}

export default TextArea
