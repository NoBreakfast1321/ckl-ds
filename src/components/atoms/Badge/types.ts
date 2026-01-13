import { type VariantProps } from "class-variance-authority";
import { badgeVariants } from "./variants";

export type BadgeBaseProps = React.ComponentProps<"span">;

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type BadgeOwnProps = {};

export type BadgeProps = BadgeBaseProps &
  BadgeVariantProps &
  BadgeOwnProps & { asChild?: boolean };
