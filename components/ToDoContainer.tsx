import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import ToDoItem from "./ToDoItem";
import { useStore } from "../store";

export const ToDoContainer = () => {
    const todos = useStore((state) => state.todos);
    const addTodo = useStore((state) => state.addTodo);

    const handleAddToDo = (event: any) => {
        event.preventDefault();
        addTodo(event.target[0].value);
    }

    return <div
        style={{
            marginTop: "5rem",
            backgroundColor: "#FFF",
            maxHeight: "70vh",
            padding: "2rem",
            borderRadius: "1rem",
            minWidth: "40vw",
        }}
    >
        <Typography
            variant="h1"
            sx={{ fontSize: "3rem", fontWeight: 500,
                marginBottom: "1rem",
            }}
        >ToDos</Typography>

        <form style={{ display: "flex",
            alignItems: "center",
            marginBottom: "1rem"
        }}
        onSubmit={handleAddToDo}
        >
            <TextField
                id="outlined-basic"
                label="Add new..."
                variant="outlined"
                sx={{ marginRight: "1rem" }}
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ background: "linear-gradient(0.125turn, #e66465, #9198e5)", }}
            >Submit</Button>
        </form>

        {todos.map((todo) => {
            return <ToDoItem key={todo.id} todo={todo} />;
        })}
    </div>;
}
