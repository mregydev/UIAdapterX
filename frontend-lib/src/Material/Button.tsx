import React, { Fragment } from 'react';
import Button from "@mui/material/Button";
import { ButtonProps } from "../Props/ButtonProps";

const MUIButton = ({ text }: ButtonProps) => {
  return (
    <Fragment>
      Material UI button :{' '}
      <Button variant='contained' color='primary'>
        {text}
      </Button>
    </Fragment>
  );
};

export default MUIButton;
