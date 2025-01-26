import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface InventoryStats {
  totalItems: number;
  lowStockItems: number;
  recentRestocks: number;
}

export const useInventoryStats = () => {
  const [stats, setStats] = useState<InventoryStats>({
    totalItems: 0,
    lowStockItems: 0,
    recentRestocks: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      const { data, error } = await supabase
        .from('inventory')
        .select('quantity, low_stock_threshold');

      if (error) {
        console.error('Error fetching inventory stats:', error);
        return;
      }

      setStats({
        totalItems: data.reduce((sum, item) => sum + item.quantity, 0),
        lowStockItems: data.filter(item => item.quantity <= item.low_stock_threshold).length,
        recentRestocks: 0 // To be implemented with restock history
      });
    };

    fetchStats();
  }, []);

  return { stats };
};