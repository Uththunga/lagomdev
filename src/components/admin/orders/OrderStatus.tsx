import React from 'react';
import { cn } from '../../../utils/cn';

interface OrderStatusProps {
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
}

export const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
  const styles = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <span className={cn(
      'px-2 py-1 text-xs font-medium rounded-full',
      styles[status]
    )}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};