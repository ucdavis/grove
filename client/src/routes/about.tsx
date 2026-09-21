import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold">About GROVE</h1>
      <p className="mt-6">GROVE is a UC Davis application in development.</p>
      <Link className="btn btn-primary mt-8" to="/">Home</Link>
    </main>
  );
}
