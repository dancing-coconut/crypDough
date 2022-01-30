import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import ProfileWrap from "../../components/profile/ProfileWrap";

interface Props {}

const ProfilePage: NextPage = (props: Props) => {
  const { data: session, status } = useSession();

  return <div>
    <ProfileWrap email={session?.user?.email}/>
  </div>;
};

export default ProfilePage;
