import React from 'react';
import { useOrders } from '../../../hooks/useOrders';
import { OrderStatus } from './OrderStatus';
import { formatDate } from '../../../utils/formatDate';
import { formatCurrency } from '../../../utils/formatCurrency';

export const OrderList: React.FC = () => {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-[#F5ECD5] rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
          </tr>
        </thead>
        <tbody className="bg-[#F5ECD5] divide-y divide-[#3D3D3D]/20">
          {orders?.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
              <td className="px-6 py-4">{order.customerName}</td>
              <td className="px-6 py-4">{formatDate(order.createdAt)}</td>
              <td className="px-6 py-4">{formatCurrency(order.total)}</td>
              <td className="px-6 py-4">
                <OrderStatus status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};