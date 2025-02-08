import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { Option } from "../../types/dropdown.types";
import Label from "../../atoms/Label";
import DropdownToggle from "../../molecules/DropdownToggle";
import DropdownSearch from "../../molecules/DropdownSearch";

interface DropdownProps {
  label?: string;
  options: Option[];
  multiple?: boolean;
  searchable?: boolean;
  portal?: boolean;
  zIndex?: number;
  onChange?: (selected: Option | Option[] | null) => void;
  renderOption?: (option: Option, isSelected: boolean) => React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  multiple = false,
  searchable = true,
  portal = false,
  zIndex = 1050,
  onChange,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);

  useEffect(() => {
    if (dropdownRef.current) {
      const updatePositionAndWidth = () => {
        const rect = dropdownRef.current?.getBoundingClientRect();
        if (rect) {
          setDropdownWidth(rect.width);
          if (isOpen && portal) {
            const dropdownHeight = 240;
            let newTop = rect.bottom + window.scrollY;
            if (newTop + dropdownHeight > window.innerHeight) {
              newTop = rect.top + window.scrollY - dropdownHeight;
            }
            setPosition({ top: newTop, left: rect.left });
          }
        }
      };

      updatePositionAndWidth();
      window.addEventListener("resize", updatePositionAndWidth);
      return () => window.removeEventListener("resize", updatePositionAndWidth);
    }
  }, [isOpen, portal]);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelection = (option: Option) => {
    if (multiple) {
      setSelectedOptions((prev) => {
        const exists = prev.some((o) => o.value === option.value);
        const newSelection = exists
          ? prev.filter((o) => o.value !== option.value)
          : [...prev, option];
        onChange?.(newSelection);
        return newSelection;
      });
    } else {
      setSelectedOptions([option]);
      onChange?.(option);
      setIsOpen(false);
    }
  };

  const removeOption = (option: Option) => {
    setSelectedOptions((prev) => {
      const newSelection = prev.filter((o) => o.value !== option.value);
      onChange?.(newSelection.length ? newSelection : null);
      return newSelection;
    });
  };

  const renderDropdown = () => (
    <div
      className="absolute w-full mt-2 bg-white shadow-lg rounded-md overflow-hidden border-2 border-gray-300"
      style={
        portal
          ? {
              position: "fixed",
              top: `${position.top}px`,
              left: `${position.left}px`,
              width: `${dropdownWidth}px`,
              zIndex,
            }
          : { zIndex }
      }
    >
      {searchable && (
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
          <DropdownSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      )}
      <ul className="max-h-60 overflow-auto">
        {filteredOptions.map((option) => {
          const isSelected = selectedOptions.some(
            (o) => o.value === option.value
          );
          return (
            <li
              key={option.value}
              className={classNames(
                "px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center text-sm font-normal",
                { "bg-green-100": isSelected }
              )}
              onClick={() => toggleSelection(option)}
            >
              {renderOption ? renderOption(option, isSelected) : option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-row gap-2 items-center w-full">
      {label && <Label classNames="font-bold text-lg" text={label} />}
      <div className="relative items-center w-full ml-10" ref={dropdownRef}>
        <DropdownToggle
          selectedOptions={selectedOptions}
          multiple={multiple}
          onClick={() => setIsOpen(!isOpen)}
          removeOption={removeOption}
        />
        {isOpen &&
          (portal
            ? createPortal(renderDropdown(), document.body)
            : renderDropdown())}
      </div>
    </div>
  );
};

export default Dropdown;
