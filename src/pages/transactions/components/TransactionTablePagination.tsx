import { Pagination } from "@heroui/pagination";
import { useRecoilState } from "recoil";
import { transactionsPaginationState } from "@/stores/transactions.ts";

export default function TransactionTablePagination() {
  const [pagination, setPagination] = useRecoilState(
    transactionsPaginationState,
  );

  const setPage = (page: number) => {
    setPagination((prev) => (prev ? { ...prev, currentPage: page } : prev));
  };

  if (!pagination) {
    return null;
  }

  return (
    <div className="flex w-full justify-center">
      <Pagination
        isCompact
        showControls
        showShadow
        color="secondary"
        page={pagination?.currentPage}
        total={pagination?.totalPages}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
}
