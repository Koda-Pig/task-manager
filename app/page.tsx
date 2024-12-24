import { AppHeader } from "@/components/specific/app-header";
import { AppCardCompletion } from "@/components/specific/app-card-completion";

export default function Home() {
  return (
    <>
      <AppHeader
        title="Hi, Dennis Nzioki"
        subTitle="Let's finish your task today!"
      />
      <div className="grid auto-rows-min gap-4 md:grid-cols-3 px-8">
        <AppCardCompletion
          title="Running Task"
          currentValue={65}
          totalValue={100}
        />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
    </>
  );
}
