"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <span>Activity</span>
            <Select>
              <SelectTrigger className="w-auto border-none bg-transparent py-0 h-auto">
                <SelectValue placeholder="This Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="Today">Today</SelectItem>
                  <SelectItem value="Week">This Week</SelectItem>
                  <SelectItem value="Month">This Month</SelectItem>
                  <SelectItem value="Year">This Year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="xl:aspect-[21/9]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
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
              tickMargin={16}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="tasks"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              allowDecimals={false}
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
