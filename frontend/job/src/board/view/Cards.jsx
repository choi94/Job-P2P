import React from 'react'
import {Card} from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";
import './main.css'
import test from './test.png';
const Cards =()=>{
    return(
		<div className="listings">
		<ul className="properties_list">
			<li>
			<a href="/Detail">
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
			<li>
			<a href="/Detail">
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
			<li>
			<a href="/Detail">
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
			<li>
			<a href="/Detail">
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
			<li>
			<a href="/Detail">
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
			<li>
			<a href="/Detail">
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
    );
}
export default Cards