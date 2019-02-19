import React from 'react';
import './day.css';

class Day extends React.Component {
    constructor(){
        super();
        this.state = {
            topThreeList:[
                {id:1,src:'//tva3.sinaimg.cn/crop.0.0.180.180.180/4b4f754ajw1e8qgp5bmzyj2050050aa8.jpg',rank:2,name:'黄渤',info:300},
                {id:2,src:'//tvax3.sinaimg.cn/crop.0.0.512.512.180/686ffd99ly8fpvzm9sbsxj20e80e8dgb.jpg',rank:1,name:'hebe',info:330},
                {id:3,src:'//tva4.sinaimg.cn/crop.0.0.339.339.180/cc9e95d0jw8fbnw40u6s4j209f09fmxx.jpg',rank:3,name:'curry',info:230}
            ],
            list:[
                {id:4,src:'//tva4.sinaimg.cn/crop.0.0.720.720.180/6722bf4fjw8es7d0hewozj20k00k0t9e.jpg',rank:4,name:'kobe',info:200},
                {id:5,src:'//tva4.sinaimg.cn/crop.0.0.720.720.180/6722bf4fjw8es7d0hewozj20k00k0t9e.jpg',rank:5,name:'leBron',info:180},
                {id:6,src:'//tva4.sinaimg.cn/crop.0.0.720.720.180/6722bf4fjw8es7d0hewozj20k00k0t9e.jpg',rank:6,name:'micheal',info:150},
                {id:7,src:'//tva4.sinaimg.cn/crop.0.0.720.720.180/6722bf4fjw8es7d0hewozj20k00k0t9e.jpg',rank:7,name:'oNeal',info:120}
            ]
        }
    }
    render(){
        return (
            <div>
                <div className='dayTit'>
                    <p className='active'>日榜</p>
                    <p>周榜</p>
                    <p>月榜</p>
                </div>
                <div className='dayNav'>
                    {
                        this.state.topThreeList.map((item,index)=>(
                            <div key={index}>
                                <img src={item.src} className='userPic' alt='z'/>
                                <div className='rank'>{item.rank}</div>
                                <p className='userName'>{item.name}</p>
                                <p className='info'>已中奖：{item.info}单</p>
                            </div>
                        ))
                    }
                </div>
                <ul className='dayList'>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>
                                <p className='loser'>{item.rank}</p>
                                <img src={item.src} alt='z'/>
                                <p className='loserName'>{item.name}</p>
                                <p className='loserInfo'>已中奖：<span>{item.info}</span>单</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Day;