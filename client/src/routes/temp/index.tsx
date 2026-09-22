import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/temp/')({
  component: TempLandingPage,
});

const popularBuildings = [
  { name: 'Hunt Hall', rooms: 22 },
  { name: 'Resnick Center', rooms: 55 },
  { name: 'RMI', rooms: 22 },
] as const;

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <rect height="17" rx="2" width="18" x="3" y="4" />
      <path d="M7 2v4M17 2v4M3 10h18" />
    </svg>
  );
}

function TempLandingPage() {
  return (
    <main className="content-container py-8 sm:py-12">
      <section
        aria-labelledby="reservation-search-heading"
        className="relative isolate overflow-hidden rounded-lg border-b-4 border-secondary bg-primary px-6 py-9 text-primary-content sm:px-10 sm:py-10"
        id="find-a-room"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <span className="absolute -top-20 -right-12 h-48 w-48 rounded-full bg-info/20" />
          <span className="absolute -top-8 right-20 h-24 w-24 rounded-full bg-info/25" />
          <span className="absolute top-20 right-8 h-10 w-10 rounded-full bg-primary-content/20" />
        </div>
        <h1
          className="relative text-2xl font-semibold sm:text-3xl"
          id="reservation-search-heading"
        >
          Reserve a room or space with Grove
        </h1>
        <form
          action="/temp/building"
          className="relative mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-12 xl:items-end"
          method="get"
        >
          <label className="flex flex-col gap-3 text-base xl:col-span-3">
            <span>Room or building</span>
            <input
              className="input input-lg w-full bg-base-200 text-base-content"
              defaultValue="Resnick Center"
              name="building"
              type="search"
            />
          </label>
          <label className="flex flex-col gap-3 text-base xl:col-span-2">
            <span>Date</span>
            <input
              className="input input-lg w-full bg-base-200 text-base-content"
              defaultValue="2027-01-23"
              name="date"
              type="date"
            />
          </label>
          <label className="flex flex-col gap-3 text-base xl:col-span-2">
            <span>Start</span>
            <input
              className="input input-lg w-full bg-base-200 text-base-content"
              defaultValue="10:30"
              name="start"
              type="time"
            />
          </label>
          <label className="flex flex-col gap-3 text-base xl:col-span-2">
            <span>Duration</span>
            <select
              className="select select-lg w-full bg-base-200 text-base-content"
              defaultValue="3"
              name="duration"
            >
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
            </select>
          </label>
          <button
            className="btn btn-secondary btn-lg w-full sm:col-span-2 xl:col-span-3"
            type="submit"
          >
            View available rooms
          </button>
        </form>
      </section>

      <section aria-labelledby="popular-buildings-heading" className="mt-12">
        <h2
          className="text-sm font-medium tracking-wide text-base-content/75 uppercase"
          id="popular-buildings-heading"
        >
          Popular buildings
        </h2>
        <div className="mt-3 grid gap-5 md:grid-cols-3 lg:gap-8">
          {popularBuildings.map(({ name, rooms }) => (
            <Link
              className="group flex min-h-32 flex-col justify-between rounded-lg border border-base-300 bg-base-200 p-5 transition-colors hover:border-primary"
              key={name}
              to="/temp/building"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-base-content group-hover:text-primary">
                    {name}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-base-content/70 underline underline-offset-2">
                    1142 Shields Drive
                    <br />
                    Davis, CA 95616
                  </p>
                </div>
                <span className="mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-secondary">
                  <CalendarIcon />
                </span>
              </div>
              <p className="mt-5 text-xs text-base-content">{rooms} rooms</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="my-reservations-heading"
        className="mt-8 min-h-96 rounded-lg border border-base-300 bg-base-200 px-5 py-7 sm:mt-10 sm:px-8"
        id="my-reservation"
      >
        <div className="flex items-center gap-4 border-b border-base-300 pb-5">
          <svg
            aria-hidden="true"
            className="h-6 w-6 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
          >
            <path d="M7 2h7l5 5v15H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
            <path d="M14 2v6h5M9 13h6M9 17h6" />
          </svg>
          <h2 className="text-xl font-medium" id="my-reservations-heading">
            My Reservations
          </h2>
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="table w-full min-w-xl text-left text-sm">
            <caption className="sr-only">Example reservation</caption>
            <thead>
              <tr className="text-xs text-base-content uppercase">
                <th className="font-medium">Room</th>
                <th className="font-medium">Event type</th>
                <th className="font-medium">Date</th>
                <th className="font-medium">Time</th>
                <th className="text-right font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1155 Hunt</td>
                <td>Conference</td>
                <td>11/11/2026</td>
                <td>8:00 am – 5:00 pm</td>
                <td className="text-right">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
