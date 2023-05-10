import React, { FC, ReactElement, useRef } from "react";
import {
  Box,
  Stack,
  Typography,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import TaskTitleField from "./_taskTitleField";
import TaskDescriptionField from "./_taskDescriptionField";
import TaskDateField from "./_taskDateField";
import TaskSelectField from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ICreateTask } from "../TaskArea/interfaces/ICreateTask";

const CreateTaskForm: FC = (): ReactElement => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);

  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendApiRequest("http://localhost:7777/api/v1/tasks/post", "POST", data)
  );

  const createTaskHandler = () => {
    if (
      !titleRef.current?.value ||
      !descriptionRef.current?.value ||
      !dateRef.current?.value ||
      !statusRef.current?.value ||
      !priorityRef.current?.value
    ) {
      return;
      console.log("ERRIR");
    }

    const data: ICreateTask = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value.toString(),
      status: statusRef.current.value,
      priority: priorityRef.current.value,
    };

    createTaskMutation.mutate(data);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}>
      {createTaskMutation.isSuccess && (
        <Alert
          severity="success"
          sx={{ width: "100%", marginBottom: "16px" }}>
          <AlertTitle>Success</AlertTitle>
          The Task has been created successfully
        </Alert>
      )}

      <Typography
        mb={2}
        component="h2"
        variant="h6">
        Create a Task
      </Typography>
      <Stack
        sx={{ width: "100%" }}
        spacing={2}>
        <TaskTitleField
          disable={createTaskMutation.isLoading}
          reference={titleRef}
        />
        <TaskDescriptionField
          disable={createTaskMutation.isLoading}
          reference={descriptionRef}
        />
        <TaskDateField
          disable={createTaskMutation.isLoading}
          reference={dateRef}
        />
        <Stack
          spacing={2}
          direction={"row"}>
          <TaskSelectField
            disable={createTaskMutation.isLoading}
            reference={statusRef}
            label="Status"
            name="status"
            value={Status.todo}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            disable={createTaskMutation.isLoading}
            reference={priorityRef}
            label="Priority"
            name="priority"
            value={Priority.normal}
            items={[
              {
                value: Priority.high,
                label: Priority.high.toUpperCase(),
              },
              {
                value: Priority.normal,
                label: Priority.normal.toUpperCase(),
              },
              {
                value: Priority.low,
                label: Priority.low.toUpperCase(),
              },
            ]}
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress />}
        <Button
          onClick={createTaskHandler}
          variant="contained"
          disabled={createTaskMutation.isLoading}
          size="large"
          fullWidth>
          Create a Task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
