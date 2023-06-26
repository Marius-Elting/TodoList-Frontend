import React, { FC, ReactElement } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { IDateField } from "./interfaces/IDateField";
import { TextField } from "@mui/material";

const TaskDateField: FC<IDateField> = ({
  value = new Date(),
  disable = false,
  reference,
}): ReactElement => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        value={value}
        inputRef={reference}
        label="Task Date"
        format="MM/dd/yyyy"
        disabled={disable}
        // renderInput={(props) => <TextField {...props} />}
      />
    </LocalizationProvider>
  );
};

export default TaskDateField;
