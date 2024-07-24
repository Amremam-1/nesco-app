import React, { useEffect } from 'react';
import styles from "./styles.module.scss";
import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { FaLocationDot } from "react-icons/fa6";
import locationIcon from "../../../../assets/location-icon.png"
import { ImLocation } from "react-icons/im";
const containerStyle = {
  minWidth: '300px',
  minHeight: '450px'
};

const locationDotStyles = {
  color: "#7FC5D6",
  fill: "#FFFFFF",
  fontSize: "22px"
}




// 24.702127432059754, 46.66788707838042

function MapComponent({ lat, lng, cityBranches, mapZoom, cityCenter }) {
  useEffect(() => {

  }, [mapZoom, cityBranches, cityCenter]);

  const markers = [
    {
      name: "brach-1",
      location : {
        lat: lat,
        lng: lng
      },
    },
    // {
    //   name: "brach-2",
    //   location : {
    //     lat: 24.702768894590413, 
    //     lng: 46.668764815814136
    //   },
    // },
    // {
    //   name: "brach-3",
    //   location : {
    //     lat: 16.90621525268414, 
    //     lng: 42.54756707605372
    //   },
    // },
  ]

  const customMarker = <FaLocationDot className={locationDotStyles} />;
  
  const center = {
    lat: lat,
    lng: lng
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCQ6WTeNr9eUcfeURSqUybj6qjOG9cUmYA"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={
        {
          lat: cityCenter[0],
          lng: cityCenter[1]
        }
      }
      // defaultCenter={center}
      zoom={mapZoom}
      // minZoom={5}
      // maxZoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      {
        cityBranches?.map((item, index) => (
          <div key={item.id}>
            <MarkerF
              icon={locationIcon}
              // icon={"https://maps.gstatic.com/mapfiles/ms2/micons/ylw-pushpin.png"}
              // icon={<ImLocation size={24} color='#1F4758' />}
              position={
                {
                  lat:item.latLang[0],
                  lng: item.latLang[1]
                }
              }
              // options={{icon: locationIcon}} 
            />
          </div>
        ))
      }
    </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)


// {
//   cityBranches?.map((item, index) => (
//     <div key={item.name}>
//       <Marker
//         position={item.location}
//         options={{icon: locationIcon}} 
//       />
//     </div>
//   ))
// }