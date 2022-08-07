import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { EntryList, NewEntry } from "../components";
import { Layout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <Layout title="Home - Open Jira">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Pendientes" />
            <NewEntry />
            <CardContent>
              <EntryList status="pending" />
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="En Progreso" />
            <CardContent>
              <EntryList status="in-progress" />
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Completadas" />
            <CardContent>
              <EntryList status="finished" />
            </CardContent>

          </Card>
        </Grid>
      </Grid>
      <Typography>asdfasdflk</Typography>
    </Layout>
  );
};

export default Home;
