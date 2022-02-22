import React, { useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { useUserGeoLocation } from '../../hooks/useGeolocation';
import {
  DELIVERY_DETAILS_REQUEST,
  DELIVERY_UPDATE_REQUEST,
  loadDeliveryDetailsRequest,
  setActiveDelivery,
  updateDeliveryRequest,
} from '../../store/deliveries/actions';
import { setUserCoordinates } from '../../store/user/actions';
import { getDeliveryDetails } from '../../store/deliveries/selectors';
import {
  getRequestError,
  isRequestRunning,
} from '../../store/requests/selectors';
import Container from '../../components/Container';
import DeliveryDetailsItem from './components/DeliveryDetailsItem';
import Spinner from '../../components/Spinner';
import { styles } from './styles';

export const DeliveryDetailsContainer = () => {
  const { data, loading, errors } = useSelector(state => ({
    data: getDeliveryDetails(state),
    loading:
      isRequestRunning(state, DELIVERY_DETAILS_REQUEST) ||
      isRequestRunning(state, DELIVERY_UPDATE_REQUEST),
    errors: getRequestError(state, DELIVERY_DETAILS_REQUEST),
  }));
  const {
    coordinates,
    permissionStatus,
    errorMessage,
    getUserCurrentPosition,
  } = useUserGeoLocation();
  const { params } = useRoute();

  const dispatch = useDispatch();

  useEffect(() => {
    loadDeliveryDetails();
    getUserCurrentPosition();
  }, [loadDeliveryDetails, getUserCurrentPosition]);

  useEffect(() => {
    dispatch(setUserCoordinates(coordinates));
  }, [dispatch, coordinates]);

  const onActivePress = delivery => {
    if (permissionStatus === 'granted') {
      dispatch(setActiveDelivery(delivery));
    } else if (permissionStatus && errorMessage) {
      Alert.alert(
        errorMessage,
        'In order to take a delivery, grant location permissions',
      );
    }
  };

  const updateDelivery = (id, status) =>
    dispatch(updateDeliveryRequest({ id, status }));

  const loadDeliveryDetails = useCallback(() => {
    dispatch(loadDeliveryDetailsRequest(params));
  }, [dispatch, params]);

  return (
    <Container>
      {loading || !data?.id ? (
        <Spinner style={styles.spinnerStyle} />
      ) : (
        <DeliveryDetailsItem
          item={data}
          onActivePress={onActivePress}
          updateDelivery={updateDelivery}
        />
      )}
    </Container>
  );
};

export default DeliveryDetailsContainer;
