"use client";
import getCrypto from "@/lib/getCrypto";
import { convertToInternationalCurrencySystem } from "@/utils/convertToInternationalCurrencyFormat";
import { useEffect, useState } from "react";

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

export default function Table({ limit = 20 }: { limit?: number }) {
  const [displayLimit, setDisplayLimit] = useState(limit);
  const [cryptos, setCryptos] = useState<CryptoInterface[]>([]);

  useEffect(() => {
    getCrypto(displayLimit).then((data) => {
      setCryptos(data?.data);
    });
  }, [displayLimit]);

  const handleLoadMore = () => {
    setDisplayLimit((prevLimit) => prevLimit + 20);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">CryptoPad</h1>
            <p className="mt-2 text-sm text-gray-700">A list of all the Cryptocurrencies.</p>
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
                cryptos?.map((crypto: CryptoInterface) => (
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
        {displayLimit <= cryptos?.length && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
