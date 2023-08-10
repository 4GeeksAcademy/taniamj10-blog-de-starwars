import { ids } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
				personaje:[],
			detallepersonajes: {},
		},
		actions: {
			obtenerPersonaje: () => {
				fetch("https://www.swapi.tech/api/people/")

				.then(res => res.json())
				.then(data => setStore({personaje: data.results}))
				.catch(err => console.error(err))
			},

			obtenerdetallepersonajes: (id) => {
				fetch("https://www.swapi.tech/api/people/"+ id)

				.then(res => res.json())
				.then(data => setStore({detallepersonajes: data.results}))
				.catch(err => console.error(err))
			},

























			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
