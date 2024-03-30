import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
        <h1 className="text-xl tracking-widest font-bold">Voting</h1>
      <div className="governance">
        <div>
        <p className="paragraphs">
        Every single vote matters to shape the future of MRAB ecosystem.
      </p>
      <p className="paragraphs">Be the decision maker by HODLING <span className='text-yellow-400'>MRB Token</span>.</p>

      <p className="text-red-300">No active proposals.</p>

      <div className="flex gap-2">
        <ExternalLink href="https://mrab.io">
          yes
        </ExternalLink>
        <ExternalLink href="https://mrab.io">
          no
        </ExternalLink>
      </div>
        </div>
      <img className="w-2/5 h-auto rounded-md" src="./vote.png" alt="vote-logo" />
      </div>


     
    </div>
  );
}
