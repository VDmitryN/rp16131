import React, { useState } from "react";
import Cell from "../cell/Cell";
import "./cellList.css"

const CellList = () => {
  const [cellListsData, setCellListsData] = useState([
    {
      id: 2,
      number: 2,
      name: "Резерв",
    },
    {
      id: 3,
      number: 3,
      name: "Резерв",
    },
    {
      id: 4,
      number: 4,
      name: "Резерв",
    },
    {
      id: 5,
      number: 5,
      name: "Резерв",
    },
    {
      id: 6,
      number: 6,
      name: "Резерв",
    },
    {
      id: 7,
      number: 7,
      name: "КТП-23",
      inf1: "Т-1",
      inf2: "1000 кВА"
    },
    {
      id: 8,
      number: 8,
      name: "Стройка",
    },
    {
      id: 9,
      number: 9,
      name: "Ввод-1",
      inf1: "ф.16131 (1,2,3)"
    },
  ]);
  return (
    <div className="cell-list">
      {cellListsData.map((el) => (
        <Cell key={el.id} number={el.number} name={el.name} inf1={el.inf1} inf2={el.inf2}></Cell>
      ))}
    </div>
  );
};

export default CellList;
