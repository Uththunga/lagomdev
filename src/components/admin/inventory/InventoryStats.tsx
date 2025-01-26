import React from 'react';
import { Package, AlertTriangle, ArrowUp, ArrowDown } from 'lucide-react';
import { useInventoryStats } from '../../../hooks/useInventoryStats';

export const InventoryStats: React.FC = () => {
  const { stats } = useInventoryStats();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Stock</p>
            <p className="text-2xl font-bold">{stats.totalItems}</p>
          </div>
          <Package className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Low Stock Items</p>
            <p className="text-2xl font-bold">{stats.lowStockItems}</p>
          </div>
          <AlertTriangle className="w-8 h-8 text-yellow-400" />
        </div>
      </div>
    </div>
  );
};