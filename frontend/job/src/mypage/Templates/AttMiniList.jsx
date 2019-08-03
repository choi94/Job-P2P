import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


const AttMiniList  = (props)=>{
    console.dir(props)
    return(
        <tbody>
            <tr>{/*거래*/}
                <td>{props.index + 1}</td>
                <td>{props.list.recruit}</td>
                <td>{props.list.title}</td>
                <td><Link to="/trans"><Button variant="danger">거래</Button></Link></td>
            </tr>
        </tbody>
    );
}

export default AttMiniList;