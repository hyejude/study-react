import React, { Component } from 'react';
import './MainPageHeader.css';

class MainPageHeader extends Component {
    render() {
        console.log("헤더")
        return (
            <div className='MainPageHeader'>
                <div className='logo'>바스쿱 ; 바스켓에 모여진 쿠폰</div>
                <div className='menu-wrapper'>
                    <div className='memu-item'>쿠폰 등록</div>
                    <div className='memu-item'>쿠폰 조회</div>
                </div>
            </div>
        );
    }
}


export default MainPageHeader;