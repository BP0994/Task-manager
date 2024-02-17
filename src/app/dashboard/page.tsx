import React from 'react'
import Navbar from '@/components/Navbar'
import CreateTask from '@/components/Newtask'

const Dashboard = () => {
  return (
          <div className="h-screen  dark text-foreground bg-background">
          <Navbar></Navbar>
    
          <div className="h-full dark p-40">
            <CreateTask></CreateTask>
          </div>
        </div>
  )
}

export default Dashboard