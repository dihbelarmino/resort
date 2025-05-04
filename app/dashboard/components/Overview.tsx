"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

interface DataPoint {
  name: string;
  camareira: number;
  passadeira: number;
  lavanderia: number;
}

const data: DataPoint[] = [
  {
    name: "Jan",
    camareira: 8.2,
    passadeira: 7.5,
    lavanderia: 8.7,
  },
  {
    name: "Fev",
    camareira: 8.5,
    passadeira: 7.8,
    lavanderia: 8.5,
  },
  {
    name: "Mar",
    camareira: 8.7,
    passadeira: 8.0,
    lavanderia: 8.3,
  },
  {
    name: "Abr",
    camareira: 9.0,
    passadeira: 8.2,
    lavanderia: 8.8,
  },
  {
    name: "Mai",
    camareira: 8.8,
    passadeira: 8.5,
    lavanderia: 9.0,
  },
  {
    name: "Jun",
    camareira: 8.9,
    passadeira: 8.7,
    lavanderia: 9.2,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          domain={[0, 10]}
          tickFormatter={(value: number) => `${value}`}
        />
        <Tooltip 
          formatter={(value: number, name: string) => {
            const categoryNames = {
              "camareira": "Camareira",
              "passadeira": "Passadeira",
              "lavanderia": "Lavanderia"
            };
            return [`${value}/10`, categoryNames[name as keyof typeof categoryNames]];
          }}
          labelFormatter={(label: string) => `Mês: ${label}`}
        />
        <Bar
          dataKey="camareira"
          fill="#4942A4"
          radius={[4, 4, 0, 0]}
          name="Camareira"
        />
        <Bar
          dataKey="passadeira"
          fill="#F39200"
          radius={[4, 4, 0, 0]}
          name="Passadeira"
        />
        <Bar
          dataKey="lavanderia"
          fill="#33B44A"
          radius={[4, 4, 0, 0]}
          name="Lavanderia"
        />
      </BarChart>
    </ResponsiveContainer>
  );
} 