import React from 'react'

// eslint-disable-next-line
import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import { toast } from 'react-hot-toast'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../provider/Slices/TodoSlice'


export default function Todo() {
  const updatedTodos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch()

    
  const handleClick = (title, desc,disp=dispatch) => {

    const action = {
      title: title,
      description: desc,
    }
    disp(deleteTodo(action))
    toast.success('Successfully deleted')
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 flex justify-center ">TODO List  <FaRegEdit size={30} /></h1>
          </div>
          {updatedTodos.map(innerArray => (
            <div key={innerArray[0].title}>
              {innerArray.map(item => (
                <div className="flex flex-col justify-center items-center -m-2" key={innerArray[0].description}>
                  <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">{item.title}</h2>
                        <p className="text-gray-500">{item.description}</p>
                      </div>
                      <div onClick={() => handleClick(item.title, item.description)} >
                        <AiOutlineDelete size={30} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
