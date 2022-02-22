import React, { memo, useCallback, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';

import DeliveryItem from './DeliveryItem';

import { ITEM_HEIGHT } from './styles';
import Separator from '../../../components/Separator';
import DetailItem from '../../../components/DetailItem';

const DeliveriesList = memo(({ data, onItemPress, activeDelivery }) => {
  const renderItem = useCallback(
    ({ item }) => {
      return <DeliveryItem item={item} onPress={onItemPress} />;
    },
    [onItemPress],
  );

  const renderHeader = useCallback(() => {
    if (!activeDelivery) {
      return <View />;
    }

    return (
      <View>
        <DetailItem title="Active Delivery: " />
        <DeliveryItem item={activeDelivery} onPress={onItemPress} />
      </View>
    );
  }, [activeDelivery, onItemPress]);

  const keyExtractor = ({ id }) => id;
  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });
  const itemSeparator = () => <Separator />;

  return useMemo(() => {
    return (
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={itemSeparator}
        initialNumToRender={100}
        ListHeaderComponent={renderHeader}
      />
    );
  }, [data, renderHeader, renderItem]);
});

DeliveriesList.propTypes = {
  data: PropTypes.array,
  onItemPress: PropTypes.func,
  activeDelivery: PropTypes.shape({}),
};

export default DeliveriesList;
