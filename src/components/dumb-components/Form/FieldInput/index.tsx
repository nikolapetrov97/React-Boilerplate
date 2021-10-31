import * as React from 'react'
import { Field, BaseFieldProps, WrappedFieldProps } from 'redux-form'
import Input, { Props as InputProps } from '../../Input'

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {} & BaseFieldProps & InputProps

class FieldInput extends React.Component<Props> {
  renderField(fieldData: WrappedFieldProps) {
    const { input, meta, ...rest } = fieldData
    const { touched, error, warning } = meta
    const errorMessage = touched ? warning || error : undefined

    return <Input {...input} {...rest} errorMessage={errorMessage} />
  }

  render() {
    return (
      <Field {...(this.props as BaseFieldProps)} component={this.renderField} />
    )
  }
}

export default FieldInput
