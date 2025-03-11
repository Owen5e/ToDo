import Todo from "./components/todo";
import Logo from "./assets/logoblack.png";

function App() {
  return (
    <>
      <div className="bg-linear-to-r from-[#1fa2ff] via-[#12d8fa] to-[#a6ffcb] min-h-screen grid px-2 pb-8 ">
        <div>
          <img className="w-10" src={Logo} alt="" />
        </div>
        <Todo />
      </div>
    </>
  );
}

export default App;
