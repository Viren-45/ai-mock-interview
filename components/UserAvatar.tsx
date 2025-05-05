'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { logout } from "@/lib/actions/auth.action";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  id: string;
}

interface UserAvatarProps {
  user: User;
}

const UserAvatar = ({ user }: UserAvatarProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/sign-in');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="h-12 w-12 border border-primary-100">
          <AvatarImage 
            src="/profile-avatar.png" 
            alt={user.name} 
          />
          <AvatarFallback>
            {user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem 
          className="cursor-pointer flex items-center gap-2 text-destructive"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
