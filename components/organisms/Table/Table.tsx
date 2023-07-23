import { convertToInternationalCurrencySystem } from "@/utils/convertToInternationalCurrencyFormat";

interface CryptoInterface {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

const getCryptoData = async () => {
  const res = await fetch("https://api.coincap.io/v2/assets");
  return res.json();
};

export default async function Table() {
  const cryptos = await getCryptoData();
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">CryptoPad</h1>
            <p className="mt-2 text-sm text-gray-700">A list of all the Cryptocurrencies.</p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            {/* <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add user
            </button> */}
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left divide-y divide-gray-200">
            <thead className="bg-white">
              <tr>
                <th scope="col" className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                  Rank
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
                >
                  Price
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Market Cap
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Supply
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Volume(24Hr)
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Change(24Hr)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {cryptos &&
                cryptos?.data?.map((crypto: CryptoInterface) => (
                  <tr key={crypto.id}>
                    <td className="relative py-4 pr-3 text-sm font-medium ">{crypto?.rank}</td>
                    <td className="hidden px-3 py-4 text-sm  sm:table-cell">{crypto?.name}</td>
                    <td className="hidden px-3 py-4 text-sm  md:table-cell">
                      $ {convertToInternationalCurrencySystem(crypto?.priceUsd)}
                    </td>
                    <td className="px-3 py-4 text-sm">
                      $ {convertToInternationalCurrencySystem(crypto?.marketCapUsd)}
                    </td>
                    <td className="px-3 py-4 text-sm">{convertToInternationalCurrencySystem(crypto?.supply)}</td>
                    <td className="px-3 py-4 text-sm">
                      $ {convertToInternationalCurrencySystem(crypto?.volumeUsd24Hr)}
                    </td>
                    <td className="px-3 py-4 text-sm">{parseInt(crypto?.changePercent24Hr).toFixed(2)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
