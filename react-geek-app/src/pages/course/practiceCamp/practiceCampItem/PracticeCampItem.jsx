import React from 'react';
import './practiceCampItem.styl'

function PracticeCampItem(props) {
    return (
        <div className="practiceCamp-item">
            <div className="practiceCamp-item-img">
                <img src="" alt="图片不见了" />
            </div>
            <div className="practiceCamp-item-detail">
                <div className="practiceCamp-item-name">{props.lessonName}</div>
                <div className="practiceCamp-item-teacher">
                    <div className="practiceCamp-item-teacher-name">{props.teacherName}</div>
                    <div className="practiceCamp-item-teacher-desc">{props.teacherDesc}</div>
                </div>
                <div className="practiceCamp-item-time">最近开营：{props.time}</div>
                <div className="price-and-join">
                    <div className="practiceCamp-item-price">￥{props.price}</div>
                    <div className="practiceCamp-item-oldprice">￥{props.oldprice}</div>
                    <button>立即报名</button>
                </div>
            </div>
        </div>
    )
}

export default PracticeCampItem;