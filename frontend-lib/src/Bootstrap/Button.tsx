import React, { Fragment } from 'react';
import { ButtonProps } from '../ComponentProps/ButtonProps';
import Button from 'react-bootstrap/Button';

const BootstrapButton = ({ text }: ButtonProps) => {
  return (
    <Fragment>
      Bootstrap button : <Button variant='warning'>{text}</Button>
    </Fragment>
  );
};

export default BootstrapButton;
