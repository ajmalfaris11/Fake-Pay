import { useState } from "react";
import NavBar from "../components/NavBar";
import InputForm from "../components/InputForm";
import { useParams, useNavigate } from "react-router-dom";
import { bankList } from "../data/bankList";

export default function InputPage() {
  const { platform } = useParams();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    receiverName: "Fashion Friday",
    senderName: "",
    receiverNumber: "+91 75589 69093",
    amount: "999",
    dateTime: "",
    bank: "",
    upiTransactionId: "",
    senderBank: "",
    receiverAccount: "Federal Bank",
    googleTransactionId: "",
  });



  function generateUpiId() {
    const firstDigit = '5';
    let remainingDigits = '';

    for (let i = 0; i < 11; i++) {
      remainingDigits += Math.floor(Math.random() * 10);
    }

    return `${firstDigit}${remainingDigits}`;
  }

  // randomly generate a transaction ID
  function generateTransactionId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
    const firstDigit = 'CICAgKj';
    let remainingDigits = '';

    for (let i = 0; i < 7; i++) {
      remainingDigits += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return `${firstDigit}${remainingDigits}`;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      upiTransactionId: generateUpiId(),
      googleTransactionId: generateTransactionId(),
    };

    setFormData(updatedFormData);
    navigate(`/success/${platform}`, { state: updatedFormData });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <NavBar />
      <h2 className="text-center text-2xl mt-4">
        Input Payment Details for {platform}
      </h2>
      <form onSubmit={handleSubmit} className="mx-auto mt-2 p-4 bg-white w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">


        <label>
          sender name
          <input
            type="text"
            name="senderName"
            value={formData.senderName}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </label>

        <label>
          Amount
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </label>


        <label>
          Date & Time
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </label>

        <div className="w-full mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Choose your bank:
          </label>
          <select
            name="senderBank"
            value={formData.senderBank}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900"
          >
            <option value="">-- Select Bank --</option>
            {bankList.map((bank) => (
              <option key={bank.id} value={bank.name}>
                {bank.name}
              </option>
            ))}
          </select>

        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-3 rounded w-full col-span-full"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
}
