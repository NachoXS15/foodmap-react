import React, {useEffect, useState} from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
  } from 'react-leaflet'
import { Map } from "leaflet";
import "../../App.css"
import api from "../../services/api";
import { IconLocation } from "../../components/iconLocation";

const Dashboard = () => {
	const [places, setPlaces] = useState(null)
	useEffect(()=>{
		getPlaces();
	}, [])
	

	const getPlaces = async (url) => {
		try {
			const result = await api.GET(api.places)
			if (result) {
				console.log(result)
				setPlaces(result.results)
			}
		} catch (error) {
			console.log(error)
		}
		// const data = await fetch(`${BASE_URL}${QUERY}`, requestOptions)
		// .then((response) => response.text())
		// .then((result) => {
		// 	console.log(JSON.parse(result));
		// })
		// .catch((err) => console.log("err: ", err));
		
	}
 
	return (
		<>
	  <MapContainer center={[-29.412961805791436, -66.85614186519194]} zoom={13}>
	    <TileLayer
	      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	    />
		<Marker position={{lat:'-29.412961805791436', lng:'-66.85614186519194'}}/>
	  </MapContainer>

	  {/* {places.map(place => {
		<Marker
		key={place.id}
		position={[place.coordinates.latitude, place.coordinates.longitude]}
		/>
	  })} */}
	  </>
	);
};

export default Dashboard;