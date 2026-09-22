import {
  BuildingOffice2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/temp/room')({
  component: TempRoomPage,
});

const roomDescription =
  'A flexible conference room for team meetings, presentations, and small events.';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const sampleTimes = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'];
const roomFeatures = ['Conference layout', 'Flexible seating', 'Quiet setting'];
const availableEquipment = ['Display', 'Video conferencing', 'Whiteboard'];

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
});

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric',
});

function TempRoomPage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [duration, setDuration] = useState(1);
  const [reservationMessage, setReservationMessage] = useState('');

  const firstWeekday = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1
  ).getDay();
  const daysInMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() + 1,
    0
  ).getDate();
  const calendarCellCount = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;
  const isCurrentMonth =
    visibleMonth.getFullYear() === today.getFullYear() &&
    visibleMonth.getMonth() === today.getMonth();

  function changeMonth(offset: number) {
    setVisibleMonth(
      new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + offset, 1)
    );
    setSelectedDate(null);
    setSelectedTime(null);
    setReservationMessage('');
  }

  return (
    <main className="content-container py-8 sm:py-10">
      <nav
        aria-label="Breadcrumb"
        className="mb-4 text-xs text-base-content/70 uppercase"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link className="hover:text-primary hover:underline" to="/temp">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              className="hover:text-primary hover:underline"
              to="/temp/building"
            >
              Resnick Center
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-base-content">
            Room 1155
          </li>
        </ol>
      </nav>

      <article className="overflow-hidden rounded-lg border border-base-300 bg-base-200">
        <header className="border-b-8 border-secondary bg-primary px-6 py-8 text-primary-content sm:px-10 sm:py-10">
          <p className="text-sm font-semibold tracking-wide text-primary-content/70 uppercase">
            Resnick Agricultural Innovation Research Center
          </p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Room 1155</h1>
          <p className="mt-3 max-w-prose text-lg leading-relaxed text-primary-content/90">
            {roomDescription}
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Squares2X2Icon
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-primary-content/70"
              />
              <div>
                <dt className="text-sm font-bold tracking-wide text-primary-content/70 uppercase">
                  Room type
                </dt>
                <dd className="mt-1">Conference</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <UsersIcon
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-primary-content/70"
              />
              <div>
                <dt className="text-sm font-bold tracking-wide text-primary-content/70 uppercase">
                  Capacity
                </dt>
                <dd className="mt-1">20 people</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BuildingOffice2Icon
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-primary-content/70"
              />
              <div>
                <dt className="text-sm font-bold tracking-wide text-primary-content/70 uppercase">
                  Floor
                </dt>
                <dd className="mt-1">1st floor</dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <section aria-labelledby="room-features-heading">
              <h2
                className="text-sm font-bold tracking-wide text-primary-content/70 uppercase"
                id="room-features-heading"
              >
                Room features
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {roomFeatures.map((feature) => (
                  <li
                    className="badge badge-outline border-primary-content/40 text-primary-content"
                    key={feature}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="available-equipment-heading">
              <h2
                className="text-sm font-bold tracking-wide text-primary-content/70 uppercase"
                id="available-equipment-heading"
              >
                Available equipment
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {availableEquipment.map((equipment) => (
                  <li
                    className="badge badge-outline border-primary-content/40 text-primary-content"
                    key={equipment}
                  >
                    {equipment}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </header>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <h2 className="text-2xl font-semibold text-primary">
            Reserve this room
          </h2>
          <p className="mt-2 text-sm text-base-content/70">
            Choose a date, start time, and duration. Availability shown here is
            sample data.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <section
              aria-labelledby="calendar-heading"
              className="lg:col-span-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3
                  className="text-lg font-semibold text-primary"
                  id="calendar-heading"
                >
                  Select a date
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    aria-label="Previous month"
                    className="btn btn-ghost btn-square btn-sm"
                    disabled={isCurrentMonth}
                    onClick={() => changeMonth(-1)}
                    type="button"
                  >
                    <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                  <span className="min-w-36 text-center font-semibold text-primary">
                    {monthFormatter.format(visibleMonth)}
                  </span>
                  <button
                    aria-label="Next month"
                    className="btn btn-ghost btn-square btn-sm"
                    onClick={() => changeMonth(1)}
                    type="button"
                  >
                    <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-7 gap-1 text-center sm:gap-2">
                {weekdays.map((day) => (
                  <span
                    className="py-2 text-xs font-bold tracking-wide text-base-content/60 uppercase"
                    key={day}
                  >
                    {day}
                  </span>
                ))}
                {Array.from({ length: calendarCellCount }, (_, index) => {
                  const dayNumber = index - firstWeekday + 1;

                  if (dayNumber < 1 || dayNumber > daysInMonth) {
                    return <span aria-hidden="true" key={index} />;
                  }

                  const date = new Date(
                    visibleMonth.getFullYear(),
                    visibleMonth.getMonth(),
                    dayNumber
                  );
                  const isPast = date < today;
                  const isSelected = selectedDate?.getTime() === date.getTime();
                  const isToday = date.getTime() === today.getTime();

                  return (
                    <button
                      aria-label={dateFormatter.format(date)}
                      aria-pressed={isSelected}
                      className={`h-11 w-full rounded-lg text-sm transition-colors sm:h-14 ${
                        isSelected
                          ? 'bg-primary font-semibold text-primary-content'
                          : isPast
                            ? 'text-base-content/30'
                            : 'text-base-content hover:bg-primary/10'
                      } ${isToday && !isSelected ? 'ring-1 ring-primary/40' : ''}`}
                      disabled={isPast}
                      key={dayNumber}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime(null);
                        setReservationMessage('');
                      }}
                      type="button"
                    >
                      {dayNumber}
                    </button>
                  );
                })}
              </div>
            </section>

            <section
              aria-labelledby="reservation-details-heading"
              className="rounded-lg border border-base-300 bg-base-100 p-5 sm:p-6"
            >
              <h3
                className="text-lg font-semibold text-primary"
                id="reservation-details-heading"
              >
                Reservation details
              </h3>
              <p className="mt-2 text-sm text-base-content/70">
                {selectedDate
                  ? dateFormatter.format(selectedDate)
                  : 'Select a date on the calendar to begin.'}
              </p>

              <fieldset className="mt-6" disabled={!selectedDate}>
                <legend className="text-sm font-semibold text-base-content">
                  Start time
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {sampleTimes.map((time) => (
                    <button
                      aria-pressed={selectedTime === time}
                      className={`btn btn-sm ${
                        selectedTime === time ? 'btn-primary' : 'btn-outline'
                      }`}
                      key={time}
                      onClick={() => {
                        setSelectedTime(time);
                        setReservationMessage('');
                      }}
                      type="button"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="mt-6 block text-sm font-semibold text-base-content">
                Duration
                <select
                  className="select mt-2 w-full"
                  onChange={(event) => {
                    setDuration(Number(event.target.value));
                    setReservationMessage('');
                  }}
                  value={duration}
                >
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                </select>
              </label>

              <div className="mt-6 rounded-lg bg-base-200 p-4 text-sm">
                <p className="font-semibold text-primary">Your selection</p>
                <p className="mt-2 text-base-content/70">
                  {selectedDate && selectedTime
                    ? `${dateFormatter.format(selectedDate)} at ${selectedTime} for ${duration} ${duration === 1 ? 'hour' : 'hours'}`
                    : 'Choose a date and start time to see your reservation.'}
                </p>
              </div>

              <button
                className="btn btn-secondary mt-6 w-full"
                disabled={!selectedDate || !selectedTime}
                onClick={() =>
                  setReservationMessage(
                    'Demo only — this reservation was not submitted.'
                  )
                }
                type="button"
              >
                Reserve room
              </button>
              <p
                aria-live="polite"
                className="mt-3 text-sm text-base-content/70"
              >
                {reservationMessage || 'Reservations are not submitted yet.'}
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
