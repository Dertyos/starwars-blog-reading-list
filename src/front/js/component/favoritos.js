import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Favoritos = () => {

    const { store, actions } = useContext(Context);

    return (

        <>
            <div className="dropdown" >
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Favoritos
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                    {store.favoritos.map((item, index) => {
                        return (
                            <li >
                                <Link className="dropdown-item" key={index} to={ item.link }
                                >{item.name}</Link> 
                            </li>)
                    })}
                </ul>
            </div>




        </>

    )

}




