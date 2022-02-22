export const getDeliveriesData = ({ deliveries: { deliveriesData } }) =>
  deliveriesData;

export const getDeliveryDetails = ({ deliveries: { deliveryDetails } }) =>
  deliveryDetails;

export const getActiveDelivery = ({ deliveries: { activeDelivery } }) =>
  activeDelivery;

export const getIsDeliveriesDataDirty = ({
  deliveries: { isDeliveriesDataDirty },
}) => isDeliveriesDataDirty;
