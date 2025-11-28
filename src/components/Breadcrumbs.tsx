import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) return null;

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
  ];

  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbItems.push({ label, path: currentPath });
  });

  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://fivsys.com${item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="py-4 bg-black/50 border-b border-fivsys-red/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              const isFirst = index === 0;

              return (
                <li key={item.path} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                  )}
                  {isLast ? (
                    <span className="text-fivsys-red font-medium flex items-center">
                      {isFirst && <Home className="w-4 h-4 mr-1" />}
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      {isFirst && <Home className="w-4 h-4 mr-1" />}
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
