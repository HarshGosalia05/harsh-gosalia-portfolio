import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full text-muted-foreground hover:text-foreground"
    >
      {/* Both icons rendered; CSS decides visibility — avoids hydration mismatch */}
      <Sun className="h-4.5 w-4.5 scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-4.5 w-4.5 scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
