import useTransactions from "@/hooks/useTransactions";
import TransactionTable from "@/pages/components/TransactionTable.tsx";

export default function TransactionsPage() {
  const { transactions } = useTransactions();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <div className="mt-4">
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
}
