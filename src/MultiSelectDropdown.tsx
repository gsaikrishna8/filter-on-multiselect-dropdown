import React from 'react'
import Select from 'react-select';
import type { MultiValue } from 'react-select';
interface MultiSelectDropdownProps {
  options: { value: string; label: string }[];
  onChange: (selectedValues: string[]) => void;
}
type Option = { value: string; label: string };

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps>=({options, onChange})=> {
    const [selectedOptions, setSelectedOptions] = React.useState<MultiValue<Option>>([]);
    const handleFilterChange = (selected: MultiValue<Option>) => {
        setSelectedOptions(selected);
        onChange(selected.map((option: Option) => option.value));
    }
  return (
    <Select
    isMulti
    options={options}
    value={selectedOptions}
    onChange={handleFilterChange}
    className="basic-multi-select"
    classNamePrefix="select"
    />
  )
}

export default MultiSelectDropdown