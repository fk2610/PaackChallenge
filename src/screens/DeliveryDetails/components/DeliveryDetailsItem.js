import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getActiveDelivery } from '../../../store/deliveries/selectors';
import DeliveryItem from '../../Deliveries/components/DeliveryItem';
import Button from '../../../components/Button';
import {
  DELIVERY_STATUS_ENUM,
  ACTIVE_DELIVERIES,
} from '../../../utils/deliveryStatusEnum';
import { styles } from './styles';

const DeliveryDetailsItem = ({ item, onActivePress, updateDelivery }) => {
  const activeDelivery = useSelector(getActiveDelivery);
  const isActive = item?.id === activeDelivery?.id;
  const isAvailable = !ACTIVE_DELIVERIES.includes(item?.delivery?.status);
  const showActiveButton = !activeDelivery && !isActive && isAvailable;
  const showUpdateDelivery = isActive && isAvailable;

  const handleActivePress = () => onActivePress(item);

  const onDeliveredPress = () =>
    updateDelivery(item.id, DELIVERY_STATUS_ENUM.DELIVERED);

  const onUndeliveredPress = () =>
    updateDelivery(item.id, DELIVERY_STATUS_ENUM.UNDELIVERED);

  return (
    <View>
      {item?.id && <DeliveryItem item={item} disabled />}
      {showActiveButton && (
        <Button title="Mark as Active" onPress={handleActivePress} />
      )}
      {showUpdateDelivery && (
        <View>
          <Button
            title={`Mark as ${DELIVERY_STATUS_ENUM.DELIVERED}`}
            onPress={onDeliveredPress}
            style={styles.updateButtonStyle}
          />
          <Button
            title={`Mark as ${DELIVERY_STATUS_ENUM.UNDELIVERED}`}
            onPress={onUndeliveredPress}
          />
        </View>
      )}
    </View>
  );
};

DeliveryDetailsItem.propTypes = {
  onActivePress: PropTypes.func,
  updateDelivery: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.string,
    delivery: PropTypes.shape({ status: PropTypes.string }),
  }),
};

export default DeliveryDetailsItem;
