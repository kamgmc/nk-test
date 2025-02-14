import TransactionsPageContent from "@/pages/transactions/TransactionsPageContent.tsx";
import { FormProvider, useForm } from "react-hook-form";
import { TransactionFilterForm } from "@/pages/transactions/components/TransactionFilter.interface.ts";

export default function TransactionsPage() {
  const methods = useForm<TransactionFilterForm>();

  return (
    <FormProvider {...methods}>
      <TransactionsPageContent />
    </FormProvider>
  );
}
