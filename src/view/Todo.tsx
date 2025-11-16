import { Button, ButtonGroup } from "@/style/button"
import { Field, FieldGroup, FieldLabel, Input, TodoOption, TodoSelect } from "@/style/field"
import { DialogContent, DialogHeader, InputGroupContainer, TableContainer, TodoContainerMain, TodoDialogContainer, TableHead, TableHeadRow, TableHeaderCell, TableBody, TableRow, TableCell, TableActionCell, StatusBadge } from "@/style/todo"
import { SuccessMessageFixed } from "@/style/message"
import type { TodoItem } from "@/types"
import { CircleX, Pen, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, editTodo, deleteTodo } from "@/reducer/todoReducer"
import type { RootState } from "@/store/store"

export const Todo: React.FC<NonNullable<unknown>> = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state: RootState) => state.todo.todos)
    const userId = useSelector((state: RootState) => state.auth.user)
    
    const selectData: string[] = ["Pending", "OnProgress", "Completed"]
    const [search, setSearch] = useState<string>("")
    const [success, setSuccess] = useState<string>("")
    const [todo, setTodo] = useState<TodoItem>({
        id: 0,
        userId: userId || "",
        title: "",
        status: "Pending",
        dueDate: ""
    })
    const [selected, setSelected] = useState<string>("All")
    const [isDailogOpen, setIsDailogOpen] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        if (!todo.title.trim()) return
        
        if (isEdit) {
            dispatch(editTodo({ ...todo, userId: userId || "" }))
            setSuccess("Task updated successfully!")
            setIsEdit(false)
        } else {
            dispatch(addTodo({ ...todo, userId: userId || "" }))
            setSuccess("Task added successfully!")
        }
        setIsDailogOpen(false)
        setTodo({
            id: 0,
            userId: userId || "",
            title: "",
            status: "Pending",
            dueDate: ""
        })
        setTimeout(() => setSuccess(""), 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setTodo((prevData: TodoItem) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleEdit = (item: TodoItem) => {
        setTodo(item)
        setIsEdit(true)
        setIsDailogOpen(true)
    }

    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id))
        setSuccess("Task deleted successfully!")
        setTimeout(() => setSuccess(""), 3000)
    }

    const handleOpenNew = () => {
        setTodo({
            id: 0,
            userId: userId || "",
            title: "",
            status: "Pending",
            dueDate: ""
        })
        setIsEdit(false)
        setIsDailogOpen(true)
    }

    const userTodos = todos.filter(t => t.userId === userId)
    const filteredData = userTodos.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(search.toLowerCase())
        const matchStatus = selected === "All" || item.status === selected
        return matchSearch && matchStatus
    })

    return (
        <>
            {success && <SuccessMessageFixed>{success}</SuccessMessageFixed>}
            {isDailogOpen && <TodoDialogContainer>
                <DialogHeader>
                    <h3>{isEdit ? "Edit Todo" : "Add Todo"}</h3>
                    <CircleX onClick={() => setIsDailogOpen(false)} color="#ff4d4d" />
                </DialogHeader>
                <DialogContent>
                    <form onSubmit={handleSave}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="title">Title</FieldLabel>
                                <Input
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={todo.title || ""}
                                    placeholder="Enter your todo title"
                                    onChange={handleChange}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="status">Status</FieldLabel>
                                <TodoSelect id="status" name="status" $varient="background" value={todo.status} onChange={(e) => handleChange(e)}>
                                    {selectData?.map((e: string) => <TodoOption key={e} value={e}>{e}</TodoOption>)}
                                </TodoSelect>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="dueDate">Due date</FieldLabel>
                                <Input
                                    id="dueDate"
                                    type="date"
                                    name="dueDate"
                                    value={todo.dueDate || ""}
                                    placeholder="select due date"
                                    onChange={handleChange}
                                />
                            </Field>
                        </FieldGroup>
                        <ButtonGroup>
                            <Button type="submit">Save Changes</Button>
                        </ButtonGroup>
                    </form>
                </DialogContent>
            </TodoDialogContainer>}
            <TodoContainerMain>
                <InputGroupContainer>
                    <Input
                        type="text"
                        name="search"
                        value={search}
                        placeholder="Search todo..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <TodoSelect name="todo" $varient="primary" value={selected} onChange={(e) => setSelected(e.target.value)}>
                        <TodoOption value="All">All</TodoOption>
                        {selectData?.map((e: string) => <TodoOption key={e} value={e}>{e}</TodoOption>)}
                    </TodoSelect>
                    <Button onClick={handleOpenNew}>Add <Plus /></Button>
                </InputGroupContainer>
                <TableContainer>
                    <TableHead>
                        <TableHeadRow>
                            <TableHeaderCell>Title</TableHeaderCell>
                            <TableHeaderCell>Status</TableHeaderCell>
                            <TableHeaderCell>Due Date</TableHeaderCell>
                            <TableHeaderCell>Actions</TableHeaderCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>
                                        <StatusBadge $status={item.status}>{item.status}</StatusBadge>
                                    </TableCell>
                                    <TableCell>{item.dueDate}</TableCell>
                                    <TableActionCell>
                                        <Button onClick={() => handleEdit(item)} style={{ backgroundColor: '#007bff', color: 'white' }}>
                                            <Pen size={16} />
                                        </Button>
                                        <Button onClick={() => handleDelete(item.id)} style={{ backgroundColor: '#ff4d4d', color: 'white' }}>
                                            <Trash2 size={16} />
                                        </Button>
                                    </TableActionCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} style={{ textAlign: 'center', padding: '30px' }}>
                                    No tasks found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </TableContainer>
            </TodoContainerMain>
        </>
    )
}