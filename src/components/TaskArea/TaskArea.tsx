import { Box, Grid } from "@mui/material";
import React, { FC, ReactElement, useEffect } from "react";
import { ITaskApi } from "./interfaces/ITaskApi";
import Task from "../Task/Task";
import TaskCounter from "../TaskCounter/TaskCounter";
import { format } from "date-fns";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery(["tasks"], async () => {
    return await sendApiRequest<ITaskApi[]>(
      "http://localhost:7777/api/v1/tasks/get",
      "GET"
    );
  });

  const getTaskMutation = useMutation(() =>
    sendApiRequest("http://localhost:7777/api/v1/tasks/get", "GET", {})
  );

  useEffect(() => {
    (async () => {
      const data = getTaskMutation.mutate(_, {
        onSuccess: (res: any) => {
          console.log(res);
        },
      });
      console.log(data);
    })();
  }, []);
  return (
    <Grid
      item
      md={8}
      px={4}>
      <Box
        mb={8}
        px={4}>
        <h2>Status Of Your Tasks As On {format(new Date(), "PPPP")}</h2>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}>
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default TaskArea;
