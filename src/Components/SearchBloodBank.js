import React, { useState } from 'react'
import State from './Shared/State'
import StateDistrict from '../API/StateDistrict';

const SearchBlood = () => {

  const [district, setDistrict] = useState([]);

  const updateDistrict = (e) => {
    e.preventDefault();
    const state = StateDistrict.filter((elem) => e.target.value == elem.state);
    setDistrict([...state[0].districts]);
  }

  const renderDistrict = district.map((elem,index) => {
    return <><option key={index} value={elem}>{elem.toUpperCase()}</option></>
  });

  return (
    <div className="container-search">
      <div className="content-search">
        <div className="information-form">
          <div className="search-header">
            <h2>Search Blood Bank</h2>
          </div>
          <div className="search-form">
            <form action="" method="post">
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="state">State</label>
                  <select name="state" id="state" onChange={(e)=> {updateDistrict(e)}} required>
                    <option value="">--Select State--</option>
                    <State />
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="district">District</label>
                  <select name="district" id="district" required>
                    <option value="">--Select District--</option>
                    {renderDistrict}
                  </select>
                </div>
                <div className="form-field">
                  <input type="submit" value="Search" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="information-result">
          <div className="search-blood-header">
            <h2>Showing Information</h2>
          </div>
          <div className="result">

          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBlood