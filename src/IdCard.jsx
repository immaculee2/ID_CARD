// src/IdCard.jsx
function IdCard({ name, role, department, id, avatar }) {
  return (
    <div className="text-center justify-center text-center">
    <div className="bg-white shadow-lg rounded-lg w-full p-4 flex flex-row space-x-4 ">
      <div className="">
      <img
        src={avatar}
        
        className="w-16 h-20 rounded-full mb-4 object-cover"
      /></div>
      <div className="text-start">
      <p className="text-xl font-bold mb-1">Name:{name}</p>
      <p className="text-gray-700">{role}</p>
      <p className="text-gray-500 mb-2">depart:{department}</p>
      <p className="text-sm text-gray-400">id_number: {id}</p>
      </div>
    </div>
    </div>
  );
}

export default IdCard;