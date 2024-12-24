import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppCircleProgress } from "./app-circle-progress";
interface AppCardCompletionProps {
  title: string;
  currentValue: number;
  totalValue: number;
}

export function AppCardCompletion({
  title,
  currentValue,
  totalValue,
}: Readonly<AppCardCompletionProps>) {
  const completionPercentage = (currentValue / totalValue) * 100;

  return (
    <Card className="bg-foreground text-card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[2rem] mb-4">{currentValue}</p>
        <div className="flex items-center gap-[18px]">
          <AppCircleProgress
            percentage={completionPercentage}
            progressColor="hsl(var(--accent))"
          />
          <p>{totalValue}</p>
        </div>
      </CardContent>
    </Card>
  );
}
