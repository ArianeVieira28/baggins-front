import React from 'react';

import { Input } from './styles';

export default function BorderlessInput(props) {
  const { type, placeholder } = props;

  return <Input type={type} placeholder={placeholder} />;
}
