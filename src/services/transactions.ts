import { mockTransactions } from "@/mocks/transactions.ts";

const FETCH_TRANSACTIONS_DELAY = 1000;

export const fetchTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, FETCH_TRANSACTIONS_DELAY);
  });
};
