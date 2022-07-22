import * as React from 'react';
import * as CSS from 'csstype';

export interface IStep {
  stepContent: () => JSX.Element;
  statusColor?: string;
  statusCircleSize?: number;
  LinkTo?: string;
}

const buttonContainerStyles: CSS.Properties = {
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: '12px',
  padding: '2px',
  cursor: 'pointer',
};

export const Step = ({
  stepContent,
  statusColor,
  statusCircleSize,
  LinkTo,
}: IStep): JSX.Element => {
  const circleStyles = {
    borderRadius: statusCircleSize ?? 16,
    width: statusCircleSize ?? 16,
    height: statusCircleSize ?? 16,
    border: '2px solid #E1E1E1',
    background: statusColor ?? 'white',
  };


  return (
    <a href={LinkTo} style={{textDecoration:'none'}}>
    <div
      tabIndex={0}

      role="button"
      style={{...buttonContainerStyles}}>
      <div>
        <div style={circleStyles} />
      </div>
      <div style={{paddingBottom: 2}}>{stepContent()}</div>
    </div>
    </a>
  );
};