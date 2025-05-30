import React, { useState } from "react";
import {Box,Button,TextField,List,ListItem,ListItemText,IconButton,Typography,Paper} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    setTodos((todos) => [
      ...todos,
      {
        text: input,
        id: Math.floor(Math.random() * 100000),
      },
    ]);
    setInput("");
  };

  const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <Box m={4} display="flex" justifyContent="center" alignItems="center">
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" mb={2} align="center">
          Todo List
        </Typography>

        <Box display="flex" gap={2} mb={2}>
          <TextField
            fullWidth
            label="New Todo"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Box>

        <List>
          {todos.map(({ text, id }) => (
            <ListItem
              key={id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(id)}>
                  <CloseIcon />
                </IconButton>
              }
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default TodoList;
