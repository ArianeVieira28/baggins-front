import React from 'react';

// import { FaGoogle } from 'react-icons/fa';

import { Button, IconSpan, TextSpan } from './styles';

export default function IconButton(props) {
  const { type, onClick, value, text, icon, color } = props;

  const hasText = text !== undefined;

  return (
    <Button color={color} type={type} value={value} onClick={e => onClick(e)}>
      <IconSpan hasText={hasText}>{icon}</IconSpan>
      {text && <TextSpan>{text}</TextSpan>}
    </Button>
  );
}
