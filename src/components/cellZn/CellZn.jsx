import React, { useState } from "react";
import "./cellZn.css";
import Zus from "../zus/Zus";
import CellText from "../cellText/CellText";
import Zn from "../zn/Zn";

const CellZn = ({ number, name, inf1="", inf2="", devicesStatus, handleToggleDevice }) => {
  const {r1, r2, zn1, zn2, vv} = devicesStatus;

  return (
    <div className="cell-zn">
      <div className="cell-zn__start">
        <CellText>{number}</CellText>
      </div>
      <div className="cell-zn__horiz-line0"></div>
      <div className="cell-zn__horiz-line1"></div>
      <div className="cell-zn__vertical-line11">
        <div className="cell-zn__vertical-line2-zn1">
          <Zn cellNumber={number} location={"zn1"} isActive={zn1} handleToggle={handleToggleDevice}></Zn>
        </div>
        <div className="cell-zn__zus-1">
          <Zus></Zus>
        </div>
      </div>
      <div className="cell-zn__horiz-line-end"></div>
      <div className="cell-zn__end">
        <CellText>{name}</CellText>
        <CellText>{inf1}</CellText>
        <CellText>{inf2}</CellText>
      </div>
    </div>
  );
};

export default CellZn;
