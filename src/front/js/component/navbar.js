import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'
import { Favoritos } from "./favoritos";


export const Navbar = () => {
	return (
		<nav className="navbar  navbar-light bg-dark bg-opacity-75 ">
			<div className="container-fluid">
				<Link to="/" className=" ps-4 ms-4">					
				<FontAwesomeIcon icon={faJedi} className="fa-2xl"/>
				</Link>
				<Favoritos className="pe-5 me-5"/>
			</div>
		</nav>
	);
};
