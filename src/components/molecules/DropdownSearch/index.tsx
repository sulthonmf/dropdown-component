import React from "react";
import { FiSearch } from "react-icons/fi";
import Icon from "../../atoms/Icon";
import { FaTimesCircle } from "react-icons/fa";
import Input from "../../atoms/Input";

interface DropdownSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const DropdownSearch: React.FC<DropdownSearchProps> = ({
  searchTerm,
  setSearchTerm,
}) => (
  <div className="p-2 flex items-center border-b">
    <Icon icon={<FiSearch className="text-gray-400 mx-2" size={24} />} />
    <Input
      type="text"
      className="w-full p-1 outline-none"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <Icon icon={<FaTimesCircle />} onClick={() => setSearchTerm("")} />
  </div>
);

export default DropdownSearch;
