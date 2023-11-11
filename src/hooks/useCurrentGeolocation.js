import {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';

const useCurrentGeolocation = () => {
  const [location, setLocation] = useState({
    region: {
      latitude: 14.0999996,
      longitude: -87.2166658,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    },
    marker: null,
    isLoading: true,
    hasError: null,
  });

  const getCurrentLocation = () => {
    setLocation({...location, isLoading: true});

    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;

        setLocation({
          ...location,
          marker: {latitude, longitude},
          isLoading: false,
          hasError: null,
        });
      },
      error => {
        setLocation({
          ...location,
          isLoading: false,
          hasError: true,
        });
        //console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return {
    region: location.region,
    marker: location.marker,
    isLoading: location.isLoading,
    hasError: location.hasError,
    setLocation: setLocation,
  };
};

export default useCurrentGeolocation;
