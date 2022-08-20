import Header from './Header';
import { Link, useHistory } from "react-router-dom";
import React from 'react'
import './SearchResult.css'

function SearchResult() {
  return (
    <div className='result'>
       <Header />
       <h1 className='result-h'> Kết quả tìm kiếm:</h1>
       <h3 className='result-h'>Oops! Sản phẩm hiện không có tại shop</h3>
    </div>
  )
}

export default SearchResult