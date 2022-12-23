import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = ({data,setData}) => {
    const [showAlert, setAlert] = useState(false)
    const navigate = useNavigate()

    const getdata=async()=>{
        let datalist=[]
        for (let a=0; a<30; a++){
          let res = await fetch("http://localhost:8080/fetch-user")
          let data = await res.json()
          datalist.push(data)
        }
        // console.log(datalist)
        return datalist
      }

      const fetchData=async()=>{
        setAlert(true)
        let fetch = await getdata()
        console.log(fetch);
        setData(fetch)
        alert("fetched sucessfully")
        setAlert(false)
      }
      const deleteData=()=>{
            setData([]);
            alert("data removed sucessfully")
      }
      const userDetails=()=>{
        navigate("/user-details")
      }
  return (
    <div>
        <button onClick={fetchData}>Fetch data</button>
        <button onClick={deleteData}>Delete data</button>
        <button onClick={userDetails}>User details</button>
        <h1>{showAlert&&"Data fatching"}</h1>
    </div>
  )
}
