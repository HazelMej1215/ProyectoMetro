'use client';
import React, { useState } from 'react';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([
    { estado: 'Activo', fechaHora: '2025-07-24 14:30', tipo: 'Conductor', nombre: 'Juan Pérez', tren: '' },
    { estado: 'Inactivo', fechaHora: '2025-07-24 15:00', tipo: 'Supervisor', nombre: 'Ana López', tren: '' },
    { estado: 'Activo', fechaHora: '2025-07-24 16:00', tipo: 'Técnico', nombre: 'Carlos Díaz', tren: '' },
  ]);

  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState<number | null>(null);
  const [trenAsignado, setTrenAsignado] = useState('');

  const asignarTren = () => {
    if (empleadoSeleccionado === null || trenAsignado.trim() === '') return;

    const nuevosEmpleados = [...empleados];
    nuevosEmpleados[empleadoSeleccionado].tren = trenAsignado.trim();
    setEmpleados(nuevosEmpleados);
    setTrenAsignado('');
    setEmpleadoSeleccionado(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col items-center py-10 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Gestión de Empleados de Trenes</h1>

        {/* Tabla de empleados */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse rounded-lg shadow-inner bg-[#f9f9f9]">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="p-4 text-sm font-semibold">Estado</th>
                <th className="p-4 text-sm font-semibold">Fecha y Hora</th>
                <th className="p-4 text-sm font-semibold">Tipo</th>
                <th className="p-4 text-sm font-semibold">Nombre</th>
                <th className="p-4 text-sm font-semibold">Tren Asignado</th>
                <th className="p-4 text-sm font-semibold">Acción</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                  } hover:bg-blue-50 transition-all duration-300 ease-in-out`}
                >
                  <td className="p-4 text-gray-700">{empleado.estado}</td>
                  <td className="p-4 text-gray-700">{empleado.fechaHora}</td>
                  <td className="p-4 text-gray-700">{empleado.tipo}</td>
                  <td className="p-4 text-gray-700">{empleado.nombre}</td>
                  <td className="p-4 text-gray-700">
                    {empleado.tren ? `Tren ${empleado.tren}` : 'No asignado'}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => setEmpleadoSeleccionado(index)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-medium shadow"
                    >
                      Asignar Tren
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Módulo de asignación */}
        {empleadoSeleccionado !== null && (
          <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-lg mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Asignar tren a: <span className="text-blue-600">{empleados[empleadoSeleccionado].nombre}</span>
            </h2>
            <input
              type="text"
              placeholder="Número o código del tren"
              value={trenAsignado}
              onChange={(e) => setTrenAsignado(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 shadow-sm"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setEmpleadoSeleccionado(null);
                  setTrenAsignado('');
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg shadow"
              >
                Cancelar
              </button>
              <button
                onClick={asignarTren}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Empleados;
