import { useState } from "react";
import Cell from "./components/cell/Cell";
import "./app.css";
import CellTn from "./components/cellTn/CellTn";
import CellZn from "./components/cellZn/CellZn";
import CellF from "./components/cellF/CellF";
import CellTn2 from "./components/cellTn2/CellTn2";
import CellF2 from "./components/cellF2/CellF2";
import CellSmv from "./components/cellSmv/CellSmv";
import Button from "./components/button/Button";
import Modal from "react-modal";
import dataDefaultStateForCells from "./dataDefaultStateForCells.json"
import dataDefaultStateForCells00 from "./dataDefaultStateForCells00.json"

const config = [
  {
    title: "1 секция",
    cells: [
      {
        id: 2,
        number: 2,
        name: "Резерв",
        inf1: null,
        inf2: null,
        // обязательно добавить тип ячейки: type: ""
        // хранить ли старт состояние оборудования ячейки?!
        devices: [
          {
            name: "ВВ",
            num: 1,
            dwo: "W",
            location: "vv",
            isActive: false,
          },
        ],
      },
    ],
  },
  {
    title: "2 секция",
    cells: [],
  },
];

const App = () => {
  // const [statusDevicesCells, setStatusDevicesCells] = useState({
  //   1: {
  //     r1: null,
  //     r2: null,
  //     zn1: false,
  //     zn2: null,
  //     vv: null,
  //     dwo: null,
  //   },
  //   2: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   3: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   4: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   5: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   6: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   7: {
  //     r1: true,
  //     r2: true,
  //     zn1: false,
  //     zn2: false,
  //     vv: true,
  //     dwo: null,
  //   },
  //   8: {
  //     r1: true,
  //     r2: true,
  //     zn1: false,
  //     zn2: false,
  //     vv: true,
  //     dwo: null,
  //   },
  //   9: {
  //     r1: true,
  //     r2: true,
  //     zn1: false,
  //     zn2: false,
  //     vv: true,
  //     dwo: null,
  //   },
  //   10: {
  //     r1: null,
  //     r2: null,
  //     zn1: null,
  //     zn2: null,
  //     vv: null,
  //     dwo: null,
  //   },
  //   11: {
  //     r1: true,
  //     r2: true,
  //     zn1: false,
  //     zn2: false,
  //     vv: null,
  //     dwo: null,
  //   },
  //   12: {
  //     r1: true,
  //     r2: null,
  //     zn1: false,
  //     zn2: null,
  //     vv: false,
  //     dwo: null,
  //   },
  //   24: {
  //     r1: null,
  //     r2: null,
  //     zn1: false,
  //     zn2: null,
  //     vv: null,
  //     dwo: null,
  //   },
  //   23: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   22: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   21: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   20: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   19: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   18: {
  //     r1: true,
  //     r2: true,
  //     zn1: false,
  //     zn2: false,
  //     vv: true,
  //     dwo: null,
  //   },
  //   17: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   16: {
  //     r1: false,
  //     r2: false,
  //     zn1: false,
  //     zn2: false,
  //     vv: false,
  //     dwo: null,
  //   },
  //   15: {
  //     r1: null,
  //     r2: null,
  //     zn1: null,
  //     zn2: null,
  //     vv: null,
  //     dwo: null,
  //   },
  //   14: {
  //     r1: true,
  //     r2: true,
  //     zn1: false,
  //     zn2: false,
  //     vv: true,
  //     dwo: null,
  //   },
  //   13: {
  //     r1: true,
  //     r2: null,
  //     zn1: false,
  //     zn2: null,
  //     vv: null,
  //     dwo: null,
  //   },
  // });

  const [typeSchema, setTypeSchema] = useState("normal"); // normal | off
  const [statusDevicesCells, setStatusDevicesCells] = useState(() => typeSchema === "normal" ? dataDefaultStateForCells : dataDefaultStateForCells00);
  const [isOpenModal, setIsOpenModal] = useState(false);

  /* 
  
  cellNumber - номер ячейки
   location - название оборудования при клике
   status - статус оборудования после клика

  */

  const handleToggleDevice = ({ cellNumber, location, status }) => {
    if (statusDevicesCells[cellNumber][location] === null) {
      return;
    }

    console.log(cellNumber, location, status);

    setStatusDevicesCells({
      ...statusDevicesCells,
      [cellNumber]: {
        ...statusDevicesCells[cellNumber],
        [location]: status,
      },
    });
  };

  const customStylesForModal = {
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "400px",
      height: "150px",
    },
  };

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        style={customStylesForModal}
        appElement={document.getElementById("root")}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button handler={() => setIsOpenModal(false)} use={""}>
            X
          </Button>
        </div>
        <div>
          Схема-макет РП-10 кВ для демонстрации и анализа оперативных
          переключений.
        </div>
      </Modal>
      <div className="app__buttons">
        <Button handler={() => setIsOpenModal(true)} use={"primary"}>
          О схеме?
        </Button>
        <Button
          handler={() => {
            setStatusDevicesCells(dataDefaultStateForCells00);
            setTypeSchema("off");
          }}
          use={typeSchema === "off" ? "success" : "primary"}
        >
          Схема РП
        </Button>
        <Button
          handler={() => {
            setStatusDevicesCells(dataDefaultStateForCells);
            setTypeSchema("normal");
          }}
          use={typeSchema === "normal" ? "success" : "primary"}
        >
          "Нормальная схема" РП
        </Button>
      </div>

      <h1 className="app__title1">РП - 16131 (РУ - 10 кВ)</h1>

      <div className="app__title2">1 секция</div>

      <div className="app__sec1">
        <CellZn
          key={1}
          number={1}
          name={"ЗН - 1сш"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[1]}
          handleToggleDevice={handleToggleDevice}
        ></CellZn>
        <Cell
          key={2}
          number={2}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[2]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={3}
          number={3}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[3]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={4}
          number={4}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[4]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={5}
          number={5}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[5]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={6}
          number={6}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[6]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={7}
          number={7}
          name={"КТП-23"}
          inf1={"Т-1"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[7]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={8}
          number={8}
          name={"Стройка"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[8]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={9}
          number={9}
          name={"Ввод-1 фид."}
          inf1={"16131 - 1,2,3"}
          inf2={"Прожектор"}
          devicesStatus={statusDevicesCells[9]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <CellF
          key={10}
          number={10}
          name={"Каб. ввод-1"}
          inf1={"ф.16131"}
          inf2={"каб. 1, 2, 3"}
          devicesStatus={statusDevicesCells[10]}
          handleToggleDevice={handleToggleDevice}
        ></CellF>
        <CellTn
          key={11}
          number={11}
          name={"ТН - 1сш"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[11]}
          handleToggleDevice={handleToggleDevice}
        ></CellTn>
        <CellSmv
          key={12}
          number={12}
          name={"CBB"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[12]}
          handleToggleDevice={handleToggleDevice}
        ></CellSmv>

        {/* <CellList></CellList>
        <CellF
          key={10}
          number={10}
          name={"Каб. ввод"}
          inf1={"1 секции"}
          inf2={""}
        ></CellF>
        <CellTn
          key={11}
          number={11}
          name={"ТН - 1с"}
          inf1={""}
          inf2={""}
        ></CellTn> */}
      </div>
      <div className="app__title3">2 секция</div>
      <div className="app__sec2">
        <CellZn
          key={24}
          number={24}
          name={"ЗН - 1сш"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[24]}
          handleToggleDevice={handleToggleDevice}
        ></CellZn>
        <Cell
          key={23}
          number={23}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[23]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={22}
          number={22}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[22]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={21}
          number={21}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[21]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={20}
          number={20}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[20]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={19}
          number={19}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[19]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={18}
          number={18}
          name={"КТП-23"}
          inf1={"Т-2"}
          inf2={"1000 кВА"}
          devicesStatus={statusDevicesCells[18]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={17}
          number={17}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[17]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <Cell
          key={16}
          number={16}
          name={"Резерв"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[16]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <CellF2
          key={15}
          number={15}
          name={"Каб. ввод-2"}
          inf1={"ф.16131"}
          inf2={"каб. 4, 5, 6"}
          devicesStatus={statusDevicesCells[15]}
          handleToggleDevice={handleToggleDevice}
        ></CellF2>
        <Cell
          key={14}
          number={14}
          name={"Ввод-2 фид."}
          inf1={"16131 - 4,5,6"}
          inf2={"Прожектор"}
          devicesStatus={statusDevicesCells[14]}
          handleToggleDevice={handleToggleDevice}
        ></Cell>
        <CellTn2
          key={13}
          number={13}
          name={"ТН - 2сш"}
          inf1={""}
          inf2={""}
          devicesStatus={statusDevicesCells[13]}
          handleToggleDevice={handleToggleDevice}
        ></CellTn2>
        {/* <CellList2
          devicesStatus={statusDevicesCells}
          handleToggleDevice={handleToggleDevice}
        ></CellList2>
         <CellZn
          key={24}
          number={24}
          name={"ЗН 2-сш"}
          inf1={"79"}
          inf2={"!!&?"}
        ></CellZn>
        <CellList2></CellList2>
        <CellF
          key={15}
          number={15}
          name={"Каб. ввод"}
          inf1={"2 секции"}
          inf2={""}
        ></CellF>
        <Cell
          key={14}
          number={14}
          name={"Ввод-2"}
          inf1={"ф.16131 (4,5,6)"}
          inf2={""}
        ></Cell>
        <CellTn2
          key={13}
          number={13}
          name={"ТН - 2с"}
          inf1={""}
          inf2={""}
        ></CellTn2> */}
      </div>
    </>
  );
};

export default App;

/* 

ДЗ:
облагородить строчку 35 (создать компонент tarifsList) и прокидывать данные туда
создать компонент карточка тарифа "TarifCard"
внутри карточки отображать id title компонент counter(должен начинаться с number)

*/
