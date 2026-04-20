import Cookies from 'js-cookie';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchAPI(endpoint: string, options?: RequestInit) {
  const token = Cookies.get('token');
  
  const headers: Record<string, string> = {
    ...((options?.headers as Record<string, string>) || {}),
  };

  // If body is FormData, do not set Content-Type, let browser set it with boundary
  if (!(options?.body instanceof FormData)) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  community: {
    getAll: () => fetchAPI('/community'),
    getById: (id: string) => fetchAPI(`/community/${id}`),
    create: (data: any) => fetchAPI('/community', { method: 'POST', body: JSON.stringify(data) }),
  },
  categories: {
    getAll: () => fetchAPI('/categories'),
    getBySlug: (slug: string) => fetchAPI(`/categories/${slug}`),
  },
  news: {
    getAll: () => fetchAPI('/news'),
    getById: (id: string) => fetchAPI(`/news/${id}`),
  },
  marketplace: {
    getAll: () => fetchAPI('/marketplace'),
    getById: (id: string) => fetchAPI(`/marketplace/${id}`),
  },
  experts: {
    getAll: () => fetchAPI('/experts'),
    getById: (id: string) => fetchAPI(`/experts/${id}`),
  },
  user: {
    getCurrent: () => fetchAPI('/user/me'),
  },
  auth: {
    register: (data: any) => fetchAPI('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
    login: (data: any) => fetchAPI('/auth/login', { method: 'POST', body: JSON.stringify(data) }),
    getProfile: () => fetchAPI('/auth/profile'),
    updateProfile: (data: FormData) => fetchAPI('/auth/profile', { method: 'PUT', body: data }),
  }
};
