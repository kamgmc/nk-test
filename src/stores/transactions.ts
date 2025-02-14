import { atom } from "recoil";
import {
  Transaction,
  TransactionFilter,
  TransactionPagination,
} from "@/types/transaction.interface.ts";

export const transactionsState = atom<Transaction[]>({
  key: "transactionsState",
  default: [],
});

export const transactionsFilterState = atom<TransactionFilter>({
  key: "transactionsFilterState",
  default: { startDate: null, endDate: null },
});

export const transactionsPaginationState = atom<TransactionPagination | null>({
  key: "transactionsPaginationState",
  default: null,
});
