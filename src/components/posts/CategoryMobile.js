import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const CategoryMobile = ({ postCategorys }) => {
  const { query } = useRouter();
  return (
    <div className="flex md:hidden gap-x-4 overflow-auto pb-4">
      <Link
        href={`/blogs`}
        className={`block border border-gray-500 bg-white rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap text-sm ${
          !query.categorySlug
            ? "border-2 border-orange-500 text-orange-500 bg-orange-100 "
            : ""
        }}`}
      >
        همه مقالات
      </Link>
      {postCategorys.map((category) => {
        return (
          <Link
            key={category._id}
            href={`/blogs/${category.englishTitle}`}
            className={`block border border-gray-500 bg-white rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap text-sm ${
              query.categorySlug === category.englishTitle
                ? "border-2 border-orange-500 text-orange-500 bg-orange-100 "
                : ""
            }`}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};
