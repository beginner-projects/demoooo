import '#/styles/globals.css';
import { AddressBar } from '#/ui/address-bar';
import MrbPriceBanner from '#/ui/price-banner';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';
import Footer from '#/ui/footer';

export const metadata: Metadata = {
  title: {
    default: 'MRAB CLUB',
    template: 'Welcome to the MRAB CLUB',
  },
  description:
    'Building Real World Businesses on BSC Network',
  openGraph: {
    title: 'MRAB CLUB',
    description:
      'A club bulding businesses leveraging blockchain technology.',
    images: [`./flame.png MRAB CLUB`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div>

            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
            <Footer />
            <MrbPriceBanner className="fixed sm:hidden" />
          </div>
        </div>
      </body>
    </html>
  );
}
