import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personaje =  props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect( ()=>{
		actions.getpersonajeDetails(params.uid)
	},[])

	return (
		<div className="jumbotron ps-4 ms-4">
			{console.log("todo bien")}
			<h1 className="display-4 ">El nombre del personaje es: {store.personaje.properties? store.personaje.properties.name : "no ha cargado"}</h1>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};


