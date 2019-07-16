import React from 'react'
import {CardDeck} from 'react-bootstrap';
import './Board.css'
import Cards from './Cards'

// 해야될 사항 swiper 안에 넣어야하고.
// 게시판 생길때마다 정보를 뿌려야한다.
// 안에 구성 디자인 

const CardRow =()=>{
    return(
      <div className="BoardBox">
        <CardDeck>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
       </CardDeck>
       <CardDeck>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
       </CardDeck>
       <CardDeck>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
       </CardDeck>
       <CardDeck>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
       </CardDeck>
    </div> 
    )
}
const d= { 

}

export default CardRow