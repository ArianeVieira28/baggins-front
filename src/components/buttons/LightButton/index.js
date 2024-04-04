import React from 'react';

import { Button } from './styles';

export default function LightButton(props) {
  const { type, color, onClick, value, text, style, disabled } = props;

  return (
    <Button
      color={color}
      onClick={e => onClick(e)}
      type={type}
      value={value}
      style={style}
      disabled={disabled}
    >
      <span>{text}</span>
    </Button>
  );
}
