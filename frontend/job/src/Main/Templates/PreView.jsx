import React from 'react'
import {Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import '../Main.css'
import test from '../image/test.png';

const PreView =()=>{
    return(
      
				<li>
				<NavLink to="/Detail">
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
				</NavLink>
				</li> 

    );
}

export default PreView