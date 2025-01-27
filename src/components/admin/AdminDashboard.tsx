import React from 'react';
import { AdminSidebar } from './AdminSidebar';
import { ProductManager } from './products/ProductManager';
import { OrderManager } from './orders/OrderManager';
import { InventoryManager } from './inventory/InventoryManager';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const AdminDashboard: React.FC = () => {
  const { user, isAdmin } = useAuth();

  if (!user || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-[#FFFAEC]">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <ProductManager />
        <OrderManager />
        <InventoryManager />
      </div>
    </div>
  );
};