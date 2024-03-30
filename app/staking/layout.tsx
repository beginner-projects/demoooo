const title = 'Staking';

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function Layout({
  children
}: {
  children: React.ReactNode;
  audience: React.ReactNode;
  views: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
