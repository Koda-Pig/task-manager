import { AppHeader } from "@/components/specific/app-header";
import { AppCardCompletion } from "@/components/specific/app-card-completion";

export default function Home() {
  return (
    <>
      <AppHeader
        title="Hi, Dennis Nzioki"
        subTitle="Let's finish your task today!"
      />
      <div className="grid auto-rows-min gap-4 lg:grid-cols-2 px-8">
        <AppCardCompletion
          title="Running Task"
          currentValue={65}
          totalValue={100}
        />
        <div className="h-full rounded-xl bg-muted/50" />
        <div className="h-full rounded-xl bg-muted/50" />
      </div>
    </>
  );
}
