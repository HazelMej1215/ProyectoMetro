'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const trenes = [
  {
    id: 1,
    nombre: 'Tren Serie 9000',
    imagen: '/tren1.jpg',
    velocidad: 80,
    capacidad: 1200,
    linea: 'Línea 1',
    estacion: 'Pantitlán',
    tarjeta: '5248-XXXX',
    empleado: 'ID 1023',
  },
  {
    id: 2,
    nombre: 'Tren NM-16',
    imagen: '/tren2.jpg',
    velocidad: 75,
    capacidad: 1000,
    linea: 'Línea 12',
    estacion: 'Mixcoac',
    tarjeta: '8473-XXXX',
    empleado: 'ID 2031',
  },
  {
    id: 3,
    nombre: 'CAF 8000',
    imagen: '/tren3.jpg',
    velocidad: 70,
    capacidad: 1100,
    linea: 'Línea 7',
    estacion: 'El Rosario',
    tarjeta: '9821-XXXX',
    empleado: 'ID 1567',
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const tren = trenes[index];

  const handleNext = () => {
    setDirection('right');
    setIndex((prev) => (prev + 1) % trenes.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setIndex((prev) => (prev - 1 + trenes.length) % trenes.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8 relative flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Panel de Control de Trenes CDMX
        </h1>

        <div className="w-full flex items-center justify-center relative">
          {/* Botón izquierdo */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-orange-500 hover:bg-orange-600 text-white font-bold text-2xl px-4 py-2 rounded-full shadow transition-all"
          >
            ◀
          </button>

          {/* Imagen y datos animados */}
          <div className="w-[300px] h-[350px] relative flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={tren.id}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: direction === 'right' ? 100 : -100,
                }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: direction === 'right' ? -100 : 100,
                }}
                transition={{ duration: 0.4 }}
                className="absolute flex flex-col items-center"
              >
                <Image
                  src={tren.imagen}
                  alt={tren.nombre}
                  width={280}
                  height={80}
                  className="rounded-md shadow-md border border-gray-300"
                />
                <h2 className="mt-4 text-xl font-bold text-gray-800">{tren.nombre}</h2>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botón derecho */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-orange-500 hover:bg-orange-600 text-white font-bold text-2xl px-4 py-2 rounded-full shadow transition-all"
          >
            ▶
          </button>
        </div>

        {/* Ficha de atributos estilo Pokémon */}
        <div className="mt-8 w-full max-w-2xl bg-[#f9f9f9] rounded-xl p-6 shadow-inner border">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Estadísticas del Tren</h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Velocidad máxima</p>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 transition-all"
                  style={{ width: `${(tren.velocidad / 120) * 100}%` }}
                />
              </div>
              <p className="text-xs text-right text-gray-500 mt-1">{tren.velocidad} km/h</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Capacidad</p>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-400 transition-all"
                  style={{ width: `${(tren.capacidad / 1500) * 100}%` }}
                />
              </div>
              <p className="text-xs text-right text-gray-500 mt-1">{tren.capacidad} personas</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Línea asignada</p>
              <p className="text-md font-medium text-orange-600">{tren.linea}</p>
            </div>
          </div>
        </div>

        {/* Nueva sección con atributos únicos */}
        <div className="mt-6 w-full max-w-2xl bg-white rounded-xl p-6 shadow-inner border">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Información del Sistema</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-800 text-sm">
            <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-md shadow border">
              <span className="text-xl">🏙️</span>
              <span><strong>Estación:</strong> {tren.estacion}</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-md shadow border">
              <span className="text-xl">💳</span>
              <span><strong>Tarjeta:</strong> {tren.tarjeta}</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-md shadow border">
              <span className="text-xl">👷</span>
              <span><strong>Empleado:</strong> {tren.empleado}</span>
            </div>
          </div>
        </div>

        {/* Botones de acción adicionales */}
        <div className="mt-6 w-full max-w-2xl flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl shadow transition-all">
            📊 Historial de Usuarios
          </button>
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl shadow transition-all">
            🚨 Reportar Incidente
          </button>
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl shadow transition-all">
            📝 Historial de Incidentes
          </button>
        </div>
      </div>
    </div>
  );
}
