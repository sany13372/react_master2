import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { UserRole, getUserAuthData, getUserRole } from '@/entities/User';
import { getRouteFrobidden, getRouteMain } from '@/shared/config/AppRoutes/AppRoutes';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  const userRoles = useSelector(getUserRole);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteFrobidden()} state={{ from: location }} replace />;
  }

  return children;
}
