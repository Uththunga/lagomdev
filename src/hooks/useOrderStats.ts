import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface OrderStats {
  totalSales: number;
  pendingOrders: number;
  processingOrders: number;
  completedOrders: number;
}

export const useOrderStats = () => {
  const [stats, setStats] = useState<OrderStats>({
    totalSales: 0,
    pendingOrders: 0,
    processingOrders: 0,
    completedOrders: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const { data: orders, error } = await supabase
        .from('orders')
        .select('total, status');

      if (error) {
        console.error('Error fetching order stats:', error);
        return;
      }

      const newStats = orders.reduce((acc, order) => ({
        totalSales: acc.totalSales + order.total,
        pendingOrders: acc.pendingOrders + (order.status === 'pending' ? 1 : 0),
        processingOrders: acc.processingOrders + (order.status === 'processing' ? 1 : 0),
        completedOrders: acc.completedOrders + (order.status === 'delivered' ? 1 : 0),
      }), {
        totalSales: 0,
        pendingOrders: 0,
        processingOrders: 0,
        completedOrders: 0
      });

      setStats(newStats);
      setIsLoading(false);
    };

    fetchStats();
  }, []);

  return { stats, isLoading };
};