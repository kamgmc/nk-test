import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Transaction } from "@/types/transaction.interface.ts";
import TransactionTablePagination from "@/pages/transactions/components/TransactionTablePagination.tsx";

interface TransactionTableProps {
  transactions: Transaction[];
}

export default function TransactionTable({
  transactions,
}: TransactionTableProps) {
  return (
    <Table
      aria-label="Example static collection table"
      bottomContent={<TransactionTablePagination />}
    >
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Date</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Amount (USD)</TableColumn>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.id}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
