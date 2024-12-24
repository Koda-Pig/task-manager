import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AppCardUser } from "./app-card-user";
import { User } from "@/types";
import { cn } from "@/lib/utils";

export function AppMentors({
  className,
  users,
}: Readonly<{ className?: string; users: User[] }>) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <Carousel
        opts={{
          slidesToScroll: 1,
          breakpoints: {
            768: { slidesToScroll: 3 },
          },
        }}
      >
        <div className="mb-5 flex">
          <span className="text-2xl font-semibold">Monthly Mentors</span>
          <div className="ml-auto">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent>
          {users.map((user) => (
            <CarouselItem key={user.name} className="">
              <AppCardUser {...user} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
