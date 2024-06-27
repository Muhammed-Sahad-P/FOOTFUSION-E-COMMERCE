import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <>
    {data.map((item, index) => (
        <div key={index} className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-500">{item.type}</p>
          <p className="text-xl text-gray-700 mt-2 mb-5">  ₹ {item.price}</p>
          <Link to="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gray-800 ">Add To cart</Link>
        </div>
      ))}
  </>
  )
}

export default Card