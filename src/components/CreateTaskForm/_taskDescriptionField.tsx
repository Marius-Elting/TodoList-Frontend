import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";

const TaskDescriptionField: FC<ITextField> = ({
  onChange = (desc) => {
    console.log(desc);
  },
  disable = false,
}): ReactElement => {
  return (
    <TextField
      id="description"
      label="description"
      placeholder="Description"
      variant="outlined"
      size="small"
      name="title"
      rows={4}
      multiline
      fullWidth
      onChange={onChange}
      disabled={disable}
    />
  );
};

export default TaskDescriptionField;
