import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import Axios from "axios";
let AddPg=()=>{
    const [pname,setpname]=useState("");
    const [paddress,setpaddress]=useState("");
    const [pfacilities,setpfacilities]=useState("");
    const [oname,setoname]=useState("");
    const [oemail,setoemail]=useState("");
    const [ocontact,setocontact]=useState("");

    const addToList=()=>{
        Axios.post("http://localhost:5000/insert",
        {
            pname: pname,
            paddress: paddress,
            pfacilities: pfacilities,
            oname: oname,
            oemail: oemail,
            ocontact: ocontact,
        });
        alert("Listed your PG successfully!!")
    };

    return(
    <>
    <section className="add-pg p-3">
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h4 text-dark">List PG</p>
                    <p className="fst-italic">Enter below the details of your property and take the first step towards showcasing to the world what great property you have in house for them!!</p>
                </div>
            </div>
            <div className="row">
                <div className="col md-4">
                    <form>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setpname(event.target.value);
                            }} className="form-control" placeholder="Property Name"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setpaddress(event.target.value);
                            }} className="form-control" placeholder="Property Address"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" 
                            onChange={(event)=>{
                                setpfacilities(event.target.value);
                            }} className="form-control" placeholder="Property Facilities"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" onChange={(event)=>{
                                setoname(event.target.value);
                            }} className="form-control" placeholder="Owner Name"/>
                        </div>
                        <div className="mb-2">
                            <input type="email" onChange={(event)=>{
                                setoemail(event.target.value);
                            }} className="form-control" placeholder="Owner Email"/>
                        </div>
                        <div className="mb-2">
                            <input type="number" onChange={(event)=>{
                                setocontact(event.target.value);
                            }} className="form-control" placeholder="Owner Contact Number"/>
                        </div>
                        <div className="mb-2">
                            <input type="submit" onClick={addToList} className="btn btn-primary" value="Create"/>
                            <Link to={"/pg/list"} className="btn btn-dark ms-2">Home</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
    )
};
export default AddPg;