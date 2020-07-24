import React from "react"
import TableRow from "./TableRow"

function DataTable( props ){
  function changeOrder( event ){
    const orderKey = event.target.textContent.toLowerCase()
    console.log( `[changeOrder] by ${orderKey} `, event.target )

    props.orderTable( orderKey )
  }

  return (
      <table className="table">
        <thead>
            <tr onClick={changeOrder}> 
              <th scope="col">Index</th>
              <th scope="col">Gender</th>
              <th  scope="col" >Name</th>
              <th scope="col">Location</th>
              <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
        {props.employeeData.map( (employee, idx) => <TableRow {...employee} key={idx} idx={idx+1} />)}
        </tbody>
      </table>
      
  )
}

export default DataTable