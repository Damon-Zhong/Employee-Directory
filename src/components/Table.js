import React from "react"
import TableRow from "./TableRow"

function Employeedata( props ){
  function changeOrder( event ){
    const orderKey = event.target.value
    console.log( `[changeOrder] by ${orderKey} `, event.target )

    props.orderTable( orderKey )
  }

  return (
      <table className="table">
        <thead>
            <tr> 
                <th scope="col"><button  onClick={changeOrder} value='Gender'>Gender</button></th>
                <th onClick={changeOrder} scope="col" value='Name'>Name</th>
                <th scope="col" value='Location'>Location</th>
                <th scope="col" value='Email'>Email</th>
            </tr>
        </thead>
        <tbody>
        {props.employeeData.map( employee => <TableRow {...employee} />)}
        </tbody>
      </table>
      
  )
}

export default Employeedata