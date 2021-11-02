import React from 'react'
import { Button, Menu, MenuItem, MenuProps } from '@material-ui/core'
import './style.scss'

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {
  text: string
  icon?: any
} & MenuProps

const Dropdown: React.FC<Props> = (props: Props) => {
  const { text, icon, ...rest } = props

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="dropdown-custom">
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {text} {icon}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        {...rest}
        open={open}
      >
        <MenuItem onClick={handleClose}>EUR €</MenuItem>
        <MenuItem onClick={handleClose}>USD $</MenuItem>
        <MenuItem onClick={handleClose}>BGN</MenuItem>
      </Menu>
    </div>
  )
}

export default Dropdown
