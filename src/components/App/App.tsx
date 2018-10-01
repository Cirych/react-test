import React, { PureComponent } from 'react';
import { OrderList, OrderForm } from 'src/components';
import './styles.css';

export class App extends PureComponent {
  public render() {
    return (
      <div className="App">
        <OrderList />
        <OrderForm />
      </div>
    );
  }
}
