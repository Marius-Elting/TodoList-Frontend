import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";

const TaskTitleField: FC<ITextField> = ({
  disable = false,
  reference,
}): ReactElement => {
  return (
    <TextField
      id="title"
      inputRef={reference}
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disable}
    />
  );
};

export default TaskTitleField;
