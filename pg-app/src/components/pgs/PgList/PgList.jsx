import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";


let PgList=()=>{

    const [pglist,setpglist]=useState([]);
    const [searchterm,setSearchTerm]=useState("");
    useEffect(() => {
        const newpglist = pglist.filter(value => value.paddress.toLowerCase().includes(searchterm.toLowerCase()));
        setpglist(newpglist);
      }, [searchterm])

    useEffect(()=>{
        Axios.get("http://localhost:5000/read").then((response)=>{
            setpglist(response.data);
        });
    },[])
    return(
    <>
    <section className="pg-search p-3">
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="col">
                        <p className="h3">PG Buddy
                        <Link to={"/pg/add"} className="btn btn-outline-primary ms-3">
                            List PG
                            <i className="fa fa-plus-circle me-2"/>
                        </Link>
                        </p>
                        <p>The best platform out there to explore PGs and hostels around you. Simply search a PG by its name or its location, or if you are a PG owner just click on "List PG" to showcase your property to the world. Remember, your dream PG is just one search away!!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-1 mt-2">
                            <input type="text" className="form-control" placeholder="Seach PG here" onChange={(event)=>{setSearchTerm(event.target.value);}}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-1 mt-2">
                            <input type="submit" className="btn btn-primary" value="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="pg-list">
        <div className="container">
            <div className="row mb-5">
            {pglist.
            // filter((val)=>{
            //     if(searchterm="")
            //     return val;
            //     else if(val.paddress.toLowerCase().includes(searchterm.toLowerCase()))
            //     {
            //         return val;
            //     }
            // }).
            map((val,key)=>{
                // pglist.filter((val,key))=>{
                // if(key%9==0)
                // {
                return(
                // <div className="row-4 mt-5 mb-5">
                    <div key={key} className="col-4 md-4 mt-3">
                            <div className="card" style={{ width: '21rem' ,height:"25rem"}}>
                                <img variant="top" style={{ width: '21rem',height:"15rem" }} src={"/pg"+key%9+".jpg"}/>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>{val.pname}</h4>
                                    </div>
                                    <div className="card-text mb-3">
                                        {val.paddress}
                                    </div>
                                    {/* <input type="submit" className="btn btn-outline-primary"/> */}
                                    <Link to={"/pg/view/"+key} className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                        </div> 
                // </div>
                );
            })};
            </div>
        </div>
    </section>
    </>
    )
};
export default PgList;