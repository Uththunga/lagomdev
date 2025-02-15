import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AdminSidebar } from '../AdminSidebar';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs: Breadcrumb[];
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  title,
  breadcrumbs,
}) => {
  return (
    <div className="flex min-h-screen bg-[#FFFAEC]">
      <AdminSidebar />
      <div className="flex-1">
      <div className="p-6">
      {/* Breadcrumbs */}
      <nav className="mb-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.label}>
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-[#3D3D3D]/40" />
              )}
              {crumb.href ? (
                <a
                  href={crumb.href}
                  className="text-[#3D3D3D]/60 hover:text-[#A76D6D]"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="text-[#3D3D3D]">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>

      {/* Title */}
      <h1 className="text-2xl font-bold text-[#3D3D3D] mb-6">{title}</h1>

      {/* Content */}
      {children}
    </div>
    </div>
  </div>
  );
};