import getExchanges from "@/lib/getExchanges";
import { convertToInternationalCurrencySystem } from "@/utils/convertToInternationalCurrencyFormat";
import Link from "next/link";
import React from "react";

interface ExchangeInterface {
  exchangeId: string;
  name: string;
  rank: string;
  percentTotalVolume: string;
  volumeUsd: string;
  tradingPairs: string;
  socket: boolean;
  exchangeUrl: string;
  updated: number;
}

const ExchangesTable = async () => {
  const exchanges = await getExchanges();
  return (
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
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Trading Pairs
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
              >
                Volume(24Hr)
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Total(%)
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {exchanges &&
              exchanges?.data?.map((exchange: ExchangeInterface) => (
                <tr key={exchange?.exchangeId}>
                  <td className="relative py-4 pr-3 text-sm font-medium ">{exchange?.rank}</td>
                  <td className="hidden px-3 py-4 text-sm  sm:table-cell">{exchange?.name}</td>
                  <td className="hidden px-3 py-4 text-sm  sm:table-cell">{exchange?.tradingPairs}</td>
                  <td className="px-3 py-4 text-sm">
                    $
                    {convertToInternationalCurrencySystem(exchange?.volumeUsd) === "NaN"
                      ? "0.00"
                      : convertToInternationalCurrencySystem(exchange?.volumeUsd)}
                  </td>
                  <td className="px-3 py-4 text-sm">
                    {parseInt(exchange?.percentTotalVolume).toFixed(2) === "NaN"
                      ? "0.00"
                      : parseInt(exchange?.percentTotalVolume).toFixed(2)}
                    %
                  </td>
                  <td className="hidden px-3 py-4 text-sm  sm:table-cell">
                    <Link
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white border-gray-600"
                      href={exchange?.exchangeUrl}
                      target="_blank"
                    >
                      Link
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangesTable;
