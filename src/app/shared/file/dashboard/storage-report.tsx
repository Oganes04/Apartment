'use client';

import WidgetCard from '@/components/cards/widget-card';
import { Title, Text, Badge } from 'rizzui';
import cn from '@/utils/class-names';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useMedia } from '@/hooks/use-media';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import TrendingUpIcon from '@/components/icons/trending-up';
import SimpleBar from '@/components/ui/simplebar';

const data = [
  {
    month: 'Янв',
    Клиенты: 5000,
    Брони: 1500,
  },
  {
    month: 'Фев',
    Клиенты: 4000,
    Брони: 1500,
  },
  {
    month: 'Мар',
    Клиенты: 3000,
    Брони: 1500,
  },
  {
    month: 'Апр',
    Клиенты: 6000,
    Брони: 1500,
  },
  {
    month: 'Май',
    Клиенты: 7000,
    Брони: 1500,
  },
  {
    month: 'Июн',
    Клиенты: 11000,
    Брони: 1500,
  },
  {
    month: 'Июл',
    Клиенты: 10000,
    Брони: 1500,
  },
  {
    month: 'Авг',
    Клиенты: 9000,
    Брони: 1500,
  },
  {
    month: 'Сен',
    Клиенты: 3000,
    Брони: 1500,
  },
  {
    month: 'Окт',
    Клиенты: 2000,
    Брони: 1500,
  },
  {
    month: 'Ноя',
    Клиенты: 12000,
    Брони: 1500,
  },
  {
    month: 'Дек',
    Клиенты: 17000,
    Брони: 1500,
  },
];

function CustomYAxisTick({ x, y, payload }: any) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" className="fill-gray-500">
        {`${payload.value.toLocaleString()}`}
      </text>
    </g>
  );
}

export default function StorageReport({ className }: { className?: string }) {
  const isMobile = useMedia('(max-width: 768px)', false);
  const isDesktop = useMedia('(max-width: 1440px)', false);
  const is2xl = useMedia('(max-width: 1780px)', false);
  const isTablet = useMedia('(max-width: 800px)', false);

  return (
    <WidgetCard
      title={''}
      titleClassName="font-normal text-gray-700 sm:text-base font-inter"
      description={
        <div className="flex items-center justify-start">
          <Title as="h2" className="me-2 font-semibold">
          Статистика
          </Title>
  
        </div>
      }
      descriptionClassName="text-gray-500 mt-1.5"
      action={
        <div className="hidden @2xl:block">
          <Badge renderAsDot className="me-0.5 bg-[#282ECA]" /> Клиенты
          <Badge renderAsDot className="me-0.5 ms-4 bg-[#96C0FF]" /> Брони
          
        </div>
      }
      className={className}
    >
      <SimpleBar>
        <div className="h-96 w-full pt-9">
          <ResponsiveContainer
            width="100%"
            height="100%"
            {...(isTablet && { minWidth: '700px' })}
          >
            <BarChart
              data={data}
              barSize={isMobile ? 16 : isDesktop ? 28 : is2xl ? 32 : 46}
              margin={{
                left: 16,
              }}
              className="[&_.recharts-tooltip-cursor]:fill-opacity-20 dark:[&_.recharts-tooltip-cursor]:fill-opacity-10 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500 [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0"
            >
              <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={<CustomYAxisTick />}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="Клиенты" fill="#282ECA" stackId="a" />
              <Bar dataKey="Брони" stackId="a" fill="#96C0FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
