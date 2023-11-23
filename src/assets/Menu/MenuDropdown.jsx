import React from 'react'
import { MenuContext } from './Menu'

export default function Dropdown({children}) {
    const open = React.useContext(MenuContext)
    return ( 
        open &&
        <div className="menu-dropdown">
            {children}
        </div>
    )
}