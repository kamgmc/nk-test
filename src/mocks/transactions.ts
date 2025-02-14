import { Transaction } from "@/types/transaction.interface.ts";

export const mockTransactions: Transaction[] = [
  {
    id: "TXN001",
    date: "2025-02-14",
    description: "Grocery Store Purchase",
    amount: 45.67,
  },
  {
    id: "TXN002",
    date: "2025-02-13",
    description: "Online Subscription",
    amount: 9.99,
  },
  {
    id: "TXN003",
    date: "2025-02-12",
    description: "Coffee Shop",
    amount: 5.75,
  },
  {
    id: "TXN004",
    date: "2025-02-11",
    description: "Gas Station",
    amount: 30.25,
  },
];

