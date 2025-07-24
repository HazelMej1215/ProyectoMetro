// pages/incidentes.tsx
import React from 'react';

const Incidentes = () => {
  const incidentes = [
    { id: '001', fecha: '2025-07-24 14:30', tipo: 'Fuga de gas', descripcion: 'Fuga detectada en el área norte del tren.', estado: 'Resuelto' },
    { id: '002', fecha: '2025-07-24 15:00', tipo: 'Freno defectuoso', descripcion: 'Freno del tren principal no responde.', estado: 'Pendiente' },
    { id: '003', fecha: '2025-07-24 16:15', tipo: 'Fuego', descripcion: 'Incendio en una de las unidades del tren.', estado: 'Resuelto' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-semibold text-blue-600 mb-8 animate__animated animate__fadeIn">
        Gestión de Incidentes
      </h1>
      <div className="w-full max-w-5xl p-4">
        <table className="min-w-full table-auto border-collapse rounded-lg shadow-lg bg-white">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4 text-xl font-semibold text-gray-700">ID</th>
              <th className="p-4 text-xl font-semibold text-gray-700">Fecha y Hora</th>
              <th className="p-4 text-xl font-semibold text-gray-700">Tipo</th>
              <th className="p-4 text-xl font-semibold text-gray-700">Descripción</th>
              <th className="p-4 text-xl font-semibold text-gray-700">Estado</th>
            </tr>
          </thead>
          <tbody>
            {incidentes.map((incidente) => (
              <tr
                key={incidente.id}
                className="hover:bg-blue-50 transition-colors duration-300 ease-in-out"
              >
                <td className="p-4 text-lg font-medium text-gray-700">{incidente.id}</td>
                <td className="p-4 text-lg font-medium text-gray-700">{incidente.fecha}</td>
                <td className="p-4 text-lg font-medium text-gray-700">{incidente.tipo}</td>
                <td className="p-4 text-lg font-medium text-gray-700">{incidente.descripcion}</td>
                <td className="p-4 text-lg font-medium text-gray-700">{incidente.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Incidentes;
