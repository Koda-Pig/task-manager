import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { NoteSVG, StarSVG } from "../react-icons";
import { User } from "@/types";

export function AppCardUser({
  name,
  field,
  imageUrl,
  totalTasks,
  reviews,
}: Readonly<User>) {
  return (
    <Card className="bg-white text-foreground h-full">
      <CardContent>
        <div className="flex items-center gap-2 mb-5">
          <Image
            alt="user profile picture"
            width={48}
            height={48}
            className="rounded-full"
            src={imageUrl}
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="opacity-75 text-xs">{field}</p>
          </div>

          <Button
            type="button"
            variant="ghost"
            className="ml-auto mb-auto text-accent hover:bg-transparent hover:text-inherit p-0"
          >
            + Follow
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <NoteSVG />
            <p>{totalTasks} tasks</p>
          </div>
          <div className="flex gap-1 items-center">
            <StarSVG />
            <p>
              <span className="mr-1">{reviews.average}</span>
              <span>({reviews.total} Reviews)</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
