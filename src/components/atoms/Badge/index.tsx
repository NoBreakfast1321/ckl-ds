import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { badgeVariants } from "./variants";
import { type BadgeProps } from "./types";

export const Badge = ({
  asChild = false,
  className,
  variant,
  ...restProps
}: BadgeProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      {...restProps}
      className={cn(badgeVariants({ variant }), className)}
      data-slot="badge"
    />
  );
};
