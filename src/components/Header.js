import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>LiveTheLifeTV</h1>
                <p>"Does a guy with a demanding career living in a big city really want to stay in Kuta when he goes to Bali after dreaming about warm water, uncrowded waves and rice fields?  He might think he does, but what he really wants is a private LTL™ villa in Canggu with a maid and a cook with junkets to the next Ubud. Maybe even suggest Sri Lanka." A fully responsive site template designed by <a href="https://www.livethelife.tv">LTL</a>.</p>
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
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
