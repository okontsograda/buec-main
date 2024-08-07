'use client'
import { useState } from 'react'

const Expense = () => {
  const [image, setImage] = useState();

  const handleChange = (event) => {
    setImage(event.target.files[0])
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const image = new FormData();
    image.append("file", image);
    image.append("name", "img_01")

    const response = await fetch("/api/cloudImg", {
      method: "POST",
      body: image
    })
  }

  return (
    <div>
      <form>
        <div className="flex items-center justify-center h-48 flex-col gap-8">
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input type="file"
              onChange={handleChange}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </label>
          <button type='submit' onClick={handleSubmit} className='py-2 px-8 bg-blue-500 text-white rounded-full'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Expense