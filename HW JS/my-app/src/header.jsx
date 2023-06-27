import React from "react"
import "./header.css"

const Header = () => {
    return (
    <header>
        <div>
        <ul className='header_list'>
            <li className='header_list_item'><a className='header_list_item_link' href='#top'>home</a></li>
            <li className='header_list_item'><a className='header_list_item_link' href='#top'>photoapp</a></li>
            <li className='header_list_item'><a className='header_list_item_link' href='#top'>design</a></li>
            <li className='header_list_item'><a className='header_list_item_link' href='#top'>download</a></li>
        </ul>
        </div>
        <div className='header_img'>
        <p align = 'center'><img alt="img-phone" src='/img/top-img.png' /></p>
        </div>
    </header>
    )
}

export default Header