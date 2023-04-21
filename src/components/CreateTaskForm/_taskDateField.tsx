import React, { FC, ReactElement, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { IDateField } from "./interfaces/IDateField";

const TaskDateField: FC<IDateField> = ({
  onChange = (date) => console.log(date),
  value = new Date(),
  disable = false,
}): ReactElement => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        value={value}
        label="Task Date"
        format="dd/MM/yyyy"
        onChange={onChange}
        disabled={disable}
        // renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default TaskDateField;
