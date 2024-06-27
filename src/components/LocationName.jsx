import { Col } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";
import { WeatherContext } from "../contexts/WeatherContext";
import { useContext } from "react";

export function LocationName({ col = 2 }) {
  const {weather} = useContext(WeatherContext);
  return (
    <Col
      xs={col}
      className="location-name d-flex flex-row gap-1 align-items-center"
    >
      <IoLocationSharp size={20} />
      <p>{weather.location.name}</p>
    </Col>
  );
}
