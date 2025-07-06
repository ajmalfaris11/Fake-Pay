// src/components/PlatformCard.jsx
export default function PlatformCard({ platform, onClick }) {
  return (
    <div 
      className="border p-4 rounded shadow hover:bg-blue-50 cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold">{platform.name}</h2>
      <p>{platform.description}</p>
    </div>
  );
}
