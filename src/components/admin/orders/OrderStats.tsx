import React from 'react';
import { useOrderStats } from '../../../hooks/useOrderStats';
import { formatCurrency } from '../../../utils/formatCurrency';
import { TrendingUp, Package, Clock, CheckCircle } from 'lucide-react';

export const OrderStats: React.FC = () => {
  const { stats, isLoading } = useOrderStats();

  if (isLoading) return <div>Loading...</div>;

  const cards = [
    { title: 'Total Sales', value: formatCurrency(stats.totalSales), icon: TrendingUp },
    { title: 'Pending Orders', value: stats.pendingOrders, icon: Clock },
    { title: 'Processing', value: stats.processingOrders, icon: Package },
    { title: 'Completed', value: stats.completedOrders, icon: CheckCircle },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-[#F5ECD5] p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-[#3D3D3D]/70">{card.title}</p>
                <p className="text-2xl font-bold mt-1">{card.value}</p>
              </div>
              <card.icon className="w-8 h-8 text-[#A76D6D]/70" />
          </div>
        </div>
      ))}
    </div>
  );
};