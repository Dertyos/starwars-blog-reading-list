export const planetStore = {
    planets: [],
    planet: {}
}

export function planetActions(getStore, getActions, setStore) {
    const BASE_URL = process.env.BASE_URL
    return {
        getPlanets: async () => {
            let respuesta = await fetch(`${BASE_URL}planets`)
            if (respuesta.ok) {
                let respuestaJSON = await respuesta.json()
                let store = getStore()
                setStore({ ...store, planets: respuestaJSON.results })
                return respuestaJSON
            } else {
                console.log("Hubo un error en la peticion de planetas")
                return false
            }
        },
        getPlanetDetails: async (numero) => {
            let respuesta = await fetch(`${BASE_URL}planets/${numero}`)
            if (respuesta.ok) {
                let respuestaJSON = await respuesta.json()
                let store = getStore()
                setStore({ ...store, planet: respuestaJSON.result })
                return respuestaJSON
            } else {
                console.log("Hubo un error en la peticion de planeta")
                return false
            }
        }
    }
}