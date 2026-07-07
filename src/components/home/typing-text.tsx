import { useEffect, useState } from "react";

interface TypingTextProps {
  roles: string[];
  className?: string;
}

/**
 * Lightweight typewriter effect that cycles through the provided roles,
 * typing then deleting each one with a blinking caret.
 */
export function TypingText({ roles, className }: TypingTextProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === current) {
      delay = 1600; // pause when fully typed
    } else if (deleting && text === "") {
      delay = 350;
    }

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <span className={className}>
      <span className="text-gradient-brand">{text}</span>
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse bg-brand align-middle" />
    </span>
  );
}
