'use client';
import DateTime from '@/app/shared/appointment/appointment-list/appointment-form/data-time';
import React, { useRef, useState } from 'react';
import {
  PiXBold,
} from 'react-icons/pi';
import { ActionIcon, Title, Text, Button, Input, cn } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import FormGroup from './form-group';
import ExportButton from './export-button';
import ModalButton from './modal-button';
import EventForm from './event-calendar/event-form';
import { eventData } from '@/data/event-data';
import EventCalendarView from './event-calendar';




export default function InfoObjectForm({
  label = 'Upload Files',
  id
}: {
  label?: string;
  fieldLabel?: string;
  btnLabel?: string;
  id?:string;
}) {
  const { closeModal } = useModal();

  return (
    <div className="m-auto px-5 pt-5 @lg:pt-6 @2xl:px-7">
      <div className="flex items-center justify-end">
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => closeModal()}
          className="p-0 text-gray-500 hover:!text-gray-900"
        >
          <PiXBold className="h-[18px] w-[18px]" />
        </ActionIcon>
      </div>
      
      
      <EventCalendarView />
          {/* <ModalButton
            label="Create Event"
            view={<EventForm />}
            customSize="900px"
            className="mt-0 w-full @lg:w-auto"
          /> */}
      
      
    </div>
  );
}

