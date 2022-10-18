export const vehiculoStore = {
    vehiculos: [],
    vehiculo: {}
}

export function vehiculoActions(getStore, getActions, setStore) {
    const BASE_URL = process.env.BASE_URL
    return {
        getvehiculos: async () => {
            let respuesta = await fetch(`${BASE_URL}starships`)
            if (respuesta.ok) {
                let respuestaJSON = await respuesta.json()
                let store = getStore()
                setStore({ ...store, vehiculos: respuestaJSON.results })
                return respuestaJSON
            } else {
                console.log("Hubo un error en la peticion de vehiculos")
                return false
            }
        },
        getvehiculoDetails: async (numero) => {
            let respuesta = await fetch(`${BASE_URL}starships/${numero}`)
            if (respuesta.ok) {
                let respuestaJSON = await respuesta.json()
                let store = getStore()
                setStore({ ...store, vehiculo: respuestaJSON.result })
                return respuestaJSON
            } else {
                console.log("Hubo un error en la peticion de vehiculo")
                return false
            }
        }
    }
}