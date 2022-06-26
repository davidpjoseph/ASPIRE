import { storage } from "../../../Firebase/Config";
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { toast, ToastContainer } from "react-toastify";
import "./Input.css";
import { getDatabase, ref, set,onValue } from "firebase/database";
import "react-toastify/dist/ReactToastify.css";
import { saveAs } from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
const saveFile5 = () => {
  saveAs(
    "https://docs.google.com/spreadsheets/d/1zhg6kLKMM5mELt58zzbIDn3afXBBzdmU/edit?usp=sharing&ouid=110742977992300416983&rtpof=true&sd=true",
    "Subject1.xlsx"
  );};
function Input1() {
    const [data, setData] = useState({});
    useEffect(() => {
      const dbRef = ref(db, "Course/");
      onValue(dbRef, (snapshot) => {
        if (snapshot.val() != null) {
          setData({ ...snapshot.val() });
        } else {
          setData({});
        }
      });
      return () => {
        setData({});
      };
    }, []);
    

  const notify = () =>
    toast.success("File Uploaded Successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
  const db = getDatabase();
  const [items, setItems] = useState([]);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setItems(d);
    });
  };
  function writeToDatabase5(code) {
    items.map((d) =>
      set(ref(db, "Subject1/"+ code+"/"+d.RollNo), {
        RollNo: d.RollNo,
        Name: d.Name,
        internal1: d.Internal1,
        internal2: d.Internal2,
        attendance: d.Attendance,
      })
    );
  }
  
  
   return (
     <div>
       <ToastContainer />
       {Object.keys(data).map((row, index) => {
        const code = data[row].ccode;
         return (
           <div className="cardcourse card-1">
             <h2 className="card__title">{code}</h2>
             <p className="download5" onClick={saveFile5}>
               <FileDownloadIcon />
             </p>
             <p className="card__apply">
               <br></br>
               <input
                 type="file"
                 onChange={(e) => {
                   const file = e.target.files[0];
                   readExcel(file);
                 }}
               />
               <button
                 onClick={() => {
                   writeToDatabase5(code);
                   notify();
                 }}
               >
                 Submit
               </button>
             </p>
           </div>
         );
       })}
     </div>
   );
}

export default Input1;