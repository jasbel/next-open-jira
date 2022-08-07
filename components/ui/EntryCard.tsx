import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { Entry } from "../../interfaces";

interface Props {
  entry: Entry;
}

export const EntryCard = ({ entry }: Props) => {
  return (
    <Card sx={{ mb: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}> {entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end", pr: 2 }}>
          {entry.status}
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
