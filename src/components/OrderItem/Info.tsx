import React from 'react';
import { DateTime } from 'src/components';

interface Props {
  id: string;
  createdAt: Date;
}

export const Info = ({ id, createdAt }: Props) => {
  return (
    <div className="Info">
      <div>Order #{id}</div>
      <DateTime createdAt={createdAt} />
    </div>
  );
};
