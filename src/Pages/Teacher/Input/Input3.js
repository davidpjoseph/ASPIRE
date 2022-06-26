import React from 'react';
import {getDatabase,ref,onValue,startAt,orderByChild,query} from 'firebase/database';
import {Table} from 'react-bootstrap'
const db=getDatabase();
const db2=getDatabase();
const db3=getDatabase();
export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state={
            tableData:[],
            tableData2:[],
            tableData3:[]
        }
    }
    componentDidMount(){
        const dbRef=ref(db,'Mark1/');
        onValue(dbRef,(snapshot)=>{
            let records=[];
            snapshot.forEach(childSnapshot=>{
                let keyName=childSnapshot.key;
                let data=childSnapshot.val();
                records.push({"key":keyName,"data":data});
            });
            this.setState({tableData:records});
        });
        const dbRef2=ref(db2,'Mark2/');
        onValue(dbRef2,(snapshot)=>{
            let records2=[];
            snapshot.forEach(childSnapshot=>{
                let keyName2=childSnapshot.key;
                let data2=childSnapshot.val();
                records2.push({"key":keyName2,"data":data2});
            });
            this.setState({tableData2:records2});
        });
        const dbRef3=ref(db3,'Attendance/');
        onValue(dbRef3,(snapshot)=>{
            let records3=[];
            snapshot.forEach(childSnapshot=>{
                let keyName3=childSnapshot.key;
                let data3=childSnapshot.val();
                records3.push({"key":keyName3,"data":data3});
            });
            this.setState({tableData3:records3});
        });
    }
    render(){
        return(
            <Table>
            <thead>
                <tr>
                    {/* <th>#</th> */}
                    <th>Name</th>
                    <th>cs201</th>
                    <th>cs203</th>
                    <th>cs205</th>
                    <th>cs207</th>
                    <th>cs209</th>
                    <th>cs265</th>
                </tr>
            </thead>
            <tbody>
                {this.state.tableData.map((row,index)=>{
                    return(
                        <tr>
                            {/*<td>{index}</td>*/}
                            <td>{row.key}</td>
                           {/* <td>{row.data.Name}</td> */}
                            <td>{row.data.cs201}</td>
                            <td>{row.data.cs203}</td>
                            <td>{row.data.cs205}</td>
                            <td>{row.data.cs207}</td>
                            <td>{row.data.cs209}</td>
                            <td>{row.data.cs265}</td>
                        </tr>
                    )
                })}
            </tbody>


            <thead>
                <tr>
                    {/* <th>#</th> */}
                    <th>Name</th>
                    <th>cs201</th>
                    <th>cs203</th>
                    <th>cs205</th>
                    <th>cs207</th>
                    <th>cs209</th>
                    <th>cs265</th>
                </tr>
            </thead>
            <tbody>
                {this.state.tableData2.map((row,index)=>{
                    return(
                        <tr>
                            {/*<td>{index}</td>*/}
                            <td>{row.key}</td>
                           {/* <td>{row.data.Name}</td> */}
                            <td>{row.data.cs201}</td>
                            <td>{row.data.cs203}</td>
                            <td>{row.data.cs205}</td>
                            <td>{row.data.cs207}</td>
                            <td>{row.data.cs209}</td>
                            <td>{row.data.cs265}</td>
                        </tr>
                    )
                })}
            </tbody>


            <thead>
                <tr>
                    {/* <th>#</th> */}
                    <th>Name</th>
                    <th>cs201</th>
                    <th>cs203</th>
                    <th>cs205</th>
                    <th>cs207</th>
                    <th>cs209</th>
                    <th>cs265</th>
                </tr>
            </thead>
            <tbody>
                {this.state.tableData3.map((row,index)=>{
                    return(
                        <tr>
                            {/*<td>{index}</td>*/}
                            <td>{row.key}</td>
                           {/* <td>{row.data.Name}</td> */}
                            <td>{row.data.cs201}</td>
                            <td>{row.data.cs203}</td>
                            <td>{row.data.cs205}</td>
                            <td>{row.data.cs207}</td>
                            <td>{row.data.cs209}</td>
                            <td>{row.data.cs265}</td>
                        </tr>
                    )
                })}
            </tbody>
            </Table>
        )
    }
}