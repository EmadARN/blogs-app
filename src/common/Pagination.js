import routerPush from "@/utils/routerPush";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
const PaginationComp = ({ page, totalPages }) => {
  const router = useRouter();
  const pageHandler = (e, page) => {
    router.query.page = page;
    routerPush(router);
  };
  return (
    <div className="col-span-6 flex justify-center " dir="ltr">
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          sx={{
            "& .Mui-selected": {
              bgcolor: "orange !important",
            },
          }}
          onChange={pageHandler}
        />
      )}
    </div>
  );
};

export default PaginationComp;
