import { useEffect } from 'react';
import * as Location from 'expo-location';
import { useApi } from './useApi';

interface ICoordinates {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const { put } = useApi();

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;

    const location = await Location.getCurrentPositionAsync({});
    const locationCoordinates = {
      latitude: location?.coords?.latitude,
      longitude: location?.coords?.longitude,
    };
    updateLocation(locationCoordinates);
  };

  const updateLocation = (coordinates: ICoordinates) =>
    put({ url: 'settings', body: { location: coordinates } });

  useEffect(() => {
    getLocation();
  }, []);
};
