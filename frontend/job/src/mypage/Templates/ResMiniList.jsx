import React from 'react'

const ResMiniList = (props) => {
    console.dir(props)
    return (
        <tbody>
            <tr>
                <td>{props.index + 1}</td>
                <td>{props.list.volunteer_Date.substring(0, 10)}</td>
                <td>{props.list.workBoard.title}</td>
                <td>{props.list.workBoard.totalSalary}만원</td>
                <td>{props.list.workBoard.recruit.substring(13)}</td>
                <td>{props.list.workBoard.progressState}</td>
            </tr>
        </tbody>
    )
}

export default ResMiniList