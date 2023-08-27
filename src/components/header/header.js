import React from 'react'
import Menu from '../menu/menu'

const Header = () => {
    return (
        <header className="header">
            <div className="header-text">Awesome Kanban Board</div>
            <Menu />
        </header>
    );
}
export default Header;