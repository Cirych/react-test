import React from 'react';
import { storiesOf } from '@storybook/react';
import { OrderListRoot } from './OrderList';

storiesOf('OrderList', module)
  .add('empty order list', () => (
    <OrderListRoot allOrders={[]} />
  ));
