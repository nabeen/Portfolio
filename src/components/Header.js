import React from 'react'
import Link from 'gatsby-link'

import avatar from '../images/icon.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/* <span className="icon fa-diamond"></span> */}
            <img className="avatar" src={avatar} alt="" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Hi, I'm nabeen.</h1>
                <p>This is nabeen's Portfolio Site.</p>
                <p>If you want to hire me, please send me a Pull Request to this repository.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
