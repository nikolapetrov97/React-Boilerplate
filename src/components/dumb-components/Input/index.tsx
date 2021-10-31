import React from 'react'
import WarningIcon from '@material-ui/icons/Warning'
import { Input as MaterialInput, InputProps } from '@material-ui/core'
import './style.scss'

export type Props = {
  errorMessage?: string
  helperMessage?: string
  label?: string
} & InputProps

const TextArea: React.FC<Props> = (props: Props) => {
  const { errorMessage, helperMessage, label, type, ...rest } = props

  return (
    <div className="input-custom">
      {label && (
        <p className="label">
          <b>{label}</b>
        </p>
      )}
      <MaterialInput {...rest} type={type} />
      {helperMessage && <p className="help-message">{helperMessage}</p>}
      {errorMessage && (
        <p className="error-message">
          <WarningIcon /> {errorMessage}
        </p>
      )}
    </div>
  )
}

export default TextArea
