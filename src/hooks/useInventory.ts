import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { InventoryItem } from '../types';

export const useInventory = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      const { data, error } = await supabase
        .from('inventory')
        .select(`
          *,
          products (name)
        `)
        .order('quantity', { ascending: true });

      if (error) {
        console.error('Error fetching inventory:', error);
        return;
      }

      setInventory(data.map(item => ({
        ...item,
        productName: item.products.name
      })));
      setIsLoading(false);
    };

    fetchInventory();
  }, []);

  return { inventory, isLoading };
};