// src/pages/HomePage.jsx
import NavBar from "../components/NavBar";
import PlatformCard from "../components/PlatformCard";
import { href, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const platforms = [
    { name: "google pay", description: "create with Google Pay", logo:"src/assets/gpayIcon.webp" },
    { name: "PhonePay", description: "create with PhonePe", logo:"src/assets/phonepayIcon.webp" },
    { name: "Paytm", description: "create with Paytm", logo:"src/assets/paytmIcon.webp" },
    { name: "Amazon Pay", description: "create with Amazon Pay", logo:"src/assets/amazonePayIcon.webp" },
  ];

  return (
    <div>
      <NavBar />
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
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
