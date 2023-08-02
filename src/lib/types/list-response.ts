export type PaginatedLinks = {
  url: string | null;
  label: string;
  active: boolean;
};

export type PaginatedData<T> = {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginatedLinks[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

export type UserData = {
  row_number: number;
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  role: string;
  is_blocked: number;
  avatar: string;
  created_at: string;
  updated_at: string;
};
