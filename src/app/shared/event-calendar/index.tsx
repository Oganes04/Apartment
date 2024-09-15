'use client';

import type { CalendarEvent } from '@/types';


import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import ru from 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { useCallback, useMemo } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import EventForm from '@/app/shared/event-calendar/event-form';
import DetailsEvents from '@/app/shared/event-calendar/details-event';
import { useModal } from '@/app/shared/modal-views/use-modal';
import useEventCalendar from '@/hooks/use-event-calendar';
import cn from '@/utils/class-names';
import { useColorPresetName } from '@/hooks/use-theme-color';

// import { registerLocale, setDefaultLocale } from  "react-datepicker";
// import { ru } from '.pnpm/date-fns@3.6.0/node_modules/date-fns/locale/ru';
// registerLocale('ru', ru);
// setDefaultLocale('ru');
// Apply plugins


dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.locale(ru);


const localizer = dayjsLocalizer(dayjs);

const calendarToolbarClassName =
  '[&_.rbc-toolbar_.rbc-toolbar-label]:whitespace-nowrap [&_.rbc-toolbar_.rbc-toolbar-label]:my-2 [&_.rbc-toolbar]:flex [&_.rbc-toolbar]:flex-col [&_.rbc-toolbar]:items-center @[56rem]:[&_.rbc-toolbar]:flex-row [&_.rbc-btn-group_button:hover]:bg-gray-300 [&_.rbc-btn-group_button]:duration-200 [&_.rbc-btn-group_button.rbc-active:hover]:bg-gray-600 dark:[&_.rbc-btn-group_button.rbc-active:hover]:bg-gray-300 [&_.rbc-btn-group_button.rbc-active:hover]:text-gray-50 dark:[&_.rbc-btn-group_button.rbc-active:hover]:text-gray-900 [@media(max-width:375px)]:[&_.rbc-btn-group:last-child_button]:!px-2.5 [&_.rbc-toolbar_>_*:last-child_>_button:focus]:!bg-primary [&_.rbc-toolbar_>_*:last-child_>_button:focus]:!text-gray-0 dark:[&_.rbc-toolbar_>_*:last-child_>_button:focus]:!text-gray-900 [&_.rbc-toolbar_>_*:last-child_>_button:hover]:!text-gray-900 dark:[&_.rbc-toolbar_>_*:last-child_>_button:hover]:!bg-gray-300 [&_.rbc-toolbar_>_*:last-child_>_button:hover]:!bg-gray-300 [&_.rbc-toolbar_>_*:last-child_>_button.rbc-active:hover]:!bg-primary-dark [&_.rbc-toolbar_>_*:last-child_>_button.rbc-active:hover]:!text-gray-0 dark:[&_.rbc-toolbar_>_*:last-child_>_button.rbc-active:hover]:!text-gray-900';

const rtcEventClassName =
  '[&_.rbc-event]:!text-gray-0 dark:[&_.rbc-event]:!text-gray-0 dark:[&_.rbc-toolbar_>_*:last-child_>_button.rbc-active:hover]:!text-gray-0 dark:[&_.rbc-toolbar_>_*:last-child_>_button.rbc-active:focus]:!text-gray-0';

export default function EventCalendarView() {
  const { events } = useEventCalendar();
  const { openModal } = useModal();
  const { colorPresetName } = useColorPresetName();

  const handleSelectSlot = useCallback(
    ({ start, end }: { start: Date; end: Date }) => {
      openModal({
        view: <EventForm startDate={start} endDate={end} />,
        customSize: '650px',
      });
    },
    [openModal]
  );

  const handleSelectEvent = useCallback(
    (event: CalendarEvent) => {
      openModal({
        view: <DetailsEvents event={event} />,
        customSize: '500px',
      });
    },
    [openModal]
  );

  const { views, scrollToTime, formats } = useMemo(
    () => ({
      views: {
        month: true,
        week: false,
        day: false,
        agenda: true,
      },
      scrollToTime: new Date(2023, 10, 27, 6),
      formats: {
        dateFormat: 'D',
        weekdayFormat: (date: Date, culture: any, localizer: any) =>
          localizer.format(date, 'dd', culture),
        dayFormat: (date: Date, culture: any, localizer: any) =>
          localizer.format(date, 'dd M/D', culture),
        timeGutterFormat: (date: Date, culture: any, localizer: any) =>
          localizer.format(date, 'hh', culture),
      },
      
    }),
    []
  );

  

  return (
    <div className="@container">
      <Calendar
    
        localizer={localizer}
        events={events}
        views={views}
        formats={formats}
        startAccessor="start"
        endAccessor="end"
        dayLayoutAlgorithm="no-overlap"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        scrollToTime={scrollToTime}
        className={cn(
          'h-[650px] md:h-[1000px]',
          calendarToolbarClassName,
          colorPresetName === 'black' && rtcEventClassName
        )}
        messages={{
          agenda: 'Список',
          month: 'Месяц',
          today: 'Сегодня',
          next: 'Следующий месяц',
          previous: 'Предыдущий месяц',
          date: 'Дата',
          time: 'Время',
          event: 'Бронь',
        }}
      />
    </div>
  );
}
