import PaginationComp from "@/common/Pagination";
import CategoryDesktop from "@/components/posts/CategoryDesktop";
import { CategoryMobile } from "@/components/posts/CategoryMobile";
import PostList from "@/components/posts/PostList";
import SortBar from "@/components/posts/SortBar";
import Layout from "@/containers/Layout";
import http from "@/services/httpService";
import queryString from "query-string";

export default function CategoryPage({ blogsData, postCategorys }) {
  return (
    <Layout>
      <div className="bg-gray-50">
        <section className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
          <CategoryMobile postCategorys={postCategorys} />
          <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen ">
            <div className="hidden md:block md:row-span-2 md:col-span-3">
              <CategoryDesktop postCategorys={postCategorys} />
            </div>

            <div className=" hidden md:block md:col-span-9">
              <SortBar />
            </div>
            <div className="md:col-span-9 grid grid-cols-6 gap-8">
              <PostList blogsData={blogsData.docs} className={"340px"} />
              <PaginationComp
                pag={blogsData.page}
                totalPages={blogsData.totalPages}
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const { data: resault } = await http.get(
    `/posts?${queryString.stringify(query)}`,
    {
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );
  const { data: postCategory } = await http.get("/post-category");
  const { data } = resault;
  return {
    props: {
      blogsData: data,
      postCategorys: postCategory.data,
    },
  };
}
