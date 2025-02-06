import React from "react";
import { FaRegTimesCircle, FaAngleDown } from "react-icons/fa";
import { Option } from "../../types/dropdown.types";

interface DropdownToggleProps {
  selectedOptions: Option[];
  multiple: boolean;
  onClick: () => void;
  removeOption?: (option: Option) => void;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({
  selectedOptions,
  multiple,
  onClick,
  removeOption,
}) => (
  <div
    className="border-2 border-neutral-300 flex-grow rounded-md p-2 cursor-pointer flex items-center justify-between"
    onClick={onClick}
  >
    <div className="flex flex-wrap gap-1">
      {multiple && selectedOptions.length
        ? selectedOptions.map((opt) => (
            <span
              key={opt.value}
              className="bg-neutral-200 text-black text-sm px-2 py-1 gap-1 rounded-full flex items-center"
            >
              {opt.label}
              <FaRegTimesCircle
                className="ml-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (removeOption) {
                    removeOption(opt);
                  }
                }}
              />
            </span>
          ))
        : selectedOptions[0]?.label}
    </div>
    <span className="ml-auto">
      <FaAngleDown />
    </span>
  </div>
);

export default DropdownToggle;
