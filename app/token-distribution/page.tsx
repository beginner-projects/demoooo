
export default function Page() {
  return (

    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <h3 className="font-bold text-lg">Total Supply</h3>
        <h1 className="truncate text-2xl font-bold capitalize text-gray-200">30.000.000.000<span className="text-yellow-400"> MRB</span></h1>
        <h1>.</h1>
        <img src="/total-supply-logo.png" alt="total-supply-logo" />
        <h1 className="text-white">.</h1>
      </div>
    </div>


  );
}

