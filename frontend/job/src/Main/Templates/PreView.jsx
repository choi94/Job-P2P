import React from 'react'
import {Card} from 'react-bootstrap';
import { BrowserRouter as Link,Router } from "react-router-dom";
import '../Main.css'
import test from '../image/test.png';

const PreView =()=>{
    return(
      <div className="listingsMain">
		  	<div className="listingsMainTitle" >
				<h1>최근에 올라온 Job</h1>
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
    </div>
    );
}

export default PreView