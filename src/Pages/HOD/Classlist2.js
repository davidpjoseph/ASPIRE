import React, { useState, useEffect } from "react";
import "./Yearcard.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@duik/button";
import { Table } from "react-bootstrap";
import { BrightTot2 } from "../../components/List/BrightTot2";
import Studentlist3 from "../../components/List/Studentlist3";
import { WeakTot2 } from "../../components/List/WeakTot2";

function Classlist2() {
  const [sem, setSem] = useState("");
  const [batch, setClass] = useState("");
  const [active, setActive] = React.useState("");
  return(
    <div>
      <div className="yearcard_main">
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <InputLabel id="demo-simple-select-label">Sem</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Batch"
            onChange={(e) => setSem(e.target.value)}
          >
            <MenuItem value={1}>S1</MenuItem>
            <MenuItem value={2}>S2</MenuItem>
            <MenuItem value={3}>S3</MenuItem>
            <MenuItem value={4}>S4</MenuItem>
            <MenuItem value={5}>S5</MenuItem>
            <MenuItem value={6}>S6</MenuItem>
            <MenuItem value={7}>S7</MenuItem>
            <MenuItem value={8}>S8</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Class</InputLabel>
          <Select label="Class" onChange={(e) => setClass(e.target.value)}>
            <MenuItem value={1}>A</MenuItem>
            <MenuItem value={2}>B</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
          <Button primary onClick={() => setActive("View")} size="small">
            Submit
          </Button>
        </FormControl>
      </div>
      {active === "View" && <Studentlist3 />}
      {active === "View" && <BrightTot2 />}
      {active === "View" && <WeakTot2 />}
    </div>
  );
}

export default Classlist2;