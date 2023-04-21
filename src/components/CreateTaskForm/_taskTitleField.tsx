import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";

const TaskTitleField: FC<ITextField> = ({
  onChange = (text) => console.log(text),
  disable = false,
}): ReactElement => {
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disable}
      onChange={onChange}
    />
  );
};

export default TaskTitleField;
