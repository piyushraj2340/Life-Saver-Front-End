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
            <h2>Search Blood</h2>
          </div>
          <div className="search-form">
            <form action="" method="post">
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="state">State</label>
                  <select name="state" id="state" required onChange={(e)=> {updateDistrict(e)}}>
                    <option value="">--Select State--</option>
                    <State />
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="district">District</label>
                  <select name="district" id="district" required>
                    <option value="" >--Select District--</option>
                    {renderDistrict}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="bloodType">Blood Type</label>
                  <select name="bloodType" id="bloodType" required>
                    <option value="" >--Select Blood Type--</option>
                    <option value="all" >All Blood Groups</option>
                    <option value="a_positive" >A +Ve</option>
                    <option value="a_negative" >A -Ve</option>
                    <option value="b_positive" >B +Ve</option>
                    <option value="b_negative" >B -Ve</option>
                    <option value="ab_positive" >AB +Ve</option>
                    <option value="ab_negative" >AB -Ve</option>
                    <option value="o_positive" >O +Ve</option>
                    <option value="o_negative" >O -Ve</option>
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