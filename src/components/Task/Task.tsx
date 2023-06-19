import React, { FC, ReactElement } from "react";

import { Box } from "@mui/material";
import { ITask } from "./interfaces/ITask";
import { Priority } from "../CreateTaskForm/enums/Priority";
import { Status } from "../CreateTaskForm/enums/Status";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { TaskHeader } from "./_taskHeader";
import { renderPriorityBorderColor } from "./helpers/RenderPriorityBorderColor";

const Task: FC<ITask> = ({
  title = "Test Title",
  date = new Date(),
  description = "Lorem ipsum dolor sit amet",
  priority = Priority.normal,
  status = Status.completed,
  onStatusChange = (e) => console.log(e),
  onClick = (e) => console.log(e),
  id,
}): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: renderPriorityBorderColor(priority),
      }}>
      <TaskHeader
        title={title}
        date={date}
      />
      <TaskDescription description={description} />
      <TaskFooter
        id={id}
        status={status}
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

export default Task;
