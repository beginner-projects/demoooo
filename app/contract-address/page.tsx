

import React from 'react';
import { Boundary } from '#/ui/boundary';
import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <Boundary>
      <div className="prose prose-sm prose-invert max-w-none">
        <h1 className="text-xl font-bold">MRB Token</h1>
        <p className="contract-address">
          0x6624519e5948CdfAb871f4D13a0557F036ee2782
        </p>
        <div className="flex gap-2">
          <ExternalLink href="https://bscscan.com/token/0x6624519e5948CdfAb871f4D13a0557F036ee2782">
            Contract Address
          </ExternalLink>
        </div>
      </div>
    </Boundary>
  );
}

