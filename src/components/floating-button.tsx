import React from "react";
import { Plus } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
type Props = React.PropsWithChildren<ButtonProps> & {
  onClick: () => void;
  className?: string;
};
function FloatingButton({ onClick, children, className, ...props }: Props) {
  return (
    <Button
      {...props}
      className={cn(
        "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg",
        className,
      )}
      onClick={onClick}
      aria-label="floating button"
    >
      {children ?? <Plus className="h-6 w-6" />}
    </Button>
  );
}

export default FloatingButton;
