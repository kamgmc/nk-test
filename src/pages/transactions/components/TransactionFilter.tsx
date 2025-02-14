import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useFormContext } from "react-hook-form";
import { TransactionFilterForm } from "@/pages/transactions/components/TransactionFilter.interface.ts";
import { useRecoilState } from "recoil";
import { transactionsFilterState } from "@/stores/transactions.ts";

export default function TransactionFilter() {
  const { handleSubmit, register } = useFormContext<TransactionFilterForm>();
  const [, setTransactionsFilters] = useRecoilState(transactionsFilterState);

  const onsubmit = (form: TransactionFilterForm) => {
    setTransactionsFilters(form);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onsubmit)}>
      <h2 className="font-bold pl-4">Filters</h2>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 px-4">
        <Input label="From" type="date" {...register("startDate")} />
        <Input label="To" type="date" {...register("endDate")} />
      </div>
      <Button type="submit">Apply</Button>
    </form>
  );
}
