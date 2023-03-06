import React from 'react'
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={require('../../img/logo.png')} />
        </header>
    )
}

export default Header;