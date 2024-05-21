import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import PostInteraction from "./PostInteraction";
const PostList = ({ blogsData, className }) => {
  return blogsData.map((blog, index) => {
    return (
      <div
        key={index}
        className={`md:h-[360px] md:max-h-[${className}] md:min-h[500px] col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl overflow-hidden `}
      >
        {/* Cover Image */}
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <img
              src={blog.coverImage}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </Link>
        </div>
        {/* Blog Content */}
        <div className=" rounded-2xl p-2 bg-gray-50">
          <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
            <h2 className="mb-4 font-sans_bold h-16">{blog.title}</h2>
          </Link>
          {/* Blog Data */}
          <section>
            <div className="flex items-center justify-between font-sans_normal mb-4">
              <div className="flex items-center ">
                <img
                  className="w-6 h-6  rounded-full ring-2 ring-white ml-2"
                  src="/images/vue (1).gif"
                  alt=""
                />
                <span className="text-sm">عماد عربان</span>
              </div>
              <Link href={`/blogs/${blog.category.englishTitle}`}>
                <span className="text-xs px-2 py-1 rounded-xl bg-orange-100 text-orange-600 hover:text-orange-100 hover:bg-orange-600 transition-all duration-300 cursor-pointer">
                  {blog.category.title}
                </span>
              </Link>
            </div>
            <div className="flex items-center justify-between px-1.5 ">
              <PostInteraction post={blog} isSmall />
              {/* blog interaction */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[10px] text-gray-400 font-bold">
                  <ClockIcon className="w-4 h-4 stroke-gray-400 ml-1" />
                  <span className="ml-1">زمان مطالعه:</span>
                  <span className="ml-1 leading-3">{blog.readingTime}</span>
                  <span>دقیقه</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  });
};

export default PostList;
