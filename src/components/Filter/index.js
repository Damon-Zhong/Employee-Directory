import React from "react"

function Filter() {
    return(
        <div class="form-group row">
          <label for="Filter" class="col-sm-2 col-form-label">Filter</label>
          <div class="col-sm-10">
            <select class="form-control form-control-lg">
              <option selected>Name</option>
              <option>Email</option>
              <option>Pet</option>
            </select>
          </div>
        </div>
    )
}

export default Filter