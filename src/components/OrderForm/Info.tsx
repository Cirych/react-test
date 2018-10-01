import React from 'react';
import { graphql } from 'react-apollo';
import { OrderStatusLegend, DateTime } from 'src/components';
import { Status } from 'src/types';
import { ORDER_UPDATE } from 'src/graphql';

interface MutationProps {
  updateStatus();
}

interface OwnProps {
  id: string;
  createdAt: string | Date;
  status: Status;
}

interface Props extends MutationProps, OwnProps {}

export const InfoRoot = ({ id, createdAt, status, updateStatus }: Props) => {
  return (
    <div className="Info">
      <div>Order ID: {id}</div>
      <div>Date: <DateTime createdAt={createdAt} /></div>
      <div className="pointer" onClick={updateStatus}>
        Status (click to change): <OrderStatusLegend status={status} />
      </div>
    </div>
  );
};

export const ReverseStatus: Record<Status, Status> = {
  COMPLETE: 'IN_PROGRESS',
  IN_PROGRESS: 'COMPLETE'
};

export const Info = graphql<OwnProps>(ORDER_UPDATE, {
  options: ({ id, status }) => ({
    variables: { id, status: ReverseStatus[status] }
  }),
  name: 'updateStatus'
})(InfoRoot);
