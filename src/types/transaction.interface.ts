export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
}

export interface TransactionFilter {
  startDate: string | null;
  endDate: string | null;
}

export interface TransactionPagination {
  currentPage: number;
  totalPages: number;
}
