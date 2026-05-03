'use client'

import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { type Marker as LeafletMarker } from 'leaflet'

const LAT = 41.0872
const LNG = 16.7919

const MAPS_URL = 'https://maps.app.goo.gl/FrVxpqYBjTkkHPYz8'

const pinIcon = L.divIcon({
  className: '',
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="40">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24S24 21 24 12C24 5.373 18.627 0 12 0z" fill="#E53E3E"/>
    <circle cx="12" cy="12" r="4" fill="white"/>
  </svg>`,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  popupAnchor: [0, -44],
})

function AutoOpenMarker() {
  const markerRef = useRef<LeafletMarker>(null)

  useEffect(() => {
    markerRef.current?.openPopup()
  }, [])

  return (
    <Marker ref={markerRef} position={[LAT, LNG]} icon={pinIcon}>
      <Popup closeButton={false} className="map-popup">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'inherit',
            padding: '2px 0',
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#15203D', marginBottom: '2px' }}>
              Via Cesare Battisti, 91
            </div>
            <div style={{ fontSize: '0.78rem', color: '#7a8196' }}>
              70026 Modugno (BA)
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B9E82"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </Popup>
    </Marker>
  )
}

export default function ContactMap() {
  return (
    <MapContainer
      center={[LAT, LNG]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AutoOpenMarker />
    </MapContainer>
  )
}
