import { MrbLogo } from '#/ui/mrb-logo';

export default function Pricebanner({ className }: { className: string }) {
  return (
    <div
      className={`${className} bg-vc-border-gradient inset-x-0 bottom-3 mx-4 rounded-lg p-px shadow-lg shadow-black/20`}
    >
      <div className="flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex items-center gap-x-1.5">
          <a href="#" title="Mrab Club">
            <div className="w-7 text-gray-100 hover:text-gray-50">
              <MrbLogo />
            </div>
          </a>
          <div className="mx-2 text-sm text-yellow-400">1 MRB = $ 0.001</div>

        </div>


      </div>
    </div>
  );
}
