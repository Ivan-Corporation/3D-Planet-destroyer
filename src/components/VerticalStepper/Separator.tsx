import * as React from 'react';

const separatorStyles = {
  height: '5vh',
  width: 2,
  border: '1px solid #E1E1E1',
  background: '#E1E1E1',
  marginTop: '-15px'
};

export interface ISeparator {
  height?: string | number;
}

export const Separator = ({height}: ISeparator): JSX.Element => {
  return <div style={{...separatorStyles, height: height ?? '5vh'}} />;
};