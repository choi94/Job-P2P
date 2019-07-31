import React from 'react'
import {Card,Badge} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import '../Board.css'


const Cards =({board,num})=>{
   const a=(a)=>{
      if(a=="모집중"){
         return "primary"
      }
      else if(a=="진행중") {return "danger"}
      else{ return "secondary"}
   }
	return(
		<li>
         <NavLink to ={`/detail/`+board.id+`/`+num} >
            <Card className="BoardList_Card">
            <Card.Body>
            <Card.Title className="b-card-title">{board.title}</Card.Title>
            <Card.Text className="b-card-text">
                 {board.contents}
            </Card.Text>
            <Card.Text>
                   <p className="text-muted">{board.cityArea} 총{board.totalSalary}만원</p>
                   <Badge variant={a(board.progressState)}>{board.progressState}</Badge>  
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