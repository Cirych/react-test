import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  compose,
  flattenProp,
  renameProp,
  branch,
  renderComponent
} from 'recompose';
import { graphql } from 'react-apollo';
import { Order } from 'src/types';
import { Info } from './Info';
import { Content } from './Content';
import { NoOrder } from './NoOrder';
import { ORDER_QUERY } from 'src/graphql';
import { RootState } from 'src/reducers';
import './styles.css';

interface StoreProps {
  id: string;
}

interface Props {
  order: Order;
}

export class OrderFormRoot extends PureComponent<Props> {
  public render() {
    const {
      order: { products, ...info }
    } = this.props;
    return (
      <div className="OrderForm">
        <Info {...info} />
        <Content products={products} />
      </div>
    );
  }
}

const mapStateToProps = ({ order: { id } }: RootState): StoreProps => ({
  id
});

export const OrderForm = compose(
  connect(mapStateToProps),
  graphql(ORDER_QUERY),
  flattenProp('data'),
  renameProp('Order', 'order'),
  branch<Props>(({ order }) => !order, renderComponent(NoOrder))
)(OrderFormRoot);
