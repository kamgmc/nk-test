import TransactionTable from "@/pages/components/TransactionTable.tsx";

export default function TransactionsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <TransactionTable />
    </div>
  );
}
