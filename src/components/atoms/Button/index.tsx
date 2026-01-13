import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./variants";
import { type ButtonProps } from "./types";

export const Button = ({
  asChild = false,
  className,
  label,
  leadingIcon: LeadingIcon,
  size = "default",
  trailingIcon: TrailingIcon,
  variant = "default",
  ...restProps
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...restProps}
      className={cn(buttonVariants({ size, variant, className }))}
      data-slot="button"
      data-size={size}
      data-variant={variant}
    >
      {LeadingIcon && <LeadingIcon />}
      <span>{label}</span>
      {TrailingIcon && <TrailingIcon />}
    </Comp>
  );
};
