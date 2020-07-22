import React from "react"

function TableRow( props ){
    return(
        <tr>
            <th scope="row">{props.gender}</th>
            <td>{props.name.first+' '+props.name.last}</td>
            <td>{props.location.city}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default TableRow