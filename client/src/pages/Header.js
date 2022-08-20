import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header' >
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder='Tìm Kiếm'  />
        <Link to = '/result'>
          <button type='submit' className='search-btn'>Tìm</button>
        </Link>
      </div>

      <div className="header__nav">
        <Link to = '/login'>
          <div className="header__option">
            <span className="header__optionLineOne">Đăng Nhập</span>
          </div>
        </Link>

        <Link to = '/signup'>
          <div className="header__option">
            <span className="header__optionLineOne">Đăng Ký</span>
          </div>
        </Link>
{/* 
        <Link to = '/checkout'>
          <div>
            <img
            className='cart_logo'
            scr = 'https://media.istockphoto.com/vectors/shopping-cart-icon-professional-pixel-perfect-icons-optimized-for-vector-id1181281555?k=20&m=1181281555&s=170667a&w=0&h=c36QMRTPIMWcJzZUMOnQqG-WU5SscYjbDF9cc2GDKEU='
            alt = 'giỏ hàng'/>
          </div>
        </Link> */}

      </div>
    </div>

    
  )
}

export default Header