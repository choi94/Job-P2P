import React from 'react'
import {Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import '../Main.css'
import test from '../image/test.png';

const PreView =({board,num})=>{
    return(
      
		<li>
		<NavLink to ={`/detail/`+board.id+`/`+num} >
		   <Card className="BoardList_Card">
		   <Card.Body>
		   <Card.Title>{board.title}</Card.Title>
		   <Card.Text>
				{board.contents}
		   </Card.Text>
		   <Card.Text>
				  <p className="text-muted">{board.cityArea} 총{board.totalSalary}만원</p>  
		   </Card.Text>
		   </Card.Body>
		   <Card.Footer>
			  <p className="text-muted">작성자 : {board.member.nickname} 평점 {board.member.volunteerScore}/5 </p>        
		   </Card.Footer>
		   
		   </Card>
		</NavLink>   
	  </li> 

    );
}

export default PreView