import {
  Home,
  Calendar,
  Users,
  ClipboardList,
  Book,
  Clock,
  FileText,
  History,
  ChevronDown,
  Menu,
} from "lucide-react";

const menuItems = [
  { label: "Daskboard", icon: Home },
  { label: "Calendar", icon: Calendar },
  { label: "Teachers", icon: Users },
  { label: "All Students", icon: Users },
  { label: "Fyon Programs", icon: Book },
  { label: "Program Registration", icon: ClipboardList },
  { label: "Privart Qualifications", icon: Book },
  { label: "Group Qualifications", icon: Book },
  { label: "Availability", icon: Clock },
  { label: "Unavailable Times", icon: Clock },
  { label: "Students", icon: Users, hasSubmenu: true },
  { label: "Schedule", icon: Calendar, hasSubmenu: true },
  { label: "Tree Sassion", icon: FileText },
  { label: "Comments", icon: FileText },
  { label: "History", icon: History },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4 space-y-2">
      {/* Red header bar */}
      <div className="bg-red-700 text-white flex items-center justify-between px-4 py-3">
        <Menu className="h-5 w-5" />
        <h1 className="text-lg font-semibold">StactatoRP</h1>
        <Menu className="h-5 w-5" />
      </div>

      {menuItems.map(({ label, icon: Icon, hasSubmenu }) => (
        <div
          key={label}
          className="flex items-center justify-between hover:bg-gray-800 px-3 py-2 rounded cursor-pointer">
          <div className="flex items-center space-x-3">
            <Icon className="h-5 w-5" />
            <span className="text-sm">{label}</span>
          </div>
          {hasSubmenu && <ChevronDown className="h-4 w-4 text-gray-400" />}
        </div>
      ))}
    </aside>
  );
}
