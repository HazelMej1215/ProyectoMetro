"use client";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <header className="w-full max-w-4xl py-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Bienvenido al Portal</h1>
        <p className="text-gray-300">Sistema rápido y responsive con Next.js + Tailwind</p>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition">
          Opción 1
        </button>
        <button className="bg-green-600 hover:bg-green-700 py-3 rounded-lg transition">
          Opción 2
        </button>
        <button className="bg-yellow-600 hover:bg-yellow-700 py-3 rounded-lg transition">
          Opción 3
        </button>
        <button className="bg-red-600 hover:bg-red-700 py-3 rounded-lg transition">
          Opción 4
        </button>
      </main>

      <footer className="mt-12 text-gray-400 text-sm">
        © 2025 Interfaz Rápida - Tailwind + Next.js
      </footer>
    </div>
  );
}
