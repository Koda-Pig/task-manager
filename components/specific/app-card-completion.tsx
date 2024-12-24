import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{currentValue}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{totalValue}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          Percentage thing here {completionPercentage}
        </Button>
      </CardFooter>
    </Card>
  );
}
