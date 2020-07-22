import React, { useState } from 'react';
import './App.css';
import Search from "./components/Search"
import Datatable from "./components/Table"
import employeeData from "./employeedata.json" 

function App() {

  const [ employeeList, setList ]= useState( { list: employeeData, searchKey: '', orderKey: '' } )
  // const [ nonorderList, setOrderList ] = useState ( { list: employeeData } )
  console.log( `[App] employeeList:`, employeeList )

  function searchEmployee( searchKey ){
    console.log( `searching for employees: ${searchKey}` )
    const resultList = employeeData.filter( employee => employee.name.first.toLowerCase().includes( searchKey.toLowerCase() ) || employee.name.last.toLowerCase().includes( searchKey.toLowerCase() ) )
    setList( { ...employeeList, searchKey, list: resultList })
  }

  function orderTable( orderKey ){
    console.log( `reordering table by: ${orderKey}`)
    let result
    const resltList = employeeList.list.sort()
    //   (a, b) => {
    //   switch( orderKey ){
    //     default:
    //       console.log( `Order key not found!`)
    //       break;
    //     case "Gender":
    //       result = a[orderKey] > b[orderKey] ? 1 : -1;
    //       break;
    //     case "Name":
    //       result = a.name.first > b.name.first ? 1:-1
    //       break;
    //     case "Location":
    //       result = a.location.city > b.location.city ? 1:-1
    //       break;
    //     case "Email":
    //       result = a[orderKey] > b[orderKey] ? 1 : -1;
    //       break;
    //   }
    //   console.log( result )
    //   return result
    // })
    setList( { ...employeeList, orderKey, list: resltList })
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center" style={{backgroundColor:"navy",height:"30vh"}}>
        <h1 style={{color:"white"}}>Employee Directory</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center" style={{backgroundColor:"lightgrey",height:"15vh"}}>
        <form>
          < Search searchKey={employeeList.searchKey} searchEmployee={searchEmployee} />
        </form>
      </div>
      {/* <form>
        
        < Filter />
      </form> */}
        < Datatable employeeData={employeeList.list} orderTable={orderTable}/>
    </div>
  );
}

export default App;
