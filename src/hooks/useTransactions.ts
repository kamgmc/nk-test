import { useEffect, useMemo } from "react";
import { fetchTransactions } from "@/services/transactions.ts";
import { toast } from "sonner";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  transactionsFilterState,
  transactionsPaginationState,
  transactionsState,
} from "@/stores/transactions.ts";

const TRANSACTIONS_PER_PAGE = 5;

export default function useTransactions() {
  const [transactions, setTransactions] = useRecoilState(transactionsState);
  const filters = useRecoilValue(transactionsFilterState);
  const [pagination, setPagination] = useRecoilState(
    transactionsPaginationState,
  );

  const filteredTransactions = useMemo(() => {
    if (!transactions.length) return [];

    const startDate = filters?.startDate
      ? new Date(filters.startDate).getTime()
      : null;
    const endDate = filters?.endDate
      ? new Date(filters.endDate).getTime()
      : null;

    const filtered = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date).getTime();

      if (startDate && transactionDate < startDate) {
        return false;
      }
      return !(endDate && transactionDate > endDate);
    });

    if (pagination) {
      const startIndex = (pagination.currentPage - 1) * TRANSACTIONS_PER_PAGE;
      const endIndex = startIndex + TRANSACTIONS_PER_PAGE;

      return filtered.slice(startIndex, endIndex);
    }
    return filtered;
  }, [transactions, filters, pagination]);

  const getTransactions = async () => {
    try {
      const response = await fetchTransactions();
      setTransactions(response);
      setPagination({
        currentPage: 1,
        totalPages: Math.ceil(response.length / TRANSACTIONS_PER_PAGE),
      });
    } catch (_error) {
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    if (!transactions.length) {
      getTransactions();
    }
  }, []);

  return {
    transactions: filteredTransactions,
  };
}
