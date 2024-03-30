
import Swap from '#/ui/swap';


export default function Page() {
  return (
    <>
      <div className="prose prose-sm prose-invert max-w-none">
        <h1 className="text-xl font-bold">📢</h1>
        <div className='flex'>
          <Swap address={''} isConnected={false} />
        </div>
        <div>
          <img className="rounded-md" src="./presale.png" alt="presale-logo" />
        </div>
        <p className="paragraphs">Grab the opportunity to buy <span className="text-yellow-400">MRB Token</span> at a cheaper price.</p>
      </div>
      
    </>

  );
}
