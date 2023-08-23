import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { setTodos } from '../provider/Slices/TodoSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'


export default function Home() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const action = {
      title: title,
      description: description,
    }
    dispatch(setTodos([action]))
    toast.success('Task Added Successfully')    
    document.getElementById("Title").value=""
    document.getElementById("description").value = ""
  }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 flex justify-center text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add TODO <FaRegEdit size={30} />
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  id="Title"
                  name="title"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>

              </div>
              <div className="mt-2">
                <textarea
                  id='description'
                  type="textarea"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='  Description about the Task'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add
              </button>
            </div>
          </form>
          


        </div>
      </div>

    </div>
  )
}