import React, { Component } from 'react';
import './MainPageAlarm.css';
import CouponItem from '../coupon/CouponItem';

// 쿠폰 몇 개씩 렌더링 할지

class MainPageAlarm extends Component {
    render() {
        return (
            <div className='MainPageAlarm'>
                <div className='couponalarm-header'>임박한 기프티콘 😰</div>
                <div className='coupons-wrapper'>
                    <CouponItem />
                    <CouponItem />
                    <CouponItem />
                    <CouponItem />
                    <CouponItem />
                </div>
            </div>
        );
    }
}

export default MainPageAlarm;