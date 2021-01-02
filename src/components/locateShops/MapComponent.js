import React, { useEffect, useState } from 'react';
import { geolocated } from 'react-geolocated';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { compose, withProps } from "recompose";

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyArD6H27Uc5CnZnmHD-fENYkv-VN2Qw1Pg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    const [myMarker, setMarker] = useState(undefined);

    const addMarker = (position) => {
        const lat = position.latLng.lat();
        const lng = position.latLng.lng();

        props.setShopPosition({
            lat,
            lng
        })
    }

    useEffect(() => {
        if (props.coords) {
            setMarker({
                lat: props.coords.latitude,
                lng: props.coords.longitude
            });
        }
    }, [props.coords]);

    const myPositionIcon = {
        url: "/user-location.svg",
        scaledSize: new window.google.maps.Size(35, 35)
    }

    console.log(props.shopPosition);

    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={myMarker ? myMarker : {lat: 54, lng: 19}}
            onClick={addMarker}
        >
            {myMarker && <Marker position={myMarker} icon={myPositionIcon} />}
            {props.shopPosition && <Marker position={props.shopPosition} />}
        </GoogleMap>
    )
})

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 2000,
})(MapComponent);