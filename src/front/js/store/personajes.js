export const personajeStore = {
    personajes: [],
    personaje: {}
}

export function personajeActions(getStore, getActions, setStore) {
    const BASE_URL = process.env.BASE_URL
    return {
        getpersonajes: async () => {
            let respuesta = await fetch(`${BASE_URL}people`)
            if (respuesta.ok) {
                let respuestaJSON = await respuesta.json()
                let store = getStore()
                setStore({ ...store, personajes: respuestaJSON.results })
                return respuestaJSON
            } else {
                console.log("Hubo un error en la peticion de personajes")
                return false
            }
        },
        getpersonajeDetails: async (numero) => {
            let respuesta = await fetch(`${BASE_URL}people/${numero}`)
            if (respuesta.ok) {
                let respuestaJSON = await respuesta.json()
                let store = getStore()
                setStore({ ...store, personaje: respuestaJSON.result })
                return respuestaJSON
            } else {
                console.log("Hubo un error en la peticion de personaje")
                return false
            }
        }
    }
}