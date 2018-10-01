import React from 'react';
import { Status } from 'src/types';
import './styles.css';

interface Props {
  status: Status;
}

export const OrderStatus = ({ status }: Props) => (
  <div className={`OrderStatus  ${status}`} />
);
