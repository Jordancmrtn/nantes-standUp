import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Toggle from "../Toggle";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import * as L from "leaflet";

import style from "./style.module.css";

const Map = ({ comedyClubToDisplay, checked, setChecked }) => {
  const ref = useRef();
  const firstUpdate = useRef(true);
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const customIcon = new LeafIcon({
    iconUrl: require("../../Static/icons/pin.png"),
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
    shadowUrl: require("../../Static/icons/pinShadow.png"),
    shadowSize: [34.85, 23.61],
    shadowAnchor: [0, 23],
  });

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }, 10);
  }, [checked]);

  return (
    <div className={style.mapContainer} ref={ref}>
      <div className={style.toggleContainer}>
        <p>Afficher tout les comedy clubs</p>
        <Toggle
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
      </div>
      <MapContainer
        center={[47.191, -1.55]}
        minZoom={14}
        maxZoom={18}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {comedyClubToDisplay.map((comedyClub, id) => (
          <Marker
            position={comedyClub.position}
            key={id}
            icon={customIcon}
            className={style.marker}
          >
            <Popup>
              <b>{comedyClub.name}</b>
              <br />
              <i>{comedyClub.place}</i>
              <br />
              {comedyClub.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

Map.propTypes = {
  comedyClubToDisplay: PropTypes.array,
};

export default Map;
