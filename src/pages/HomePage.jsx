// src/pages/HomePage.jsx
import NavBar from "../components/NavBar";
import PlatformCard from "../components/PlatformCard";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const platforms = [
    { name: "Platform 1", description: "Pay with Platform 1" },
    { name: "Platform 2", description: "Pay with Platform 2" },
  ];

  return (
    <div>
      <NavBar />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((platform, idx) => (
          <PlatformCard 
            key={idx}
            platform={platform}
            onClick={() => navigate(`/input/${platform.name.toLowerCase()}`)}
          />
        ))}
      </div>
    </div>
  );
}
