import React from 'react';
import { OrderStatusLegend } from 'src/components';
import './styles.css';

export const OrderFilter = () => (
  <div className="OrderFilter">
    <OrderStatusLegend status="COMPLETE" />
    <OrderStatusLegend status="IN_PROGRESS" />
  </div>
);
