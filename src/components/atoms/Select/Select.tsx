import React from "react";
import { parseAttributesForView } from "~/helpers/parseAttributesForView";

interface IProps {
  onChange: (value: string) => void;
  options: string[];
  label: string;
}

const Select = ({ onChange, options, label }: IProps) => {
  return (
    <div>
      <label>{label}</label>
      <select
        onChange={(e) => {
          onChange(e.target.value as string);
        }}
      >
        {options?.map((type: string) => {
          return (
            <option value={type} key={type}>
              {parseAttributesForView(type)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
