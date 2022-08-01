import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";

type Modify<T, R> = Omit<T, keyof R> & R;

export type CkaButtonProps = Modify<
  ButtonProps,
  {
    color?: "primary" | "danger" | "default";
    iconOnly?: boolean;
    zeroPadding?: boolean;
    forceClassName?: boolean;
  }
>;

const CkaButton: React.FC<CkaButtonProps> = ({
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
