import { Card, CardContent } from "@/components/shadcn/card";
import { cn } from "@/utils/className";
import type { ReactNode } from "react";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  icon: ReactNode;
  href: string;
  text: string;
  className?: string;
};
export const ExternalLinkCard = ({ href, icon, text, className }: Props) => {
  return (
    <Card className={cn("transition-colors", className)}>
      <a
        className="block"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardContent className="relative flex items-center gap-x-2 p-3">
          {icon}
          <p className="text-sm font-bold">{text}</p>
          <FiExternalLink size={12} className="absolute right-2 top-2" />
        </CardContent>
      </a>
    </Card>
  );
};
