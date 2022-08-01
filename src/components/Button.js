import React from "react";
import Button from "@material-ui/core/Button";

export const CkaButton = ({
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
