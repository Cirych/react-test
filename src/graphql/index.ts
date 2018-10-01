import gql from 'graphql-tag';

export const ALL_ORDERS_QUERY = gql`
  query {
    allOrders {
      id
      createdAt
      status
      products {
        quantity
        product {
          name
          price
        }
      }
    }
  }
`;

export const ORDER_QUERY = gql`
  query($id: ID!) {
    Order(id: $id) {
      id
      createdAt
      status
      products {
        quantity
        product {
          name
          price
        }
      }
    }
  }
`;

export const ORDER_UPDATE = gql`
  mutation($id: ID!, $status: Status) {
    updateOrder(id: $id, status: $status) {
      id
      status
    }
  }
`;
