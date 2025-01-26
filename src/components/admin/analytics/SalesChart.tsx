import React from 'react';
import { useSalesData } from '../../../hooks/useSalesData';
import { formatCurrency } from '../../../utils/formatCurrency';

export const SalesChart: React.FC = () => {
  const { data, isLoading } = useSalesData();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
      <div className="h-64">
        {/* Chart implementation */}
        <div className="flex items-end h-full gap-2">
          {data?.map((item, index) => (
            <div
              key={index}
              className="bg-black/80 hover:bg-black transition-colors w-full"
              style={{ height: `${(item.amount / Math.max(...data.map(d => d.amount))) * 100}%` }}
            >
              <div className="text-xs text-center mt-2">{formatCurrency(item.amount)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};