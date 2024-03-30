import { Boundary } from '#/ui/boundary';
import { Metamask } from '#/ui/metamask';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';
import Page from './page';

const title = 'Pre - Sale';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Presale() {


  return (
    <Boundary>
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path="/presale"
            items={[
              {
                text: 'Pre - Sale',
              }
            ]}
          />

          <div className="self-start">
            <Metamask />
          </div>
        </div>

        <div>
          <Page />
        </div>
      </div>
    </Boundary>

  );
}
