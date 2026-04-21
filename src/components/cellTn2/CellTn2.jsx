import React, { useState } from "react";
import "./cellTn2.css";
import Rr from "../rr/Rr";
import Zus from "../zus/Zus";
import CellText from "../cellText/CellText";
import Zn from "../zn/Zn";

const CellTn2 = ({ number, name, inf1="", inf2="", devicesStatus, handleToggleDevice }) => {
  const {r1, r2, zn1, zn2, vv} = devicesStatus;


  return (
    <div className="cell-tn2">
      <div className="cell-tn2__start">
        <CellText>{number}</CellText>
      </div>
      <div className="cell-tn2__horiz-line0"></div>
      <div className="cell-tn2__horiz-line1"></div>
      
      <div className="cell-tn2__vertical-line1">
        <div className="cell-tn2__vert-line-r-1">
          <Rr cellNumber={number} location={"r1"} isActive={r1} handleToggle={handleToggleDevice}></Rr>
        </div>
        <div className="cell-tn2__vertical-line-zn-1">
          <div className="cell-tn2__horizontal-line-zn1"></div>
          <div className="cell-tn2__vertical-line-zn1">
            <div className="cell-tn2__vertical-line-zn-square">
              <Zn cellNumber={number} location={"zn1"} isActive={zn1} handleToggle={handleToggleDevice}></Zn>
            </div>
            <div className="cell-tn2__zus">
              <Zus></Zus>
            </div>
          </div>
        </div>
        <div className="cell-tn2__circle1"></div>
        <div className="cell-tn2__circle2"></div>
        <div className="cell-tn2__circle3"></div>
      </div>
      <div className="cell-tn2__horiz-line-end"></div>
      <div className="cell-tn2__end">
        <CellText>{name}</CellText>
        <CellText>{inf1}</CellText>
        <CellText>{inf2}</CellText>
      </div>
    </div>
  );
};

export default CellTn2;