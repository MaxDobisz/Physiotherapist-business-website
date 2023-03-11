import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';

const GMap = () => {
    const center = useMemo(() => ({ lat: 52.19271003595704, lng: 0.13992217528338208 }), [])

    return (
        <GoogleMap zoom={15} center={center} mapContainerClassName='map-container'>
            <MarkerF position={center} />
        </GoogleMap>
    );
}

export const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    if (!isLoaded) return <div style={{ color: 'black' }}>Loading...</div>
    return (
        <GMap />
    );
}
