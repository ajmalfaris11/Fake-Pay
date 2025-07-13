// src/pages/HomePage.jsx
import NavBar from "../components/NavBar";
import PlatformCard from "../components/PlatformCard";
import { useNavigate } from "react-router-dom";
import { CarouselCustomNavigation } from "../components/Carousel";

// ✅ Import icons from src/assets
import gpayIcon from "../assets/gpayIcon.webp";
import phonepayIcon from "../assets/phonepayIcon.webp";
import paytmIcon from "../assets/paytmIcon.webp";
import amazonPayIcon from "../assets/amazonePayIcon.webp";

export default function HomePage() {
  const navigate = useNavigate();

  const platforms = [
    {
      name: "Google Pay",
      description: "Create with Google Pay",
      logo: gpayIcon,
      platform: "gpay",
    },
    {
      name: "PhonePe",
      description: "Create with PhonePe",
      logo: phonepayIcon,
      platform: "phonepe",
    },
    {
      name: "Paytm",
      description: "Create with Paytm",
      logo: paytmIcon,
      platform: "paytm",
    },
    {
      name: "Amazon Pay",
      description: "Create with Amazon Pay",
      logo: amazonPayIcon,
      platform: "amazonpay",
    }
  ];

  return (
    <div className="dark:bg-black pt-4">
      <NavBar />
      <div className="p-2">
        <CarouselCustomNavigation />
      </div>
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-20">
        {platforms.map((platform, idx) => (
          <PlatformCard
            key={idx}
            platform={platform}
            onClick={() => navigate(`/${platform.platform.toLowerCase()}/option`)}
          />
        ))}
      </div>
    </div>
  );
}
