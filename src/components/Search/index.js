import React from "react"

function Search(){
    return(
        <div class="form-group row">
          <label for="NameSearch" class="col-sm-2 col-form-label">Name Search</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="NameSearch" />
          </div>
        </div>
    )
}

export default Search