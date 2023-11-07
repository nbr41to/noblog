import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="grid h-full place-items-center gap-4 text-center">
      <h2 className="font-baloo text-4xl">Not Found</h2>
      <p className="font-baloo text-xl">Could not find requested resource</p>
      <Link href="/" className="font-baloo text-xl underline">
        Return Home
      </Link>
    </div>
  );
}
