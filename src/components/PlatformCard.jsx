// src/components/PlatformCard.jsx
export default function PlatformCard({ platform, onClick }) {
  return (
    <div 
      className="border p-4 rounded shadow hover:bg-blue-100 cursor-pointer rounded-xl transition-colors duration-500 hover:scale-105 transition-transform duration-500"
      onClick={onClick}
    >
      <img src={platform.logo} alt={`${platform.name} logo`} className="mb-2 rounded-xl" />
      <h2 className="text-lg font-semibold">{platform.name}</h2>
      <p className="text-sm text-gray-600">{platform.description}</p>
    </div>
  );
}
