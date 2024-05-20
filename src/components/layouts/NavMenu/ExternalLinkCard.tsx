import { Card } from "@/components/shadcn/card";
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
    <a className="block" href={href} target="_blank" rel="noopener noreferrer">
      <Card
        className={cn(
          "flex items-center gap-x-2 p-3 transition-colors",
          className,
        )}
      >
        {icon}
        <p className="text-sm font-bold">{text}</p>
        <FiExternalLink className="ml-auto" />
      </Card>
    </a>
  );
};
