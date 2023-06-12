export interface FactsFromApi {
  current_page: number;
  data: FactFromApi[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: FactPageLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface FactPageLink {
  url: string;
  label: string;
  active: boolean;
}

export interface FactFromApi {
  fact: string;
  length: number;
}
