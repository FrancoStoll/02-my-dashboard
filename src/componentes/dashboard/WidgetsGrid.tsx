'use client'
import React from 'react'
import { SimpleWidget } from "./SimpleWidget"
import { useAppDispatch, useAppSelector } from "@/store"
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {

  const count = useAppSelector(state => state.counter.count);


  return (
    <div className="flex flex-wrap p-2 justify-center items-center">
      <SimpleWidget
        title={`${count}`}
        subTitle="Productos"
        label="Compras"
        icon={<IoCartOutline
          size={55}
          className="text-blue-500" />} 
        href="/dashboard/counter"

      />
      {/* <SimpleWidget /> */}
    </div>
  )
}
