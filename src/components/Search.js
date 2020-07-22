import React from "react"

function Search( props ){
  function handleInputChange( event ){
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log( `[handleInputChange] name(${name}) value(${value})` )

    // calling the parent updateFilter so the 'filter' property will be changed at the App level, adn then
    // propagated down
    props.searchEmployee( value )
  }

    return(
        <div className="form-group row">
          <label htmlFor="Search" className="col-sm-2 col-form-label">Search</label>
          <div className="form-inline col-sm-10">
            <input onChange={handleInputChange} type="text" className="form-control" id="Search" placeholder="search" />
            <button><i className="fas fa-search"></i></button>
          </div>
        </div>
    )
}

export default Search