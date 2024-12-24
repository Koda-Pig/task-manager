import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AppCardUser } from "./app-card-user";
import { User } from "@/types";

export function AppMentors({
  className,
  users,
}: Readonly<{ className?: string; users: User[] }>) {
  return (
    <Carousel opts={{ slidesToScroll: "auto" }} className={className}>
      <p className="mb-5 flex">
        <span className="text-2xl font-semibold">Monthly Mentors</span>
        <div className="ml-auto">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </p>
      <CarouselContent>
        {users.map((user) => (
          <CarouselItem key={user.name} className="max-w-80">
            <AppCardUser {...user} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
