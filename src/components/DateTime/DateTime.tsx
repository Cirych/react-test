import React from 'react';

interface Props {
  createdAt: string | Date;
}

export const DateTime = ({ createdAt }: Props) => {
  const createdAtDate = new Date(createdAt);
  const date = createdAtDate.toLocaleDateString();
  const time = createdAtDate.toLocaleTimeString();

  return (
    <div>
      {date} {time}
    </div>
  );
};
