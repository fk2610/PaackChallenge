import { useCallback, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

import { requestLocationPermission } from '../utils/permissions.js';

const InitialCoordinates = {
  latitude: null,
  longitude: null,
};

export const useUserGeoLocation = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [permissionStatus, setPermissionStatus] = useState();
  const [coordinates, setCoordinates] = useState(InitialCoordinates);

  const getUserCurrentPosition = useCallback(async () => {
    try {
      const status = await requestLocationPermission();
      setPermissionStatus(status);
      const hasLocationPermission = status === 'granted';
      if (hasLocationPermission) {
        /**
         * TODO: For when this feature is implemented:
         * `GeoLocation.getCurrentPosition` below can return some cached values on Android instead of the
         * most recent user position, so try using `GeoLocation.watchPosition` and clear the callback after getting
         * some values, if the latest user position is a requirement.
         *
         * Issue related to `getCurrentPosition`: https://github.com/Agontuk/react-native-geolocation-service/issues/205
         */
        Geolocation.getCurrentPosition(
          position => {
            setCoordinates({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          error => {
            setErrorMessage(error.message);
          },
          {
            enableHighAccuracy: true,
            timeout: 30 * 1000,
            maximumAge: 10 * 1000,
          },
        );
      } else {
        setErrorMessage("Permission isn't granted");
      }
    } catch (e) {
      setErrorMessage('Error getting the coordinates');
    }
  }, []);

  return {
    coordinates,
    permissionStatus,
    errorMessage,
    getUserCurrentPosition,
  };
};
