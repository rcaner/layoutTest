import React from "react";
import { FaBars } from "react-icons/fa";
import { MapContainer, LayersControl, TileLayer } from "react-leaflet";
import * as L from "leaflet";
const Main = () => {
  return (
    <main>
      <div className="mapContainer">
        <MapContainer
          id="map"
          maxZoom={25}
          minZoom={1}
          zoomControl={false}
          bounds={L.latLngBounds([
            [90, 180],
            [-90, -180]
          ])}
          zoom={2}
          zoomDelta={1}
          zoomSnap={0.25}
          crs={L.CRS.EPSG3857}
          wheelPxPerZoomLevel={300}
          wheelDebounceTime={100}
          fadeAnimation={false}
          whenCreated={(mapInstance) => {
            // mapInstance.fitWorld();
            const bounds = L.latLngBounds([
              [90, 180],
              [-90, -180]
            ]);
            const wantedZoom = mapInstance.getBoundsZoom(bounds, true);
            const center = bounds.getCenter();
            mapInstance.setView(center, wantedZoom);
          }}
        >
          <LayersControl>
            <LayersControl.BaseLayer checked name="Google">
              <TileLayer
                url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
                maxZoom={25}
                minZoom={1}
                opacity={1}
                noWrap={true}
              />
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainer>
      </div>
    </main>
  );
};

export default Main;
