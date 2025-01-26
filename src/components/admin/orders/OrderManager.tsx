import React from 'react';
import { OrderList } from './OrderList';
import { OrderStats } from './OrderStats';

export const OrderManager: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Orders</h2>
      <OrderStats />
      <OrderList />
    </div>
  );
};