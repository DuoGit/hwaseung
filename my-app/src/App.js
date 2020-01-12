import React, { View, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { Input } from "@material-ui/core";

import * as axios from "axios";

const MAX_CYCLE = 5;
// var data = null;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1", ""),
  createData("2", ""),
  createData("3", ""),
  createData("4", ""),
  createData("5", "")
];

var operation1 = ["o1", "o2"];

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    textAlign: "center"
  },
  table: {
    minWidth: 650
  }
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();

  const [input, setInput] = React.useState("");
  const [input2, setInput2] = React.useState("");

  const [item, setItem] = React.useState("");
  const [operation, setOperation] = React.useState("");

  const [openItem, setOpenItem] = React.useState(false);
  const [openOperation, setOpenOperation] = React.useState(false);

  const [openTimer, setOpenTimer] = React.useState("hidden");
  var myVar;
  var startTimer = false;

  const [data, setData] = useState();

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const response = await axios("./structure.json");

      if (mounted) {
        setData(response.data);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };

    // fetch("./structure.json")
    // .then(response => {
    //   // console.log(response[2]);
    //   // data = response[2];
    //   // setData(response[2]);
    //   return response.json();
    // })
    // .then(d => {
    //   // Work with JSON data here
    //   data = d;
    //   setData(d);
    //   console.log(data);
    // })
    // .catch(err => {
    //   // Do something for an error here
    //   console.log("Error Reading data " + err);
    // });
  }, []);

  var times = [];

  const handleItemChange = event => {
    // setItem(event.target.value);
    setItem(event.target.value);
  };

  const handleOperationChange = event => {
    setOperation(event.target.value);

    if (item != "" && event.target.value != "") {
      setOpenTimer("visible");
    }
  };

  const handleItemClose = () => {
    setOpenItem(false);
  };

  const handleOperationClose = () => {
    setOpenOperation(false);
  };

  const handleItemOpen = () => {
    setOpenItem(true);
  };

  const handleOperationOpen = () => {
    setOpenOperation(true);
  };

  const showBtn = () => {
    setOpenTimer("visible");
  };

  const timerOnClick = () => {
    if (times.length >= MAX_CYCLE) {
      return 0; // do nothing
    }

    if (startTimer == false) {
      // start timer
      startTimer = true;
      document.getElementById("timerLabel").innerHTML = "Stop";
      myVar = setInterval(myTimer, 1000);
    } else {
      // stop timer
      startTimer = false;
      clearInterval(myVar);
      let t = document.getElementById("demo").innerHTML;
      times.push(t);

      //
      var isNewData = true;
      data.map((item, idx) => {
        if (item.name == input) {
          console.log(item);
          for (var obj in item["processList"]) {
            if (item["processList"][obj]["processName"] == input2) {
              isNewData = false;
              let d = data;
              d[idx]["processList"][obj] = {
                "processName": d[idx]["processList"][obj]["processName"],
                "cycleList": times
              }
              setData(d);
            }
          }

          // console.log(isNewData, input, input2);
          // if (isNewData && input != "" && input2 != "") {
          //   let d = data;
          //   d[idx]["processList"].push({
          //     processName: input2,
          //     cycleList: times
          //   });
          //   setData(d);
          //   console.log("d: ", d);
          //   setOpenTimer("visible");
          // } else {
          //   setOpenTimer("hidden");
          // }

          // item["processList"].map(process => {
          //   if (process["processName"] == input2) {

          //   } else {
          //     // add process
          //     console.log('assas');
          //   }
          // });
        } else {
          data.push({
            name: input,
            processList: []
          });
          setData(data);
        }

        console.log("data 1212");
      });

      //

      document.getElementById("time_" + (times.length - 1)).innerHTML = t;

      document.getElementById("demo").innerHTML = 0;
      document.getElementById("timerLabel").innerHTML = "Start";

      console.log(times);
    }
  };

  const myTimer = () => {
    var t = document.getElementById("demo").innerHTML - 0;
    document.getElementById("demo").innerHTML = t + 1;
  };

  var itemList = [
    {
      id: 0,
      name: "Shoes 1"
    },
    {
      id: 1,
      name: "Shoes 2"
    }
  ];

  var operationList = [
    {
      item_id: 0,
      name: [
        { id: 0, task: "chuẩn bị + phối đồ" },
        { id: 1, task: "ép góc nóng lạnh + ép mũi" }
      ]
    }
  ];

  const addItem = e => {
    console.log(e.target.value);
    // let input = e.target.value;
    setInput(e.target.value);
  };

  const addOperation = e => {
    console.log(e.target.value);
    // let input = e.target.value;
    setInput2(e.target.value);
  };

  const addFunc = () => {
    console.log("item");
    var isNewData = true;

    data.map((item, idx) => {
      if (item.name == input) {
        console.log(item);

        for (var obj in item["processList"]) {
          console.log(obj);
          console.log("input2: ", input2);
          if (item["processList"][obj]["processName"] == input2) {
            console.log("asas");
            // alert("Duplicate Item and Process");
            isNewData = false;
            setOpenTimer("hidden");
            alert("Duplicate Item and Process");
            return;
          }
        }

        console.log(isNewData, input, input2);
        if (isNewData && input != "" && input2 != "") {
          let d = data;
          d[idx]["processList"].push({
            processName: input2,
            cycleList: times
          });
          setData(d);
          console.log("d: ", d);
          setOpenTimer("visible");
        } else {
          setOpenTimer("hidden");
        }

        // item["processList"].map(process => {
        //   if (process["processName"] == input2) {

        //   } else {
        //     // add process
        //     console.log('assas');
        //   }
        // });
      } else {
        data.push({
          name: input,
          processList: []
        });
        setData(data);
      }

      console.log("data 1212");
    });
  };

  const saveFile = () => {
    let a = document.createElement("a");
    a.href =
      "data:application/octet-stream," +
      encodeURIComponent(JSON.stringify(data));
    a.download = "myFile.json";
    a.click(); // we not add 'a' to DOM so no need to remove

    axios
      .get("www.google.com")
      .then(function(response) {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        width: "650px",
        textAlign: "center",
        alignContent: "center",
        alignSelf: "center",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <Input
        placeholder="please input item"
        onInput={addItem}
        style={{ width: "200px", fullWidth: true }}
      ></Input>

      <br />
      <Input
        placeholder="please input operation"
        onInput={addOperation}
        style={{ width: "200px", fullWidth: true }}
      ></Input>
      <br />
      <br />
      <Button
        onClick={addFunc}
        color="primary"
        variant="contained"
        style={{ width: "200px" }}
      >
        Add
      </Button>

      <br />
      <br />
      {/* openTimer css plss*/}
      <div style={{ visibility: openTimer }}>
        <Button
          onClick={timerOnClick}
          id="timerLabel"
          color="primary"
          variant="contained"
          style={{ width: "200px" }}
        >
          Start
        </Button>

        <p id="demo"></p>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Cycle</TableCell>
                <TableCell align="center">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" id={"time_" + index}></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Button
          onClick={saveFile}
          color="secondary"
          variant="contained"
          style={{ width: "200px" }}
        >
          Update
        </Button>
      </div>
    </div>
  );
}
