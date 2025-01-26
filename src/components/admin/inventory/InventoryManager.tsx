import React from 'react';
import { InventoryList } from './InventoryList';
import { LowStockAlert } from './LowStockAlert';
import { InventoryStats } from './InventoryStats';

export const InventoryManager: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Inventory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InventoryStats />
        <LowStockAlert />
      </div>
      <InventoryList />
    </div>
  );
};