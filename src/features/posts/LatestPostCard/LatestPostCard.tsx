import { Badge } from "@/components/shadcn/badge";
import { Card, CardContent } from "@/components/shadcn/card";
import { formatDate } from "@/libs/date-fns/format";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

type Props = {
  postId: string;
  icon: string;
  title: string;
  updatedAt: Date;
  tags: string[];
};

export const LatestPostCard = ({
  postId,
  icon,
  title,
  updatedAt,
  tags,
}: Props) => {
  return (
    <Card className="rounded transition-colors hover:bg-blue-50 dark:hover:bg-blue-950">
      <Link href={`/blog/posts/${postId}`}>
        <CardContent className="group relative flex items-center gap-x-4 rounded p-3">
          <div className="grid size-10 flex-none place-content-center rounded bg-blue-100 text-2xl dark:bg-blue-900">
            {icon}
          </div>
          <div className="flex w-full flex-col gap-y-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold">
              {title}
            </p>
            <div className="flex gap-x-1">
              {tags.map((tag) => (
                <Badge key={tag} className="rounded px-2 text-right text-2xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex-none transition-transform group-hover:translate-x-1">
            <FaAngleRight size={16} />
          </div>
          <div className="absolute bottom-1 right-2 text-right text-2xs">
            {formatDate(updatedAt)}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
