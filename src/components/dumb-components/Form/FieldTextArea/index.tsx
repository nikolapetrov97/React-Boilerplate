import * as React from 'react'
import { Field, BaseFieldProps, WrappedFieldProps } from 'redux-form'
import { TextFieldProps } from '@material-ui/core'
import TextArea from '../../TextArea'

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {} & BaseFieldProps & TextFieldProps

class FieldTextArea extends React.Component<Props> {
  renderField(fieldData: WrappedFieldProps) {
    const { input, meta, ...rest } = fieldData
    const { touched, error, warning } = meta
    const errorMessage = touched ? warning || error : undefined

    return <TextArea {...input} {...rest} errorMessage={errorMessage} />
  }

  render() {
    return (
      <Field {...(this.props as BaseFieldProps)} component={this.renderField} />
    )
  }
}

export default FieldTextArea
