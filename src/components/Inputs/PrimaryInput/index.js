import React from 'react';

import { Input } from './styles';

export default function PrimaryInput(props) {
  const { type, placeholder } = props;

  return <Input type={type} placeholder={placeholder} />;
}
