import { useState } from "react"
import {useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";


const TaskForm = (props) => {
    const {formCancel} = props
    const [status,setStatus] = useState("todo")
    const [title,setTitle] = useState('')
    const [description,setDesc] = useState('')
    const [priority,setPriority] = useState("LOW")
     const dispatch = useDispatch()

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onCancelForm = () => {
        formCancel()
    }

    const onChangeDescription = (e) => {
        setDesc(e.target.value)
    }

    const onSubmitForm = (e) => {
      e.preventDefault()
      if (title.trim() === "" || description.trim() === "") return;
    dispatch(addTask({status,title,description,priority}));
    setTitle("");
    setDesc("");
    }

    return (
        <form className="flex flex-col bg-white border-1 rounded-md items-center" onSubmit={onSubmitForm}>
        <div className="flex flex-col items-start">
         <label htmlFor="title">Title</label>
         <input required className="border-1 bg-gray-300 w-40 h-6" type="text" id="title" value={title} onChange={onChangeTitle} />
        </div>
        <div className="flex flex-col items-start">
         <label htmlFor="desc">Description</label>
         <input required className="border-1 bg-gray-300 w-40 h-6" type="text" id="desc" value={description} onChange={onChangeDescription} />
        </div>
        <select value={priority}  onChange={(e) => setPriority(e.target.value)} >
        <option value="low">LOW</option>
        <option value="medium">MEDIUM</option>
        <option value="high">HIGH</option>
      </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>
        <div className="flex flex-row m-2 items-center justify-between">
        <button className="bg-indigo-400 text-white p-1 rounded-md m-2" type="submit">Submit</button>
        <button onClick={onCancelForm} className="bg-indigo-400 text-white p-1 rounded-md">Cancel</button>
        </div>
        </form>
    )
}

export default TaskForm