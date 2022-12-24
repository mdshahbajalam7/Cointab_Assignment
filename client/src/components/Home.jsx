import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/data.module.css";

export const Home = ({ data, setData }) => {
  const [showAlert, setAlert] = useState(false);
  const navigate = useNavigate();

  const getdata = async () => {
    let datalist = [];
    for (let a = 0; a < 50; a++) {
      let res = await fetch(
        "https://fine-ruby-chimpanzee-hem.cyclic.app/fetch-user"
      );
      let data = await res.json();
      datalist.push(data);
    }
    // console.log(datalist)
    return datalist;
  };

  const fetchData = async () => {
    setAlert(true);
    let fetch = await getdata();
    console.log(fetch);
    setData(fetch);
    alert("Fetched sucessfully");
    setAlert(false);
  };
  const deleteData = () => {
    setData([]);
    alert("Data removed sucessfully");
  };
  const userDetails = () => {
    navigate("/user-details");
  };
  return (
    <div className={styles.button_div}>
      <button className={styles.btn1} onClick={fetchData}>
        Fetch data
      </button>
      <button className={styles.btn1} onClick={deleteData}>
        Delete data
      </button>
      <button className={styles.btn1} onClick={userDetails}>
        User details
      </button>
      <h1>{showAlert && "Data fatching..."}</h1>
    </div>
  );
};
