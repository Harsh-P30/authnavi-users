
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/users" className="flex items-center space-x-2">
          <Users className="h-6 w-6 text-primary-blue" />
          <span className="text-xl font-semibold text-primary-darkBlue">EmployWise</span>
        </Link>
        <Button
          variant="ghost"
          onClick={logout}
          className="flex items-center text-gray-600 hover:text-primary-blue"
        >
          <LogOut className="h-5 w-5 mr-1" />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
