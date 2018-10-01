import React from 'react';
import { Status } from 'src/types';
import { OrderStatus } from './OrderStatus';
import './styles.css';

const StatusMap: Record<Status, string> = {
  IN_PROGRESS: 'In progress',
  COMPLETE: 'Complete'
};

interface Props {
  status: Status;
}

export const OrderStatusLegend = ({ status }: Props) => (
  <div className={`OrderStatusLegend  ${status}`}>
    <OrderStatus status={status} />
    <div>{StatusMap[status]}</div>
  </div>
);
