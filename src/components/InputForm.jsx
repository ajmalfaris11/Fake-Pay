// src/components/InputForm.jsx
export default function InputForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-8">
      <input 
        type="text"
        placeholder="Enter payment details"
        className="border p-2 rounded"
        required
      />
      <button 
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit Payment
      </button>
    </form>
  );
}
