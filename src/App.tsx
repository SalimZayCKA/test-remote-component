import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { useStyles } from "./styles";
import clsx from "clsx";

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
  const classes = useStyles();

  const buttonClasses = {
    [classes.zeroPadding]: zeroPadding === true,
    [classes.iconOnly]: iconOnly === true,
    [classes.genericOutline]: variant === "outlined",
    [classes.containedSuccess]: color === "primary" && variant === "contained",
    [classes.outlinedSuccess]: color === "primary" && variant === "outlined",
    [classes.textSuccess]: color === "primary" && variant === "text",
    [classes.containedDanger]: color === "danger" && variant === "contained",
    [classes.outlinedDanger]: color === "danger" && variant === "outlined",
    [classes.textDanger]: color === "danger" && variant === "text",
    [classes.containedSecondary]:
      color === "default" && variant === "contained",
    [classes.outlinedSecondary]: color === "default" && variant === "outlined",
    [classes.textSecondary]: color === "default" && variant === "text"
  };

  const finalClassName =
    forceClassName && className
      ? className
      : clsx(classes.generic, buttonClasses, className);

  return (
    <Button
      {...restProps}
      variant={variant}
      disableElevation={disableElevation}
      className={finalClassName}
    >
      {children}
    </Button>
  );
};

export default CkaButton;
