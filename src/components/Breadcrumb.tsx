import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  readonly label: string;
  readonly href?: string;
}

interface BreadcrumbProps {
  readonly items: readonly BreadcrumbItem[];
  readonly className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const { t } = useTranslation();
  
  const fullItems: readonly BreadcrumbItem[] = [
    { label: t('breadcrumb.home'), href: '/' },
    ...items
  ];

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-1.5 text-xs mb-6 ${className}`}>
      {fullItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight size={14} className="text-gray-300" aria-hidden="true" />
          )}
          {item.href ? (
            <Link
              to={item.href}
              className="text-gray-500 hover:text-villa-olive transition-colors flex items-center gap-1 opacity-80 hover:opacity-100"
            >
              {index === 0 && <Home size={14} />}
              <span>{item.label}</span>
            </Link>
          ) : (
            <span className="text-gray-600 flex items-center gap-1 font-medium">
              {index === 0 && <Home size={14} />}
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
