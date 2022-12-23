import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const UserDetails = ({ data }) => {
  const [perpageData, setPerPage] = useState(data);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    setPerPage(data.slice((pageNo - 1) * 5, pageNo * 5));
  }, [pageNo]);

  const filterByCountry = (e) => {
    console.log(e.target.value);
    let filterData = data.filter(
      (elem) => elem.location.country == e.target.value
    );

    console.log(filterData);
    setPerPage(filterData);
  };
  return (
    <div>
      <label htmlFor="">Filer By country: </label>
      <select onChange={filterByCountry}>
        <option value="#">Filter By country</option>
        <option value="India">India</option>
        <option value="United State">United state</option>
        <option value="Brazil">Brazil</option>
        <option value="Mexico">Mexico</option>
        <option value="France">France</option>
        <option value="Canada">Canada</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Norway">Norway</option>
        <option value="Australia">Australia</option>
        <option value="Denmark">Denmark</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Germany">Germany</option>
        <option value="Norway">Norway</option>
        <option value="Spain">Spain</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Ireland">Ireland</option>
        <option value="Netherlands">Netherlands</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Turkey">Turkey</option>
        <option value="Finland">Finland</option>
        <option value="Iran">Iran</option>
        <option value="Serbia">Serbia</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Cell</th>
            <th>City</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {!perpageData ? (
            <h1>Loading...</h1>
          ) : (
            perpageData.map((elem, index) => (
              <tr key={index}>
                <td>
                  <img src={elem.picture.large} alt={elem.name.first} />
                </td>
                <td>
                  {elem.name.title} {elem.name.first} {elem.name.last}
                </td>
                <td>{elem.gender}</td>
                <td>{elem.email}</td>
                <td>{elem.cell}</td>
                <td>{elem.location.city}</td>
                <td>{elem.location.country}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div>
        <button disabled={pageNo == 1} onClick={() => setPageNo(pageNo - 1)}>
          Prev
        </button>
        <span>{pageNo}</span>
        <button
          disabled={pageNo * 5 == data.length}
          onClick={() => setPageNo(pageNo + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
