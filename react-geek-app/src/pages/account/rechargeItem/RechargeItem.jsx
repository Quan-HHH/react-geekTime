import React, { Component } from 'react';
import './rechargeItem.styl'
class RechargeItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="recharge-item">
                <div>￥{this.props.money}</div>
            </div>
         );
    }
}
 
export default RechargeItem;