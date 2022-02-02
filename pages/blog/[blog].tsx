import { useRouter } from "next/router";
import Blog from "../../components/blog/Blog";
import type { NextPage } from "next";

const FullBlogPage: NextPage = () => {
  const router = useRouter();

  return <Blog blogid={router.query.blog}/>;
};
export default FullBlogPage;
