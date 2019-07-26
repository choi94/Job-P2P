import React from 'react'
import {Card} from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";
import '../Board.css'
import test from './test.png';

const Cards =({title})=>{
	return(
		<li>
         <a href="/Detail">
            <Card>
            <Card.Img variant="top" src={test} />
            <Card.Body>
            <Card.Title>{title.title}</Card.Title>
            <Card.Text>
			{title.content}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">갑의 평점</small>
            </Card.Footer>
            </Card>
        </a>
	</li> 
	);
}

export default Cards