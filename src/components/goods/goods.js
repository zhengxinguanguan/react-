import React from 'react';
import './goods.css';
import queryString from 'query-string';
class Goods extends React.Component{

    render() {
        let src = queryString.parse(this.props.location.search).a;
        let tit = queryString.parse(this.props.location.search).b;
        let two = queryString.parse(this.props.location.search).c;
        let four = queryString.parse(this.props.location.search).d;
        let ten = queryString.parse(this.props.location.search).e;

        return (
            <div>
                <div className='goodsTop'>
                    <img src={src} alt="z"/>
                </div>
                <div className='goodsPrice'>
                    <div>
                        <p>
                            {tit}
                        </p>
                        <span>夺宝价:￥<em>{two}</em> /<em>{four}</em> /<em>{ten}</em></span>
                    </div>
                    <div>
                        <p className='goodsTime'>00:00:00:00</p>
                        <p className='goodsTotal'>
                            累计数：1559973单
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Goods;