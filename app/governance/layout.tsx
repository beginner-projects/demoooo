import { Boundary } from '#/ui/boundary';
import { Metamask } from '#/ui/metamask';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = 'BUSINESSES';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Businesses({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/"
          items={[
            {
              text: 'Governance',
            }
          ]}
        />

        <div className="self-start">
          <Metamask />
        </div>
      </div>
      <Boundary>
        <div>{children}</div>
      </Boundary>

    </div>
  );
}
