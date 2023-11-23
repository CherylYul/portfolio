import React from 'react'

const MenuContext = React.createContext()
export { MenuContext }

export default function Menu({ children, title }) {
    const [open, setOpen] = React.useState(false)
    function toggleOpen() { setOpen(prev => !prev) }
    return (
        <MenuContext.Provider value={open}>
            <div className="menu-container">
                <div className="menu-top">
                    <button className="menu" onClick={toggleOpen}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </button>
                    <span>{title}</span>
                </div>
                {children}
            </div>
        </MenuContext.Provider>
    )
}