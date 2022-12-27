import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../components/data.module.css";

export const UserDetails = ({ data }) => {
  const [perpageData, setPerPage] = useState(data);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    setPerPage(data.slice((pageNo - 1) * 4, pageNo * 4));
  }, [pageNo]);

  const filterByCountry = (e) => {
    console.log(e.target.value);
    let filterData = data.filter(
      (elem) => elem.location.country == e.target.value
    );
    console.log(filterData);
    setPerPage(filterData);
  };

  const filterbyGender = (e) => {
    console.log(e.target.value);
    let filterBygender = data.filter((elem) => elem.gender == e.target.value);
    console.log(filterBygender);
    setPerPage(filterBygender);
  };
  return (
    <div>
      <label htmlFor="">Filter By Gender: </label>
      <select onChange={filterbyGender}>
        <option value="#">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      
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
      <table className={styles.tablediv}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Image</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Gender</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Cell</th>
            <th className={styles.th}>City</th>
            <th className={styles.th}>country</th>
          </tr>
        </thead>
        <tbody>
          {!perpageData ? (
            <h1>Loading...</h1>
          ) : (
            perpageData.map((elem, index) => (
              <tr className={styles.tr} key={index}>
                <td className={styles.td}>
                  <img
                    style={{ borderRadius: "5px" }}
                    src={elem.picture.large}
                    alt={elem.name.first}
                  />
                </td>
                <td className={styles.td}>
                  {elem.name.title} {elem.name.first} {elem.name.last}
                </td>
                <td className={styles.td}>{elem.gender}</td>
                <td className={styles.td}>{elem.email}</td>
                <td className={styles.td}>{elem.cell}</td>
                <td className={styles.td}>{elem.location.city}</td>
                <td className={styles.td}>{elem.location.country}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className={styles.paginationdiv}>
        <button
          className={styles.pagination_btn}
          disabled={pageNo == 1}
          onClick={() => setPageNo(pageNo - 1)}
        >
          Prev
        </button>
        <span className={styles.span}>{pageNo}</span>
        <button
          className={styles.pagination_btn}
          disabled={pageNo * 5 == data.length}
          onClick={() => setPageNo(pageNo + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
