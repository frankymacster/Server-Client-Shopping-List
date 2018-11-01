import * as React from 'react';

export interface Props {
  active: boolean;
  children: boolean;
  onClick: () => void;
};

const Link = ({ active, children, onClick }: Props) => (
  <button
     onClick={onClick}
     disabled={active}
     style={{
         marginLeft: '4px',
     }}
  >
    {children}
  </button>
)

export default Link;