import React from "react";
import { parseAttributesForView } from "~/helpers/parseAttributesForView";
import styles from "./styles/styles.module.scss";

interface IProps {
  onChange: (value: string) => void;
  options: string[];
  label: string;
}

const Select = ({ onChange, options, label }: IProps) => {
  return (
    <div className={styles.selectWrapper}>
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
