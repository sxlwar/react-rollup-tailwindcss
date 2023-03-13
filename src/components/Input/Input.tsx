import React from 'react';
import RcInput, { InputProps, InputRef } from 'rc-input';
import './styles.css';

export type IInputProps = InputProps & React.RefAttributes<InputRef>;

export function Input(props: InputProps & React.RefAttributes<InputRef>) {
  return <RcInput {...props} className="bg-blue-700 input" />;
}
