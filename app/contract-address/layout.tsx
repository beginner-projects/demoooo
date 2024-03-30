

import React from 'react';
import { TabGroup } from '#/ui/tab-group';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <TabGroup
        path="/contract-address"
        items={[
          {
            text: 'MRB Token Contract Address',
          }
        ]}
      />
      <div>{children}</div>
    </div>
  );
}

