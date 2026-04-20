'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Loader2 } from 'lucide-react';

const protectedRoutes = ['/dashboard', '/profile', '/create', '/my-posts'];
const publicOnlyRoutes = ['/login', '/register', '/forgot-password'];

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
    const isPublicOnlyRoute = publicOnlyRoutes.some(route => pathname.startsWith(route));

    if (isProtectedRoute && !isAuthenticated) {
      router.replace('/login');
    } else if (isPublicOnlyRoute && isAuthenticated) {
      router.replace('/dashboard');
    } else {
      setIsChecking(false);
    }
  }, [isAuthenticated, pathname, router]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <Loader2 className="h-8 w-8 animate-spin text-[#2563EB]" />
      </div>
    );
  }

  return <>{children}</>;
}
