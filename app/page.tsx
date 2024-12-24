import { AppHeader } from "@/components/specific/app-header";
import { AppCardCompletion } from "@/components/specific/app-card-completion";
import { AppCardActivity } from "@/components/specific/app-card-activity";
import { AppMentors } from "@/components/specific/app-mentors";
import data from "@/data";

export default function Home() {
  return (
    <>
      <AppHeader
        title="Hi, Dennis Nzioki"
        subTitle="Let's finish your task today!"
      />
      <div className="grid auto-rows-min gap-4 lg:grid-cols-3 px-8">
        <AppCardCompletion
          title="Running Task"
          currentValue={65}
          totalValue={125}
        />
        <AppCardActivity />
        <AppMentors className="lg:col-span-full" users={data.mentors} />
        <div className="h-full rounded-xl bg-red-400 min-h-32" />
        <div className="h-full rounded-xl bg-red-400 min-h-32" />
        <div className="h-full rounded-xl bg-red-400 min-h-32" />
        <div className="h-full rounded-xl bg-red-400 min-h-32" />
        <div className="h-full rounded-xl bg-red-400 min-h-32" />
      </div>
    </>
  );
}
