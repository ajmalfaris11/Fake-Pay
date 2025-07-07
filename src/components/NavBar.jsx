import logo from "../assets/fakePayLogo.webp";

export default function NavBar() {
  return (
    <nav className="bg-[#1e40af] p-2 text-white text-center w-full flex justify-between items-center fixed top-0 z-50 px-4">
      <span className="material-symbols-outlined">
        sort
      </span>

      <img src={logo} alt="Fake Pay Logo" className="w-36 md:w-52 mx-auto" />

      <span className="material-symbols-outlined text-2xl md:text-3xl">
        face_6
      </span>
    </nav>
  );
}
