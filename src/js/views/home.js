import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="d-flex flex-row flex-nowrap" style={{ overflowX: "scroll" }}>
				{store.planets.map((item, index) => {
					return (
						<div className="col-1 mx-1 px-1">
							<div class="card w-75">
								<div class="card-body">
									<h5 class="card-title">${item.name}</h5>
									<p class="card-text">descripcion</p>
									<Link to={`/details/${item.uid}`} class="btn btn-primary"> Ver planeta</Link>
								</div>
							</div>
						</div>
					)
				})}		
			</div>
		</div >
	)
};
