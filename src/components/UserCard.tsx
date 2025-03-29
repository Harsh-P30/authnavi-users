
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { User } from "@/types/user";

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative pb-[75%] bg-gray-100">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="absolute h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-medium text-lg">{`${user.first_name} ${user.last_name}`}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button 
          variant="outline"
          size="sm"
          className="flex items-center text-blue-600 border-blue-200 hover:bg-blue-50"
          onClick={() => onEdit(user)}
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
        <Button 
          variant="outline"
          size="sm"
          className="flex items-center text-red-600 border-red-200 hover:bg-red-50"
          onClick={() => onDelete(user)}
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
