import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";

const CkaButton = ({
  children,
  color = "default",
  variant = "contained",
  disableElevation = true,
  iconOnly = false,
  zeroPadding,
  className,
  forceClassName = false,
  ...restProps
}) => {
  return (
    <Button
      {...restProps}
      variant={variant}
      disableElevation={disableElevation}
    >
      {children}
    </Button>
  );
};

export default CkaButton;
