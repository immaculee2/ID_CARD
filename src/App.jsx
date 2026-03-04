// src/App.jsx
import IdCard from "./IdCard";

function App() {
  const people = [
    {
      id: 22233,
      name: "Alice ",
      role: "Software Engineer",
      department: "Engineering",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 22244,
      name: "John ",
      role: "UI Designer",
      department: "Design",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 22255,
      name: "Maria ",
      role: "Project Manager",
      department: "Management",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <div className="">
      <h2 className="bg-slate-200 shadow-lg p-2 text-center text-black/50 ">ID CARD GENERATOR</h2>
    <div className=" flex flex-row justify-center py-40 space-x-10 ">
      {people.map((person) => (
        <IdCard 
          key={person.id}
          name={person.name}
          role={person.role}
          department={person.department}
          id={person.id}
          avatar={person.avatar}
        />
      ))}
    </div>
    </div>
  );
}

export default App;