import useTransactions from "@/hooks/useTransactions";
import TransactionFilter from "@/pages/transactions/components/TransactionFilter.tsx";
import TransactionTable from "@/pages/transactions/components/TransactionTable.tsx";

export default function TransactionsPageContent() {
  const { transactions } = useTransactions();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Transactions</h1>

      <div className="mt-4 flex flex-col gap-6">
        <TransactionFilter />
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
}
