import React, { Component } from 'react';
import './mineItem.styl'
class MineItem extends Component {
    state = {}
    render() {
        return (
            <div className="mine-item-wrapper">
                <span className="icon iconfont left">&#xe8d5;</span>
                <div className="title-wrapper">
                    <div className="title">账户</div>
                    <div className="red-dot"></div>
                    <div className="detail">0.00</div>
                </div>
                <span className="icon iconfont right">&#xe613;</span>
            </div>
        );
    }
}

export default MineItem;