import { List, Paper } from "@mui/material";
import React, { FC, useContext, useMemo } from "react";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../state/entries";
import { EntryCard } from "./EntryCard";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status), [entries]);
  return (
    <div>
      <Paper sx={{ height: "calc(100vh -250px)", overflow: "scroll", backgroundColor: "transparent", p: "1px 5px" }}>
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
