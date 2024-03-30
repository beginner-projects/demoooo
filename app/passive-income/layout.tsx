import { Boundary } from '#/ui/boundary';
import React from 'react';

const title = 'Passive - Income';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Boundary>

      <div className="space-y-9">
        <div>{children}</div>
      </div>

    </Boundary>
  );
}
