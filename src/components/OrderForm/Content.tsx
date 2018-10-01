import React from 'react';
import { OrderedProduct } from 'src/types';

interface Props {
  products?: OrderedProduct[];
}

export const Content = ({ products = [] }: Props) => {
  const total = products.reduce(
    (sum, { quantity, product: { price } }) => sum + quantity * price,
    0
  );

  return (
    <div className="Content">
      <div>
        <div>Product Name</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Total</div>
      </div>
      {products.map(mapProduct)}
      <div>
        <div>Total</div>
        <div />
        <div />
        <div>{total}</div>
      </div>
    </div>
  );
};

const mapProduct = ({ product: { name, price }, quantity }: OrderedProduct) => (
  <div key={name}>
    <div>{name}</div>
    <div>{quantity}</div>
    <div>{price}</div>
    <div>{price * quantity}</div>
  </div>
);
