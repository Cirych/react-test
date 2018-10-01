import React from 'react';
import { storiesOf } from '@storybook/react';
import { OrderFilter } from './OrderFilter';

storiesOf('OrderFilter', module)
  .add('example', () => (
    <OrderFilter />
  ));
