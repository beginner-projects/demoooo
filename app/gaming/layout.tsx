import { Metamask } from '#/ui/metamask';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (

    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/gaming"
          items={[
            {
              text: 'Games',
            }
          ]}
        />

        <div>
          <Metamask />
        </div>

      </div>

      <div>{children}</div>
    </div>

  );
}
