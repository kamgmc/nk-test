import { useEffect, useState } from "react";
import { fetchTransactions } from "@/services/transactions.ts";
import { Transaction } from "@/types/transaction.interface.ts";

export default function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getTransactions = async () => {
    try {
      const response = await fetchTransactions();
      setTransactions(response);
    } catch (error) {
      // TODO: Handle error
      alert(error);
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
