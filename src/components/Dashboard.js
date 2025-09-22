import { useState } from "react";

import { useSelector,useDispatch } from "react-redux";

import { deleteTask } from "../features/task/taskSlice";

import { CiCalendar,CiSquarePlus} from "react-icons/ci";
import {TbMessageDots,TbPencil } from "react-icons/tb";
import {HiOutlineUsers  } from "react-icons/hi2";
import { GrTask } from "react-icons/gr";
import { IoSettingsOutline,IoLinkSharp,IoChevronDown} from "react-icons/io5";
import { IoIosBulb } from "react-icons/io";
import { LiaFileSolid } from "react-icons/lia";
import { PiDotsThreeBold } from "react-icons/pi";
import { VscFilter } from "react-icons/vsc";
import { TiEquals } from "react-icons/ti";
import { PiSquaresFourThin,PiCirclesFourThin } from "react-icons/pi";

import Navbar from "./Navbar";
import TaskForm from "./TaskForm";

const Dashboard = () => {
    const [isTodoformVisible,setFormVisible] = useState(false)
    const [filter,setFilter] = useState("LOW")
    const [isProgressForm,setIsProgress] = useState(false)
    const [doneForm,setDoneForm] = useState(false)
    const disPatch = useDispatch()
     const tasks = useSelector((state) => state.tasks) 
    const { todo, inProgress, done } = tasks;


    const filteredData = todo.filter(task => task.priority === filter)
    console.log(filteredData)

   const onAddTaskToDo = () => {
     setFormVisible(true)
   }

  const formCancel = () => {
    setFormVisible(false)
    setDoneForm(false)
    setIsProgress(false)
   }

   const onAddTaskProgress = () => {
     setIsProgress(true)
   }

   const onAddTaskDone = () => {
     setDoneForm(true)
   }

  const handleDelete = (status,id) => {
  disPatch(deleteTask({status,id}));
  
};
  
    
   const renderTasks = (tasks) => {

    return ( 
        <div>{
          tasks.length === 0 ? (
            <p>No Tasks Yet.</p>
          ): filteredData.length===0 ? (tasks.map(task => (
             <div key={task.id} className="m-1 text-wrap  flex flex-col items-start bg-white w-68 h-40 border-1 rounded-md">
            <div className="flex flex-row items-center justify-between p-1">
              <p className="text-yellow-200 text-base">{task.priority}</p>
              <button type="button" onClick={() => handleDelete("Todo",task.id)} className="bg-none border-0"><PiDotsThreeBold size={25} /></button>
            </div>
            <h1 className="text-xl font-semibold">{task.title}</h1>
            <p className="text-base text-gray-600">{task.description}</p>
            <div className="p-1 flex flex-row items-center justify-between">
            <img className="w-16" src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1758469776/Group_633_iamkrn.png" alt="group" />
            <p className="text-gray-400 p-2 text-base"><TbMessageDots size={25}/> 12 comments</p>
            <p className="text-gray-400 p-2 text-base"><LiaFileSolid size={25} />0 files</p>
            </div>
            </div>
          ))
        ) : (filteredData.map(task => (
             <div key={task.id} className="m-1 text-wrap  flex flex-col items-start bg-white w-68 h-40 border-1 rounded-md">
            <div className="flex flex-row items-center justify-between p-1">
              <p className="text-yellow-200 text-base">{task.priority}</p>
              <button type="button" onClick={() => handleDelete("Todo",task.id)} className="bg-none border-0"><PiDotsThreeBold size={25} /></button>
            </div>
            <h1 className="text-xl font-semibold">{task.title}</h1>
            <p className="text-base text-gray-600">{task.description}</p>
            <div className="p-1 flex flex-row items-center justify-between">
            <img className="w-16" src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1758469776/Group_633_iamkrn.png" alt="group" />
            <p className="text-gray-400 p-2 text-base"><TbMessageDots size={25}/> 12 comments</p>
            <p className="text-gray-400 p-2 text-base"><LiaFileSolid size={25} />0 files</p>
            </div>
            </div>
          ))
        )}
   </div>
  )
   }

    return (
        <div className="flex flex-col min-h-screen rounded-md" >
        <Navbar />
        <div className="flex flex-row">
         <section>
        <div className="flex flex-col min-w-1/5">
         <div className="flex flex-col m-2">
          <div className="flex flex-row items-center mx-2 mb-1">
            <PiSquaresFourThin size={30} className="text-gray-800 p-1 m-1"/>
            <p className="text-xl text-gray-800 p-1">Home</p>
          </div>
          <div className="flex flex-row items-center mx-2 mb-1">
            <TbMessageDots size={30} className="text-gray-800 p-1 m-1"/>
            <p className="text-xl text-gray-800 p-1">Messages</p>
          </div>
           <div className="flex flex-row items-center mx-2 mb-1">
            <GrTask size={25} className="border-2 border-slate-400 rounded-md text-gray-800 p-1 m-1"/>
            <p className="text-xl text-gray-800 p-1">Tasks</p>
          </div>
          <div className="flex flex-row items-center mx-2 mb-1">
            <HiOutlineUsers size={30} className="text-gray-800 p-1 m-1"/>
            <p className="text-xl text-gray-800 p-1">Members</p>
          </div>
          <div className="flex flex-row items-center mx-2 mb-1">
            <IoSettingsOutline size={30} className="text-gray-800 p-1 m-1"/>
            <p className="text-xl text-gray-800 p-1">Settings</p>
          </div>
         </div>
         <hr className="text-slate-300 m-2"/>
         <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
          <p className="text-base text-gray-500 font-semibold m-1">MY PROJECTS</p>
          <CiSquarePlus className="text-gray-400" size={25}/>
          </div>
          <div className="flex flex-row items-center m-2">
            <p className="w-2 h-2 bg-green-400 rounded-full"></p>
            <p className="font-semibold m-1.5">Mobile App</p>
            <PiDotsThreeBold className="left-10" size={25}/>
          </div>
           <div className="flex flex-row items-center m-2">
            <p className="w-2 h-2 bg-orange-400 rounded-full"></p>
            <p className="font-semibold m-1.5">Website Redesign</p>
          </div>
           <div className="flex flex-row items-center m-2">
            <p className="w-2 h-2 bg-violet-400 rounded-full"></p>
            <p className="font-semibold m-1.5">Design System</p>
          </div>
           <div className="flex flex-row items-center m-2">
            <p className="w-2 h-2 bg-blue-400 rounded-full"></p>
            <p className="font-semibold m-1.5">Wireframes</p>
          </div>
         </div>
         <div className="border-1 rounded-md bg-neutral-100 flex flex-col mt-5 m-3 p-1 items-center justify-center w-56">
            <IoIosBulb size={30} className="text-yellow-400" />
            <p className="font-semibold text-base">Thoughts Time</p>
            <p>We don't have any notice for you, till then you can share your thoughts with your peers.</p>
            <p className="bg-white font-semibold text-base border-1 p-1 m-1">Write a message</p>
         </div>
         </div>
         </section>
         <div className="flex flex-col m-2">
          <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-row items-center m-1 ">
            <h1 className="text-4xl font-semibold mx-1">Mobile App</h1>
            <TbPencil className="border-2 bg-violet-300 rounded-md mx-2" size={25} />
            <IoLinkSharp size={25}  className="border-2 bg-violet-300 rounded-md mx-2"/>
          </div>
          <div className="flex flex-row items-center mx-2">
          <p className="bg-violet-300 border-1 text-violet-900 rounded-md text-base m-1 p-0.5">+</p>
          <p className="text-voilet-700 text-xl mx-1">Invite</p>
          <img className="w-52 h-9" src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1758437402/Group_642_kobksi.png" alt="group"/>
          </div>
          </div>
          <div className="flex flex-row mt-2 justify-between">
          <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center border-2 border-gray-400  rounded-md m-2">
          <VscFilter size={25} className="text-gray-400 m-1" />
          <p className="text-gray-400 text-xl m-1">Filter</p>
           <select value={filter}  onChange={(e) => setFilter(e.target.value)} >
        <option value="low">LOW</option>
        <option value="medium">MEDIUM</option>
        <option value="high">HIGH</option>
      </select>
          <IoChevronDown  size={25} className="text-gray-400 m-1"/>
          </div>
            <div className="flex flex-row items-center border-2 border-gray-400 rounded-md m-2">
          <CiCalendar size={25} className="text-gray-400 m-1" />
          <p className="text-gray-400 text-xl m-1">Today</p>
          <IoChevronDown  size={25} className="text-gray-400 m-1"/>
          </div>
          </div>
          <div className="flex flex-row items-center">
             <div className="flex flex-row items-center border-2 border-gray-400 rounded-md m-2">
          <HiOutlineUsers size={25} className="text-gray-400 m-1" />
          <p className="text-gray-400 text-xl m-1">Share</p>
          <IoChevronDown  size={25} className="text-gray-400 m-1"/>
          </div>
         <hr className="w-8 text-gray-700 bg-gray-700 rotate-90"/>
          <TiEquals size={25} className="m-2 w-12 h-10 bg-indigo-600 p-1 border-1 rounded-md text-white" />
          <PiCirclesFourThin size={25} className="text-gray-600" />
          </div>
          </div>
          <div className="flex flex-row mt-8 justify-around"> 
    <div className="flex flex-col w-72 bg-stone-100 min-h-96 rounded-md m-2">
         <div className="flex flex-row items-center justify-between m-1">
          <div className="flex flex-row items-center">
            <p className="w-2 h-2 bg-violet-600 rounded-full m-1"></p>
            <p className="m-1 text-base">To Do</p>
            <p className="flex flex-row w-5 h-5 bg-gray-300 border-1 items-center rounded-full">{todo.length}</p>
           </div>
          <button onClick={onAddTaskToDo} className="bg-indigo-300 text-center w-5 h-5 border-1 text-base rounded-md">+</button>
          </div>
         <hr className="bg-violet-600 width-11 m-1 h-1" />
         <div>
        {isTodoformVisible && (
            <TaskForm formCancel={formCancel} />
        )}
         {renderTasks(todo)}
         </div>
        </div>
    <div className="flex flex-col w-72 m-2  bg-stone-100 min-h-96 rounded-md">
        <div className="flex flex-row items-center justify-between m-1">
          <div className="flex flex-row items-center">
            <p className="w-2 h-2 bg-amber-500 rounded-full m-1"></p>
            <p className="m-1 text-base">On Progress</p>
            <p className="flex flex-row w-5 h-5 bg-gray-300 border-1 items-center rounded-full">{inProgress.length}</p>
          </div>
          <button onClick={onAddTaskProgress} className="bg-indigo-300 text-center w-5 h-5 border-1 text-base rounded-md">+</button>
        </div>
         <hr className="bg-amber-500 width-11 m-1 h-1" />
           {isProgressForm && (
            <TaskForm formCancel={formCancel} />
        )}
         {renderTasks(inProgress)}
          </div>
          <div className="flex flex-col w-72 m-2  bg-stone-100 min-h-96 rounded-md">
    <div className="flex flex-row items-center justify-between m-1">
          <div className="flex flex-row items-center">
            <p className="w-2 h-2 bg-green-500 rounded-full m-1"></p>
            <p className="m-1 text-base">Done</p>
            <p className="flex flex-row w-5 h-5 bg-gray-300 border-1 items-center rounded-full">{done.length}</p>
          </div>
          <button onClick={onAddTaskDone} className="bg-indigo-300 text-center w-5 h-5 border-1 text-base rounded-md">+</button>
        </div>
         <hr className="bg-green-500 width-11 m-1 h-1" />
           {doneForm && (
            <TaskForm formCancel={formCancel} />
        )}
         {renderTasks(done)}
        </div>
         </div>
         </div>
        </div>
        </div>
    )
}

export default Dashboard