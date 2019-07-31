import React from 'react'
import {Card} from 'react-bootstrap';
import { NavLink,Router,Person } from 'react-router-dom'
import Detail from '../Detail/Detail.jsx'
import '../Board.css'



const Cards =({board})=>{

   const Detail=board
   console.log(board.contents)

	return(
		<li>
         <NavLink to ={`/detail/`+board.id}>
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

export default Cards