import React, { PureComponent } from 'react';
import { compose, flattenProp } from 'recompose';
import { graphql } from 'react-apollo';
import { mapOrderItem, OrderFilter } from 'src/components';
import { ALL_ORDERS_QUERY } from 'src/graphql';
import { Order } from 'src/types';
import './styles.css';

interface Props {
  allOrders: Order[];
}

export class OrderListRoot extends PureComponent<Props> {
  public render() {
    const { allOrders = [] } = this.props;

    return (
      <div className="OrderList">
        <div>{allOrders.map(mapOrderItem)}</div>
        <OrderFilter />
      </div>
    );
  }
}

export const OrderList = compose(
  graphql<{}, Props>(ALL_ORDERS_QUERY),
  flattenProp('data')
)(OrderListRoot);
