import { Col } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

function Map() {
    const markers = [
        {
            geocode: [50.2283411, 19.1707201],
            popUp: "Tutaj mam gabinet",
            link: "https://www.google.pl/maps/place/Desigual+Sosnowiec/@50.2285912,19.1693616,17z/data=!3m1!4b1!4m6!3m5!1s0x4716c5d9ac18c5e3:0xa594842a06213930!8m2!3d50.2285878!4d19.1719365!16s%2Fg%2F11t5b22pp6?entry=ttu"
        }
    ];

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149059.png",
        iconSize: [36, 36]
    });

    return (
        <Col xs={12} md={7} className={'position-relative order-0 order-md-1'}>
            <h2>Jak dojechać ?</h2>
            <div id='map'>
                <MapContainer center={[50.2283411, 19.1707201]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markers.map((marker, index) => (
                        <Marker key={index} position={marker.geocode} icon={customIcon}>
                            <Popup>
                                <a href={marker.link} target="_blank" rel="noopener noreferrer">{marker.popUp}</a>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </Col>
    );
}

export default Map;
