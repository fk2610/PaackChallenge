import React, { useCallback, useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import {
  loadDeliveriesRequest,
  DELIVERIES_REQUEST,
  setDeliveryDetails,
} from '../../store/deliveries/actions';
import {
  getDeliveriesData,
  getIsDeliveriesDataDirty,
} from '../../store/deliveries/selectors';
import {
  getRequestError,
  isRequestRunning,
} from '../../store/requests/selectors';
import DeliveriesList from './components/DeliveriesList';
import Container from '../../components/Container';
import Spinner from '../../components/Spinner';
import { styles } from './styles';

export const DeliveriesContainer = () => {
  const { data, isDirty, loading, errors } = useSelector(state => ({
    data: getDeliveriesData(state),
    isDirty: getIsDeliveriesDataDirty(state),
    loading: isRequestRunning(state, DELIVERIES_REQUEST),
    errors: getRequestError(state, DELIVERIES_REQUEST),
  }));
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    loadDeliveriesData();
  }, [loadDeliveriesData]);

  useEffect(() => {
    if (isFocused) {
      resetDeliveryDetails();
      if (isDirty) {
        loadDeliveriesData();
      }
    }
  }, [isFocused, isDirty, loadDeliveriesData, resetDeliveryDetails]);

  const loadDeliveriesData = useCallback(() => {
    dispatch(loadDeliveriesRequest());
  }, [dispatch]);

  const resetDeliveryDetails = useCallback(() => {
    dispatch(setDeliveryDetails({}));
  }, [dispatch]);

  const onDeliveryPress = item => navigate('delivery.details', item);

  return (
    <Container>
      {loading ? (
        <Spinner style={styles.spinnerStyle} />
      ) : (
        <DeliveriesList data={data} onItemPress={onDeliveryPress} />
      )}
    </Container>
  );
};

export default DeliveriesContainer;
