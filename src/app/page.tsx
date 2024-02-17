/** @format */
"use client";
import CreateTask from "@/components/Newtask";
import Navbar from "../components/Navbar";
import { Key, useEffect, useState } from "react";
import { child, get, ref, set } from "firebase/database";
import { db } from "@/Firebase";
import { Button } from "@nextui-org/react";
import Login from "@/components/Hello";
import HelloPage from "@/components/Hello";
export default function Home() {
  const [TaskList, setTaskList] = useState([]);
  const getTaskList = () => {
    get(child(ref(db), `tasks/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();

          setTaskList(data);
          console.log(TaskList);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center align-middle  dark text-foreground bg-background">
      <HelloPage />
    </div>
  );
}
