import React, { MouseEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { OrderStatus } from 'src/components';
import { Info } from './Info';
import { RootState } from 'src/reducers';
import { Order } from 'src/types';
import './styles.css';

interface StoreProps {
  selectedId: string;
}

interface DispatchProps {
  onItemSelect: (event: MouseEvent<HTMLDivElement>) => void;
}

interface OwnProps {
  order: Order;
}

interface Props extends OwnProps, StoreProps, DispatchProps {}

export const OrderItemRoot = ({
  selectedId,
  order: { id, status, ...rest },
  onItemSelect
}: Props) => {
  const isSelected = selectedId === id;
  const className = `OrderItem pointer${isSelected ? ' selected' : ''}`
  return (
    <div className={className} onClick={onItemSelect}>
      <OrderStatus status={status} />
      <Info id={id} {...rest} />
    </div>
  );
};

const mapStateToProps = ({ order: { id } }: RootState): StoreProps => ({
  selectedId: id
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  { order }: OwnProps
): DispatchProps => ({
  onItemSelect: () => dispatch({ type: 'ORDER_SELECTION', payload: order })
});

export const OrderItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderItemRoot);

export const mapOrderItem = (order: Order) => (
  <OrderItem key={order.id} order={order} />
);
