import ExchangesTable from "@/components/Table/ExchangesTable";

const page = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">CryptoPad</h1>
            <p className="mt-2 text-sm text-gray-700">A list of all the Exchanges.</p>
          </div>
        </div>
      </div>
      <ExchangesTable />
    </>
  );
};

export default page;
