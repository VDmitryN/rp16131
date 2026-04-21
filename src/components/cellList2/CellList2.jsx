import React, { useState } from "react";
import Cell from "../cell/Cell";
import "./cellList2.css";

const CellList2 = ({ devicesStatus, handleToggleDevice }) => {
  const [cellListsData, setCellListsData] = useState([
    {
      id: 23,
      number: 23,
      name: "Резерв",
      inf1: "",
      inf2: "",
    },
    {
      id: 22,
      number: 22,
      name: "Резерв",
      inf1: "",
      inf2: "",
    },
    {
      id: 21,
      number: 21,
      name: "Резерв",
      inf1: "",
      inf2: "",
    },
    {
      id: 20,
      number: 20,
      name: "Резерв",
      inf1: "",
      inf2: "",
    },
    {
      id: 19,
      number: 19,
      name: "Резерв",
      inf1: "",
      inf2: "",
    },
    {
      id: 18,
      number: 18,
      name: "КТП-23",
      inf1: "Т-2",
      inf2: "1000 кВА",
    },
    {
      id: 17,
      number: 17,
      name: "Резерв",
      inf1: "",
      inf2: "",
    },
    {
      id: 16,
      number: 16,
      name: "Резерв",
      inf1: "",
      inf2: "",
    },
  ]);

  return (
    <div className="cell-list2">
      {cellListsData.map((el) => (
        <Cell
          key={el.id}
          number={el.number}
          name={el.name}
          inf1={el.inf1}
          inf2={el.inf2}
          devicesStatus={devicesStatus}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
      ))}
    </div>
  );
};

export default CellList2;
