import React from 'react'
import {Card,CardDeck} from 'react-bootstrap';
import '../Board.css'
import '../view/main.css'
import test from './test.png';
const Cards =()=>{
    return(
      <section className="listings">
		  <hr></hr>
      <div className="wrapper">
			<ul className="properties_list">
				<li>
				<a href="#">
				<Card>
				<Card.Img variant="top" src={test} />
				<Card.Body>
				<Card.Title>을지로 청소 구합니다.</Card.Title>
				<Card.Text>
					일자리 간단한 소개
				</Card.Text>
				</Card.Body>
				<Card.Footer>
				<small className="text-muted">갑의 평점</small>
				</Card.Footer>
			</Card>
			</a>
			</li>    
				
			</ul>
			<div class="more_listing">
				<a href="#" class="more_listing_btn">View More Listings</a>
			</div>
		</div>
    </section>
    );
}
export default Cards