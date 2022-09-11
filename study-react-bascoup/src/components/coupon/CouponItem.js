import React, { Component } from 'react';
import './CouponItem.css';


class CouponItem extends Component {
    render() {
        return (
            <div className='CouponItem'>
                <div className='coupon-logo'>
                    <img src={require('../../img/startbucks_logo.png')} />
                </div>
                <div className='coupon-info'>
                    <div className='coupon-title'>
                        <div className='coupon-brand'>스타벅스</div>
                        <div className='coupon-item'>아메리카노</div>
                    </div>
                    <div className='coupon-dday'>15일 남음</div>
                    <div className='coupon-deadline'>2022.09.30 까지</div>
                </div>
            </div>
        );
    }
}

export default CouponItem;