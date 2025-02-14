import { useEffect, useState } from "react";
import { fetchTransactions } from "@/services/transactions.ts";
import { Transaction } from "@/types/transaction.interface.ts";
import { toast } from "sonner";

export default function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

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
    transactions,
  };
}
