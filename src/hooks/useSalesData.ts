import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface SalesDataPoint {
  date: string;
  amount: number;
}

export const useSalesData = () => {
  const [data, setData] = useState<SalesDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSalesData = async () => {
      const { data: orders, error } = await supabase
        .from('orders')
        .select('created_at, total')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching sales data:', error);
        return;
      }

      // Group by date and sum totals
      const groupedData = orders.reduce((acc: Record<string, number>, order) => {
        const date = new Date(order.created_at).toISOString().split('T')[0];
        acc[date] = (acc[date] || 0) + order.total;
        return acc;
      }, {});

      setData(Object.entries(groupedData).map(([date, amount]) => ({
        date,
        amount
      })));
      setIsLoading(false);
    };

    fetchSalesData();
  }, []);

  return { data, isLoading };
};