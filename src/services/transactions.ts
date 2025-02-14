import { mockTransactions } from "@/mocks/transactions.ts";
import { Transaction } from "@/types/transaction.interface.ts";

const FETCH_TRANSACTIONS_DELAY = 1000;

export const fetchTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, FETCH_TRANSACTIONS_DELAY);
  });
};
