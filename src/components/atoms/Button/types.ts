import { type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";
import { buttonVariants } from "./variants";

export type ButtonBaseProps = React.ComponentPropsWithRef<"button">;

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonOwnProps = {
  label?: string;
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
};

export type ButtonProps = ButtonBaseProps &
  ButtonVariantProps &
  ButtonOwnProps & { asChild?: boolean };
