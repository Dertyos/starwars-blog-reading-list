import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid clase bg-dark inline-block">
			<h1 className="justify-content-center">Personajes</h1>
			<div className="escroller d-flex bg-dark flex-row flex-nowrap  justify-content-center" style={{ overflowX: "scroll" }}>
				{store.personajes.map((item, index) => {
					return (
						<div className="col-2 mx-1 px-1 text-center">
							<div className="card" >
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">A person within the Star Wars universe</p>
									<div>
										<Link to={`/personaje/${item.uid}`} className="btn btn-primary"> Ver Personaje</Link>
										<FontAwesomeIcon icon={faHeart} className="btn btn-primary " onClick={(e) => { actions.agregarFavorito(item.name, `/personaje/${item.uid}`, "personaje") }} />
									</div>
									
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<h1 className="justify-content-center">Planetas</h1>
			<div className="d-flex bg-dark flex-row flex-nowrap m-2 p-2 justify-content-center" style={{ overflowX: "scroll" }}>
				<>{store.planets.map((item, index) => {
					return (
						<div className="col-2 mx-1 px-1 text-center">
							<div className="card ">
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">A planet.</p>
									<div class="d-flex justify-content-evenly align-items-center">
									<Link to={`/details/${item.uid}`} className="btn btn-primary"> Ver planeta</Link>
									<FontAwesomeIcon icon={faHeart} className="btn btn-primary " onClick={(e) => { actions.agregarFavorito(item.name, `/details/${item.uid}`, "planeta") }} />
									</div>
									
								</div>
							</div>
						</div>
					)
				})}
				</>
			</div>
			<h1 className="justify-content-center">Vehiculos</h1>
			<div className="d-flex bg-dark flex-row flex-nowrap m-2 p-2 justify-content-center" style={{ overflowX: "scroll" }}>
				<>{store.vehiculos.map((item, index) => {
					return (
						<div className="col-2 mx-1 px-1 text-center">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">A Starship</p>
									<div class="d-flex justify-content-evenly align-items-center">
										<Link to={`/vehiculo/${item.uid}`} className="btn btn-primary"> Ver vehiculo</Link>
										<FontAwesomeIcon icon={faHeart} className="btn btn-primary " onClick={(e) => { actions.agregarFavorito(item.name, `/vehiculo/${item.uid}`, "vehiculo") }} />
									</div>

								</div>
							</div>
						</div>
					)
				})}
				</>
			</div>
		</div >
	)
};
