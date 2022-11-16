import React, { useState } from 'react'
import State from './Shared/State'
import StateDistrict from '../API/StateDistrict';

const SearchBlood = () => {

  const [district, setDistrict] = useState([]);
  const [status, setStatus] = useState(false);
  const [bloodBank, setBloodBank] = useState([]);

  const updateDistrict = (e) => {
    e.preventDefault();
    const state = StateDistrict.filter((elem) => e.target.value == elem.state);
    setDistrict([...state[0].districts]);
  }

  const renderDistrict = district.map((elem, index) => {
    return <React.Fragment key={Number(index)} ><option value={elem}>{elem.toUpperCase()}</option></React.Fragment>
  });

  const handelSearch = async (e) => {
    try {
      e.preventDefault(e);
      const res = await fetch('search/blood-bank', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();

      if (result.status) {
        setStatus(true);
        setBloodBank(...bloodBank, result.result);
      } else {
        setBloodBank(...bloodBank, []);
        setStatus(false);
      }

    } catch (err) {
      console.log(err);
    }

  }

  const BloodInfo = () => {
    const info = bloodBank.map((e, i) => {
      return (
        <div key={i} className="result-information">
          <div className="head-sr-no">{i + 1}</div>
          <div className="head-blood-bank">{e.bloodBankName}</div>
          <div className="head-address">{e.address}</div>
          <div className="head-contact-us">{e.email} | {e.phone}</div>
          <div className="head-category">{e.category}</div>
        </div>
      )
    });

    console.log(info);

    return info
  }

  return (
    <div className="container-search">
      <div className="content-search">
        <div className="information-form">
          <div className="search-header">
            <h2>Search Blood Bank</h2>
          </div>
          <div className="search-form">
            <form method="get">
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="state">State</label>
                  <select name="state" id="state" onChange={(e) => { updateDistrict(e) }} required>
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
                  <input type="submit" value="Search" onClick={handelSearch}/>
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
            <div className="result-content">
              <div className="result-header">
                <div className="head-sr-no">S.No.</div>
                <div className="head-blood-bank">Blood Bank</div>
                <div className="head-address">Address</div>
                <div className="head-contact-us">Contact Us</div>
                <div className="head-category">Category</div>
              </div>
              {status ?

                <BloodInfo />


                :
                <div className="no-result"></div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBlood