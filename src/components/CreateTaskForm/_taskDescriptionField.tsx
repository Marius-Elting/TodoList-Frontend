import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";

const TaskDescriptionField: FC<ITextField> = ({
  disable = false,
  reference,
}): ReactElement => {
  return (
    <TextField
      inputRef={reference}
      id="description"
      label="description"
      placeholder="Description"
      variant="outlined"
      size="small"
      name="title"
      rows={4}
      multiline
      fullWidth
      disabled={disable}
    />
  );
};

export default TaskDescriptionField;
