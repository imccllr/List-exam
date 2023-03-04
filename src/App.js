import React, { useState, useEffect, useMemo } from "react";
import InputForm from "./Components/InputForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Pagination from './Components/Pagination';
import Row from "./Components/Row";

export default function App() {
  const [data, setData] = useState([]);
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

    React.useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);


  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [data, currentPage, PageSize]);

 // The table is supposed to re-draw when an element is added, however I don't know why this useMemo is not triggering even when the setData function is being called in line 36 and data is one of the dependencies
 // I was not able to figure out the issue. You can actually see that the element is being added by switching to page 2 or any page but 1, and then going back to page 1.

  const sendUpInput = (val) => {
      const temp = data;
      temp.unshift({
            "userId": Math.floor(Math.random() * 10001),
            "id": Math.floor(Math.random() * 10001),
            "title": val,
            "completed": false});
      setData(temp);
  }

  return (
    <div className="App">
      <h1>React test</h1>
      <InputForm sendUpInput={sendUpInput}/>
        <Table bordered>
            <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Description</th>
                  <th>Completed</th>
                </tr>
            </thead>
            <tbody>
            {currentTableData.map(register => 
                <Row register={register}/>
            )}
            </tbody>
        </Table>
        <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}
