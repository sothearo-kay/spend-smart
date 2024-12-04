import { FC } from "react";
import UserAvatar from "@/components/user-avatar";
import SignOut from "../sign-out";

const Header: FC = () => {
  return (
    <header className="sticky top-0 bg-background">
      <div className="container flex items-center gap-6 py-4">
        <UserAvatar />
        <SignOut />
      </div>
    </header>
  );
};

export default Header;
