import React from 'react';

import { Button } from './styles';

export default function SecondaryButton(props) {
  const { type, onClick, text } = props;

  return (
    <Button type={type} onClick={onClick}>
      <span>{text}</span>
    </Button>
  );
}
