import { storage} from "../../../Firebase/Config";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { toast, ToastContainer } from "react-toastify";
import "./Input.css";
import { getDatabase, ref, set } from "firebase/database";
import "react-toastify/dist/ReactToastify.css";
import { saveAs } from "file-saver";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const saveFile1 = () => {
  saveAs(
    "https://docs.google.com/spreadsheets/d/1JJKJEZAZYy87aE7TBysdY9wDzM4iWRiU/edit?usp=sharing&ouid=110742977992300416983&rtpof=true&sd=true",
    "Internal1.xlsx"
  );
};const saveFile2 = () => {
  saveAs(
    "https://docs.google.com/spreadsheets/d/1YsijAmwKoh8h_QlWOSqd-JDDBVmNiB-P/edit?usp=sharing&ouid=110742977992300416983&rtpof=true&sd=true",
    "Internal2.xlsx"
  );
};const saveFile3 = () => {
  saveAs(
    "https://docs.google.com/spreadsheets/d/1rVcC1S2ecr0oQni_xrhEVHtbeOmClFZW/edit?usp=sharing&ouid=110742977992300416983&rtpof=true&sd=true",
    "Grade.xlsx"
  );
};const saveFile4 = () => {
  saveAs(
    "https://docs.google.com/spreadsheets/d/1w7MHjPFYt1s15bPTQbTtww7r65wtsRC5/edit?usp=sharing&ouid=110742977992300416983&rtpof=true&sd=true",
    "Attendance.xlsx"
  );
};const saveFile5 = () => {
  saveAs(
    "https://docs.google.com/spreadsheets/d/1zhg6kLKMM5mELt58zzbIDn3afXBBzdmU/edit?usp=sharing&ouid=110742977992300416983&rtpof=true&sd=true",
    "Subject1.xlsx"
  );
};
const saveFile6 = () => {
  saveAs(
    "https://docs.google.com/spreadsheets/d/1PH6faZozAaxxA1ARQyD-ZsYA0vryzzsn/edit?usp=sharing&ouid=110742977992300416983&rtpof=true&sd=true",
    "Subject2.xlsx"
  );
};

function Input() {
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
  function writeToDatabase1() {
    items.map((d) =>
      set(ref(db, "Mark1/" + d.RollNo), {
        RollNo: d.RollNo,
        Name: d.Name,
        cs201: d.CS201,
        cs203: d.CS203,
        cs205: d.CS205,
        cs207: d.CS207,
        cs209: d.CS209,
        cs265: d.CS265,
      })
    );
  }
  function writeToDatabase2() {
    items.map((d) =>
      set(ref(db, "Mark2/" + d.RollNo), {
        RollNo: d.RollNo,
        Name: d.Name,
        cs201: d.CS201,
        cs203: d.CS203,
        cs205: d.CS205,
        cs207: d.CS207,
        cs209: d.CS209,
        cs265: d.CS265,
      })
    );
  }
  function writeToDatabase3() {
    items.map((d) =>
      set(ref(db, "Grade/" + d.RollNo), {
        RollNo: d.RollNo,
        Name: d.Name,
        S1: d.S1,
        S2: d.S2,
        S3: d.S3,
        S4: d.S4,
        S5: d.S5,
        CGPA:d.CGPA,
        RS: d.RS,
      })
    );
  }
  function writeToDatabase4() {
    items.map((d) =>
      set(ref(db, "Attendance/" + d.RollNo), {
        RollNo: d.RollNo,
        Name: d.Name,
        cs201: d.CS201,
        cs203: d.CS203,
        cs205: d.CS205,
        cs207: d.CS207,
        cs209: d.CS209,
        cs265: d.CS265,
      })
    ); 
  }
  function writeToDatabase5() {
    items.map((d) =>
      set(ref(db, "Subject1/" + d.RollNo), {
        RollNo: d.RollNo,
        Name: d.Name,
        internal1: d.Internal1,
        internal2: d.Internal2,
        attendance: d.Attendance,
      })
    );
  }
  function writeToDatabase6() {
    items.map((d) =>
      set(ref(db, "Subject2/" + d.RollNo), {
        RollNo: d.RollNo,
        Name: d.Name,
        internal1: d.Internal1,
        internal2: d.Internal2,
        attendance: d.Attendance,
      })
    );

  }
  function writeToDatabase7() {
    items.map((d) =>
      set(ref(db, "Weak/" + d.RollNo), {
        RollNo:d.RollNo,
        Name:d.Name,
        S1: d.S1,
        S2: d.S2,
        S3: d.S3,
        S4: d.S4,
        S5: d.S5,
        RS: d.RS,
      })
    );}
  return (
    <div>
      <ToastContainer />
      <div className="cards wrapper">
        <div className="card card-1">
          <h2 className="card__title">Internal Marks 1</h2>
          <p className="download1" onClick={saveFile1}>
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
                writeToDatabase1();
                notify();
              }}
            >
              Submit
            </button>
          </p>
        </div>
        <div className="card card-1">
          <h2 className="card__title">Internal Marks 2</h2>
          <p className="download2" onClick={saveFile2}>
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
                writeToDatabase2();
                notify();
              }}
            >
              Submit
            </button>
          </p>
        </div>
        <div className="card card-1">
          <h2 className="card__title">Grade</h2>
          <p className="download3" onClick={saveFile3}>
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
                writeToDatabase3();
                writeToDatabase7();
                notify();
              }}
            >
              Submit
            </button>
          </p>
        </div>
        <div className="card card-1">
          <h2 className="card__title">Attendance</h2>
          <p className="download4" onClick={saveFile4}>
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
                writeToDatabase4();
                notify();
              }}
            >
              Submit
            </button>
          </p>
        </div>
        <div className="card card-1">
          <h2 className="card__title">CS302</h2>
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
                writeToDatabase5();
                notify();
              }}
            >
              Submit
            </button>
          </p>
        </div>
        <div className="card card-1">
          <h2 className="card__title">CS306</h2>
          <p className="download6" onClick={saveFile6}>
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
                writeToDatabase6();
                notify();
              }}
            >
              Submit
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Input;
