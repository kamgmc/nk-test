import { useEffect, useMemo } from "react";
import { fetchTransactions } from "@/services/transactions.ts";
import { toast } from "sonner";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  transactionsFilterState,
  transactionsState,
} from "@/stores/transactions.ts";

export default function useTransactions() {
  const [transactions, setTransactions] = useRecoilState(transactionsState);
  const filters = useRecoilValue(transactionsFilterState);
  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date).getDate();
      const startDate = new Date(filters.startDate || "").getDate();
      const endDate = new Date(filters.endDate || "").getDate();

      if (startDate && transactionDate < startDate) {
        return false;
      }
      return !(endDate && transactionDate > endDate);
    });
  }, [transactions, filters]);

  const getTransactions = async () => {
    try {
      const response = await fetchTransactions();
      setTransactions(response);
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
