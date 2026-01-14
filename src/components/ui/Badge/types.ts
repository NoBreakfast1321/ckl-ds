import { type VariantProps } from "class-variance-authority";
import { badgeVariants } from "./variants";
import type { LucideIcon } from "lucide-react";

export type BadgeBaseProps = React.ComponentPropsWithoutRef<"span">;

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export type BadgeOwnProps = {
  label?: string;
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
};

export type BadgeProps = BadgeBaseProps &
  BadgeVariantProps &
  BadgeOwnProps & { asChild?: boolean };
