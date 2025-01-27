import React from 'react';
import { useInventory } from '../../../hooks/useInventory';
import { formatDate } from '../../../utils/formatDate';

export const InventoryList: React.FC = () => {
  const { inventory, isLoading } = useInventory();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-[#F5ECD5] rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Low Stock Alert</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Restocked</th>
        </tr>
      </thead>
      <tbody className="bg-[#F5ECD5] divide-y divide-[#3D3D3D]/20">
          {inventory?.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4">{item.productName}</td>
              <td className="px-6 py-4">{item.quantity}</td>
              <td className="px-6 py-4">
                {item.quantity <= item.lowStockThreshold && (
                  <span className="text-red-600 text-sm">Low Stock Alert</span>
                )}
              </td>
              <td className="px-6 py-4">{formatDate(item.lastRestocked)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};