import React from "react";
import { BrightTot } from "../../components/List/BrightTot";
import Studentlist3 from "../../components/List/Studentlist3";
import { WeakTot } from "../../components/List/WeakTot";

function Classlist2() {
  return (
    <div>
      <Studentlist3/>
      <BrightTot />
      <WeakTot />
    </div>
  );
}

export default Classlist2;