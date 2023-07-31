import React from "react";
import { ucwords } from "../utils/strings";

type TextInputProps = React.HTMLProps<HTMLInputElement> & {
  labelclass: string;
};

export default function TextInput(props: TextInputProps) {
  const { className, onChange, ...otherProps } = props;
  return (
    <div className={className}>
      <label
        htmlFor={otherProps.id}
        className={`${otherProps.labelclass} block font-medium text-sm text-gray-700`}
      >
        {ucwords(otherProps.label)}
      </label>
      <input
        onChange={onChange}
        disabled={otherProps.disabled ?? false}
        placeholder={otherProps.placeholder ?? otherProps.label}
        className={`mt-1.5 border border-gray-300 text-gray-900 shadow sm:text-sm rounded-lg outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-700 block w-full p-2`}
        {...otherProps}
      />
    </div>
  );
}
