import { Box, Grid, Alert, LinearProgress } from "@mui/material";
import React, { FC, ReactElement, useEffect } from "react";
import { ITaskApi } from "./interfaces/ITaskApi";
import Task from "../Task/Task";
import TaskCounter from "../TaskCounter/TaskCounter";
import { format } from "date-fns";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Status } from "../CreateTaskForm/enums/Status";
import { IUpdateTask } from "./interfaces/IUpdateTask";
import _default from "@mui/material/styles/identifier";
import { countTasks } from "./helpers/countTasks";

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
      const data = getTaskMutation.mutate(undefined as void, {
        onSuccess: (res: any) => {
          // console.log(res);
        },
      });
    })();
  }, []);

  const updateTaskMutation = useMutation((data: IUpdateTask) =>
    sendApiRequest("http://localhost:7777/api/v1/tasks/put", "PUT", data)
  );

  const onStatusChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  };
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
          <TaskCounter
            status={Status.todo}
            count={data && countTasks(data, Status.todo)}
          />
          <TaskCounter
            status={Status.inProgress}
            count={data && countTasks(data, Status.inProgress)}
          />
          <TaskCounter
            status={Status.completed}
            count={data && countTasks(data, Status.completed)}
          />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}>
          {error ? (
            <>
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            </>
          ) : (
            ""
          )}
          {!error && Array.isArray(data) && data.length === 0 && (
            <>
              <Alert severity="warning">
                You dont have any tasks created yet
              </Alert>
            </>
          )}
          {isLoading ? (
            <LinearProgress />
          ) : (
            Array.isArray(data) &&
            data.length > 0 &&
            data
              ?.filter((a) => a.status !== Status.completed)
              ?.map((item, i) => (
                <Task
                  key={i}
                  id={item.id}
                  title={item.title}
                  date={new Date(item.date)}
                  description={item.description}
                  priority={item.priority}
                  status={item.status}
                  onStatusChange={onStatusChangeHandler}
                />
              ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default TaskArea;
