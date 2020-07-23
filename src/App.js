import React, { useState, useEffect } from 'react';
import './App.css';
import Search from "./components/Search"
import DataTable from "./components/DataTable"
// import employeeData from "./employeedata.json" 
import axios from 'axios'

function App() {

  const [ employeeList, setList ]= useState( { list: [], searchKey: '', isOrderAsc: false } )
  console.log( `[App] employeeList:`, employeeList )

  const randomList = async () => {
    await axios.get("https://randomuser.me/api/?results=10")
    .then(res => setList({ list: res.data.results }))
    .catch(err => console.log(err));
  } 

  useEffect(() => {
    randomList()
  }, []);

  function searchEmployee( searchKey ){
    console.log( `searching for employees: ${searchKey}` )
    const resultList = employeeList.list.filter( employee => employee.name.first.toLowerCase().includes( searchKey.toLowerCase() ) || employee.name.last.toLowerCase().includes( searchKey.toLowerCase() ) )
    setList( { ...employeeList, list: resultList, searchKey })
  }

  function orderTable( orderKey ){
    console.log( `reordering table by: ${orderKey}`)
    let resultList
    //If table is not ordered ascending, order the table ascending and change status to true
    if( !employeeList.isOrderAsc ){
      resultList = employeeList.list.sort( ( a, b ) => {
        switch( orderKey ){
              default:
                return 0;
              case "gender":
                return a[orderKey] > b[orderKey] ? 1 : -1;
              case "name":
                return a.name.first > b.name.first ? 1:-1
              case "location":
                return a.location.city > b.location.city ? 1:-1
              case "email":
                return a[orderKey] > b[orderKey] ? 1 : -1;
            }
      })
      setList( { ...employeeList, list: resultList, isOrderAsc: true })
    }else{
      resultList = employeeList.list.sort( ( a, b ) => {
        switch( orderKey ){
              default:
                return 0;
              case "gender":
                return a[orderKey] > b[orderKey] ? -1 : 1;
              case "name":
                return a.name.first > b.name.first ? -1 : 1
              case "location":
                return a.location.city > b.location.city ? -1 : 1
              case "email":
                return a[orderKey] > b[orderKey] ? -1 : 1
            }
      })
      setList( { ...employeeList, list: resultList, isOrderAsc: false })
    }
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
        < DataTable employeeData={employeeList.list} orderTable={orderTable}/>
    </div>
  );
}

export default App;
