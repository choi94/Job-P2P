import React from 'react'
import {Link} from 'react-router-dom'
import {ListGroup} from 'react-bootstrap'

const ResMiniList = (props) => {
    return (
         <ListGroup>
            <ListGroup.Item className="ResBox">
                    <div className="ResBoxTitle">{props.index + 1}</div>
                    <div className="ResBoxTitle1">{props.list.volunteer_Date.substring(0, 10)}</div>
                    <div className="ResBoxTitle1">
                        <Link to={`/detail/${props.list.workBoard.id}`}>
                        {props.list.workBoard.title}
                        </Link>
                    </div>
                    <div className="ResBoxTitle2">{props.list.workBoard.totalSalary}만원</div>
                    <div className="ResBoxTitle2">{props.list.workBoard.recruit.substring(13)}</div>
                    <div className="ResBoxTitle2">{props.list.workBoard.progressState}</div>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default ResMiniList