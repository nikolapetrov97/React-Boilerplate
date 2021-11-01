import * as React from 'react'
import { Field, BaseFieldProps, WrappedFieldProps } from 'redux-form'
import Search, { Props as SearchProps } from '../../Search'

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {
  errorCustomMessage?: string
} & BaseFieldProps &
  SearchProps

class FieldSearch extends React.Component<Props> {
  renderField(fieldData: WrappedFieldProps & Props) {
    const { input, meta, errorCustomMessage, ...rest } = fieldData
    const { touched, error, warning } = meta
    const errorMessage = touched ? warning || error : undefined

    return (
      <Search
        {...input}
        {...(rest as any)}
        errorMessage={errorMessage || errorCustomMessage}
      />
    )
  }

  render() {
    return (
      <Field {...(this.props as BaseFieldProps)} component={this.renderField} />
    )
  }
}

export default FieldSearch
