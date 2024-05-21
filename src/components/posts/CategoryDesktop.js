import Link from "next/link";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
const CategoryDesktop = ({ postCategorys }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { query } = useRouter();
  return (
    <div className="bg-white rounded-3xl overflow-hidden sticky top-24">
      {/* Accordion Header */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-orange-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>دسته بندی مقالات</span>
        <ChevronDownIcon
          className={`w-6 h-6 stroke-orange-400 ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-all duration-200`}
        />
      </div>
      {/* Accordion Content */}
      <div
        className={`${
          isOpen ? "hidden" : "block"
        } child:block child:py-2 child:mb-1 child:pr-4 child-hover:bg-orange-50`}
      >
        <Link
          href="/blogs"
          className={`block pr-4 py-2 hover:bg-purple-50 mb-1 ${
            !query.categorySlug
              ? "bg-orange-400 text-white hover:text-gray-900 hover:bg-orange-500"
              : ""
          }`}
        >
          همه مقالات
        </Link>
        {postCategorys.map((category) => {
          return (
            <Link
              className={`block pr-4 py-2 hover:bg-orange-100 mb-1 ${
                query.categorySlug === category.englishTitle
                  ? "bg-orange-400 text-white hover:text-gray-900 hover:bg-orange-500 transition-colors "
                  : ""
              }`}
              key={category._id}
              href={`/blogs/${category.englishTitle}`}
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDesktop;
