import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardCharacters = () => {
	const {store, actions} = useContext (Context)
  console.log(store.personaje);
  console.log(store.personaje.url);
  return (
	<div className="d-flex flex-row overflow-scroll">
    {store.personaje.map((personaje,id)=> (
<div key= {id} className="card" style={{width: "18rem"}}>
<img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{personaje.name}</h5>
    <Link to="#" className="btn btn-dark">+ info</Link>
    <Link to="#" className="btn btn-dark mt-2"><i className="fa fa-heart" /></Link>
  </div>
</div>
) ) }
    </div>
    
	);
};
