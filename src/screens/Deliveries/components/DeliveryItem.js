import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import DetailItem from '../../../components/DetailItem';
import { getActiveDelivery } from '../../../store/deliveries/selectors';
import { styles } from './styles';

const DeliveryItem = memo(
  ({ item: { id, client, customer, delivery }, onPress, disabled }) => {
    const activeDelivery = useSelector(getActiveDelivery);
    const isActive = id === activeDelivery?.id;
    const { name: customerName, address, city, zipCode } = customer;
    const { status } = delivery;
    const fullCustomerAddress = `${address}, ${city}, ${zipCode}.`;

    const onItemPress = () => onPress(id);

    return (
      <TouchableOpacity
        onPress={onItemPress}
        disabled={disabled}
        style={styles.buttonStyle}>
        {isActive && (
          <DetailItem
            title="CURRENT ACTIVE DELIVERY"
            subStyle={styles.activeTextStyle}
          />
        )}
        <DetailItem title="Client: " subtitle={client} />
        <DetailItem title="Customer name: " subtitle={customerName} />
        <DetailItem
          title="Customer address: "
          subtitle={fullCustomerAddress}
          lines={2}
        />
        <DetailItem title="Status: " subtitle={status} />
      </TouchableOpacity>
    );
  },
);

DeliveryItem.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  item: PropTypes.shape({
    id: PropTypes.string,
    client: PropTypes.string,
    customer: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      zipCode: PropTypes.string,
    }),
    delivery: PropTypes.shape({
      status: PropTypes.string,
    }),
  }),
};

DeliveryItem.defaultProps = {
  disabled: false,
  onItemPress: () => null,
};

export default DeliveryItem;
