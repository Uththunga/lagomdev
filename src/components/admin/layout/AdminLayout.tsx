import React from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { Breadcrumb } from '../../ui/Breadcrumb';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs: Array<{ label: string; href?: string; }>;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  title,
  breadcrumbs
}) => {
  return (
    <div className="flex min-h-screen bg-[#FFFAEC]">
      <AdminSidebar />
      <div className="flex-1">
        <div className="p-8">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbs} />
            <h1 className="text-2xl font-bold mt-4">{title}</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};