export interface Option {
  label: string;
  value: string | number;
}

export interface DropdownProps {
  options: Option[];
  multiple?: boolean;
  searchable?: boolean;
  onChange: (selected: Option | Option[] | null) => void;
  placeholder?: string;
  isPortal?: boolean;
  customRenderOption?: (option: Option, isSelected: boolean) => React.ReactNode;
}
