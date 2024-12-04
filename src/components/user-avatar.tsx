import { FC } from "react";
import { auth } from "@/auth";
import Avatar from "./ui/avatar";

const UserAvatar: FC = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <Avatar
      src={session.user.image!}
      alt={session.user.name!}
      width={40}
      height={40}
    />
  );
};

export default UserAvatar;
