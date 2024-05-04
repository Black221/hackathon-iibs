import InputSearch from "./InputSearch";

export default function Header() {
  return (
    <>
      <div className="w-screen">
        <div className="max-w-5xl ">
          <div className="flex items-center justify-between px-2 py-5 bg-white">
            <div>
              <h1 className="text-xl font-bold">Accueil</h1>
            </div>
            <div>
              <InputSearch />
            </div>
            <div className="flex items-center justify-center gap-5">
              <span>John Doe</span>
              <img
                src="https://cnmi.spmi.pt/wp-content/uploads/2014/10/speaker-3.jpg"
                className="w-10 h-10 rounded-full bg-cover"
                alt="profile"
              />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
