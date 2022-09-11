import React, { Component } from 'react';
import './MainPagePhoto.css';

class MainPagePhoto extends Component {
    render() {
        return (
            <div className='MainPagePhoto'>
                <div className='coupon-search'>
                    <input className='coupon-input' placeholder=' 브랜드나 상품명을 검색해보세요.' />
                    <button className='input-button'>검색</button>
                </div>
            </div>
        );
    }
}

export default MainPagePhoto;