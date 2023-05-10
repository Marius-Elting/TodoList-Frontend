import React, { FC, ReactElement } from "react";
import { ISelectField } from "./interfaces/ISelectField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const TaskSelectField: FC<ISelectField> = ({
  name = "selectBox",
  label = "Select Box",
  value = "",
  items = [{ value: "", label: "Add Items" }],
  disable = false,
  reference,
}): ReactElement => {
  return (
    <FormControl
      fullWidth
      size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        inputRef={reference}
        disabled={disable}
        id={`${name}-id`}
        labelId={`${name}-id-select`}
        // value={value}
        label={label}
        defaultValue={value}
        name={name}>
        {items.map((item, i) => {
          return (
            <MenuItem
              key={item.value + i}
              value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
        {/* <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  );
};

export default TaskSelectField;
