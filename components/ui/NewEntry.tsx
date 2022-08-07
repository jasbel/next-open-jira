import { Add, SaveOutlined } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <Box sx={{ mb: 2, p: 2 }}>
      {!isAdding ? (
        <Button startIcon={<Add />} fullWidth variant="outlined" onClick={() => setIsAdding(true)}>
          Agregar Tarea
        </Button>
      ) : (
        <>
          <TextField
            fullWidth
            sx={{ mt: 2, mb: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText="Ingrese una nueva entrada"
          />
          <Box display={"flex"} justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAdding(false)}>Cancelar</Button>
            <Button variant="outlined" color="secondary" endIcon={<SaveOutlined />}>
              Guardar
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
