import React from "react";
import { Button, Checkbox, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useStore } from "../store";
import { ToDo } from "../types";
interface Props {
    todo: ToDo;
}

const ToDoItem = ({ todo }: Props) => {
    const removeTodo = useStore((state) => state.removeTodo);
    const toggleChecked = useStore((state) => state.toggleChecked);

    return <div
        style={{ backgroundColor: "rgba(231, 231, 231, 0.8)",
            marginBottom: "1rem", borderRadius: "0.25rem",
            padding: "1rem", display: "flex",
            justifyContent: "space-between",
        }}
    >
        <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox checked={todo.checked} onClick={() => toggleChecked(todo.id)} />
            <Typography sx={{
                color: todo.checked ? "rgba(181, 181, 181, 0.8)" : "auto",
                textDecoration: todo.checked ? "line-through" : "none",
            }}>{todo.description}</Typography>
        </div>
        <Button onClick={() => removeTodo(todo.id)}>
            <DeleteIcon color="error"/>
        </Button>
    </div>;
};

export default ToDoItem;
