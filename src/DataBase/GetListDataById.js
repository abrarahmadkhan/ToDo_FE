import { useEffect, useState } from "react";
import axios from "axios";

export default function ListById() {
    const [tableData, setTableData] = useState([null]);
    async function getData() {
        const allData = await axios.get(`http://localhost:3000/employee/job/3`);
        setTableData(allData);
      }
    
      useEffect(() => {
        getData();
      }, []);
      console.log(tableData.data[0].List);
      return (tableData.data[0].List)
}