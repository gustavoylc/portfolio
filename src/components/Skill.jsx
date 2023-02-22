function Skill({ children, name }) {
  return (
    <div className="transition duration-300 ease-in-out hover:scale-110 flex flex-col justify-center justify-items-center items-center">
      {children}
      <p>{name}</p>
    </div>
  );
}

export default Skill;
