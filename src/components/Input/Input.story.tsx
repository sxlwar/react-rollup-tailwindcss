import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Input, IInputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
} as Meta<IInputProps>;

export const Default: FC = () => {
  return <Input onClick={() => console.log('click')} defaultValue="2"></Input>;
};
