// src/pages/HomePage.jsx
import NavBar from "../components/NavBar";
import PlatformCard from "../components/PlatformCard";
import { href, useNavigate } from "react-router-dom";
import {CarouselCustomNavigation} from "../components/Carousel";

export default function HomePage() {
  const navigate = useNavigate();

  const platforms = [
    { name: "google pay", description: "create with Google Pay", logo:"src/assets/gpayIcon.webp", platform: "gpay" },
    { name: "PhonePay", description: "create with PhonePe", logo:"src/assets/phonepayIcon.webp", platform: "phonepe" },
    { name: "Paytm", description: "create with Paytm", logo:"src/assets/paytmIcon.webp", platform: "paytm" },
    { name: "Amazon Pay", description: "create with Amazon Pay", logo:"src/assets/amazonePayIcon.webp", platform: "amazonpay" },
  ];

  return (
    <div>
      <NavBar />
      <div className="p-2">
        <CarouselCustomNavigation/>
      </div>
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-20">
        {platforms.map((platform, idx) => (
          <PlatformCard 
            key={idx}
            platform={platform}
            onClick={() => navigate(`/input/${platform.platform.toLowerCase()}`)}
          />
        ))}
      </div>
    </div>
  );
}
