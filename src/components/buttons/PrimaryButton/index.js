import React from 'react';

import { Button } from './styles';

export default function ButtonDefault(props) {
  const { type, text, onClick, value, disabled } = props;

  return (
    <Button
      type={type}
      value={value}
      onClick={e => onClick(e)}
      disabled={disabled}
    >
      <span>{text}</span>
    </Button>
  );
}
