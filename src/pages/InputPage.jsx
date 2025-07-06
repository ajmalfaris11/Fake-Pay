// src/pages/InputPage.jsx
import NavBar from "../components/NavBar";
import InputForm from "../components/InputForm";
import { useParams, useNavigate } from "react-router-dom";

export default function InputPage() {
  const { platform } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/success/${platform}`);
  };

  return (
    <div>
      <NavBar />
      <h2 className="text-center text-2xl mt-4">
        Input Payment Details for {platform}
      </h2>
      <InputForm onSubmit={handleSubmit} />
    </div>
  );
}
