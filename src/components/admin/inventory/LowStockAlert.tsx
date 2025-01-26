import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useInventory } from '../../../hooks/useInventory';

export const LowStockAlert: React.FC = () => {
  const { inventory } = useInventory();
  const lowStockItems = inventory?.filter(item => item.quantity <= item.lowStockThreshold) || [];

  if (lowStockItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <div className="flex items-center">
        <AlertTriangle className="h-5 w-5 text-yellow-400" />
        <h3 className="ml-2 text-sm font-medium text-yellow-800">
          Low Stock Alert
        </h3>
      </div>
      <div className="mt-2">
        <ul className="list-disc list-inside text-sm text-yellow-700">
          {lowStockItems.map((item) => (
            <li key={item.id}>
              {item.productName} - Only {item.quantity} left
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};