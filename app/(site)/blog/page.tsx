import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import Blog from "@/components/Blog";
import Presentation from "@/components/Presentation";

export const metadata: Metadata = {
  title: "Blog Single Family Services",
  description: "Blog page for Single Family Services",
};

const BlogPage = async () => {
  return (
    <>
      <section className="py-10 lg:py-15 xl:py-20">
        <Blog />
        <Presentation />
      </section>
    </>
  );
};

export default BlogPage;
