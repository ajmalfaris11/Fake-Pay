// src/components/NavBar.jsx
export default function NavBar() {
  return (
    <nav className="bg-[#1e40af] p-2 text-white text-center w-full flex justify-between items-center fixed top-0 z-50 px-4">
      <span class="material-symbols-outlined">
        sort
      </span>
      <img src="/src/assets/fakePayLogo.webp" alt="fake pay log" className="w-36 md:w-52 mx-auto" />

      <span className="material-symbols-outlined text-2xl md:text-3xl">
        face_6
      </span>
    </nav>
  );
}
