import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="">The page you are looking for does not exist.</p>
      <Link href="/" className=" inline-block text-blue-600 hover:underline">
        Go back to Home
      </Link>
    </>
  );
};

export default NotFound;
