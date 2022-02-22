import client from '..';

export async function getDeliveriesDataApi() {
  const { data } = await client.get('/deliveries');

  return data;
}

export async function getDeliveryDetailsApi(id) {
  const { data } = await client.get(`/deliveries/${id}`);

  return data;
}

export async function updateDeliveryApi({ id, delivery }) {
  const { data } = await client.put(`/deliveries/${id}`, { delivery });

  return data;
}
