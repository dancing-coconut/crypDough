import WritePage from "../../../components/writeblog/WritePage";
import { useSession } from "next-auth/react";

import type { NextPage } from "next";
const PostPage: NextPage = () => {
  const { data: session, status } = useSession();

  return <WritePage email={session?.user?.email} />;
};
export default PostPage;
