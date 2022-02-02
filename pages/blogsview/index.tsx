import type { NextPage } from "next";
import BlogViewWrap from "../../components/blogsview/BlogViewWrap";

interface Props {}

const BlogsViewPage: NextPage = (props: Props) => {
  return (
    <div>
      <BlogViewWrap />
    </div>
  );
};

export default BlogsViewPage;
