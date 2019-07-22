import React from 'react'
import {Card} from 'react-bootstrap';
import { BrowserRouter as Link,Router } from "react-router-dom";
import '../Main.css'
import test from '../image/test.png';

const PreView =()=>{
    return(
<<<<<<< HEAD
      <div className="listingsMain">
		  	<div className="listingsMainTitle" >
				<h1>최근에 올라온 Job</h1>
=======
      <div className="listings1">
		  	<div>
		    <h1>최근에 올라온 Job</h1>
			<p>인근이니이니니</p>
>>>>>>> 538c11c0cae80e2bcf322cdad7517cadd25ff7ac
			</div>
			<ul className="properties_list">
				<li>
				<Link to="/Detail">
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
				</Link>
				</li> 
				<li>
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
				</li> 
				<li>
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
				</li> 
				<li>
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
				</li>
			</ul>
<<<<<<< HEAD
=======
			<div>
				더보기
			</div>
>>>>>>> 538c11c0cae80e2bcf322cdad7517cadd25ff7ac
    </div>
    );
}

export default PreView