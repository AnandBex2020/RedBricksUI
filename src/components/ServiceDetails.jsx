import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ServiceDetails({ service, onBook, onBack }) {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) {
      alert("Please enter your name and preferred date");
      return;
    }
    onBook({ service, name, date });
  };

  return (
    <div className="max-w-lg mx-auto">
      <button
        onClick={onBack}
        className={`mb-4 px-3 py-1 rounded ${
          theme === "dark"
            ? "bg-gray-700 text-white hover:bg-gray-600"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
      >
        &lt; Back to services
      </button>
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-3xl font-bold mb-2">{service.name}</h3>
      <p className="mb-1">
        <strong>Price:</strong> ${service.price}
      </p>
      <p className="mb-4">
        <strong>Duration:</strong> {service.duration}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none
              ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="date">
            Preferred Date
          </label>
          <input
            id="date"
            type="date"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none
              ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              }`}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded font-semibold
            ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
        >
          Book Now
        </button>
      </form>
    </div>
  );
}