"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { week: "S", tasks: 0 },
  { week: "M", tasks: 2 },
  { week: "T", tasks: 0 },
  { week: "W", tasks: 3 },
  { week: "T", tasks: 1 },
  { week: "F", tasks: 2 },
  { week: "S", tasks: 1 },
];

const chartConfig = {
  tasks: {
    label: "Tasks",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AppCardActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Dots</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 20,
              right: 20,
              top: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="translate-y-2"
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="tasks"
              type="natural"
              stroke="hsl(var(--foreground))"
              style={{
                filter: "drop-shadow(0 12px lightgray)",
              }}
              strokeWidth={2}
              dot={{
                fill: "hsl(var(--background))",
                stroke: "hsl(var(--accent))",
              }}
              activeDot={{
                r: 6,
                fill: "hsl(var(--background))",
                stroke: "hsl(var(--accent))",
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
