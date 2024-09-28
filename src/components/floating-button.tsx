import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
type Props = React.PropsWithChildren & {
  onClick: () => void;
  className?: string;
};
function FloatingButton({ onClick, children, className }: Props) {
  return (
    <Button
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
