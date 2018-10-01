import React from 'react';
import { storiesOf } from '@storybook/react';
import { OrderStatus } from './OrderStatus';
import { OrderStatusLegend } from './OrderStatusLegend';

storiesOf('OrderStatus', module)
  .add('order status: In Progress', () => (
    <OrderStatus status='IN_PROGRESS' />
  ))
  .add('order status: Complete', () => (
    <OrderStatus status='COMPLETE' />
  ))
  .add('status legend: In Progress', () => (
    <OrderStatusLegend status='IN_PROGRESS' />
  ))
  .add('status legend: Complete', () => (
    <OrderStatusLegend status='COMPLETE' />
  ));
