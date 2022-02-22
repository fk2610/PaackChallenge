import { Platform } from 'react-native';
import { check, request, PERMISSIONS } from 'react-native-permissions';

export const requestLocationPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      return await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      const fineLocationStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      if (fineLocationStatus === 'granted') {
        return fineLocationStatus;
      }

      return await check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};
