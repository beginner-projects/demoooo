export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'BUSINESSES',
    items: [
      {
        name: 'e - Commerce',
        slug: 'e-commerce',
        description: 'Clothing line marketplace on the blockchain platform.',
      },
      {
        name: 'Gaming',
        slug: 'gaming',
        description: 'Play to Earn games with unique incentive reward mechanism.',
      },
      {
        name: 'Staking',
        slug: 'staking',
        description: 'Stake your MRB tokens onchain & boos your portfolio with more MRB Tokens.',
      },
    ],
  },
  {
    name: 'ABOUT TOKEN',
    items: [      {
        name: 'Contract Address',
        slug: 'contract-address',
        description: '0x6624519e5948CdfAb871f4D13a0557F036ee2782',
      },
      {
        name: 'Token Distribution',
        slug: 'token-distribution',
        description: 'Creators, Public, Reserve, Bonus, Partnerships, Referral',
      },
    ],
  },
  {
    name: 'Smart Pool Mechanism',
    items: [
      {
        name: 'Passive Income',
        slug: 'passive-income',
        description:
          'All profits made from P2E Games & elling is transferred directly to the smart pool.',
      },
      {
        name: 'Pre - Sale',
        slug: 'presale',
        description:
          'Investors are welcomed to buy the MRB Token at juicy discounted prices.',
      },
      {
        name: 'Governance',
        slug: 'governance',
        description:
          'Investors are welcomed to buy the MRB Token at juicy discounted prices.',
      }
    ],
  }
];
