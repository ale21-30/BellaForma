//VDM - Sheyna Tovar
import React from "react";

function ModuleDetail() {
    return (
        <div className="min-h-screen bg-pink-50 p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">

                <h1 className="text-3xl font-bold text-pink-700">
                    Detalle del Módulo
                </h1>

                <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                    Cuidado Facial Básico
                </h2>

                <p className="mt-4 text-gray-600">
                    Aprende los pasos principales para cuidar la piel del rostro,
                    identificar tu tipo de piel y aplicar una rutina diaria.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-pink-100 p-4 rounded-xl">
                        <h3 className="font-bold text-gray-700">Duración</h3>
                        <p>4 semanas</p>
                    </div>

                    <div className="bg-pink-100 p-4 rounded-xl">
                        <h3 className="font-bold text-gray-700">Nivel</h3>
                        <p>Básico</p>
                    </div>

                    <div className="bg-pink-100 p-4 rounded-xl">
                        <h3 className="font-bold text-gray-700">Estado</h3>
                        <p>Disponible</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold mt-6 text-gray-800">
                    Contenido del módulo
                </h3>

                <ul className="mt-3 space-y-2">
                    <li className="bg-gray-100 p-3 rounded-lg">1. Limpieza facial</li>
                    <li className="bg-gray-100 p-3 rounded-lg">2. Hidratación</li>
                    <li className="bg-gray-100 p-3 rounded-lg">3. Protección solar</li>
                    <li className="bg-gray-100 p-3 rounded-lg">4. Rutina diaria</li>
                </ul>

                <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold">
                    Iniciar módulo
                </button>

            </div>
        </div>
    );
}

export default ModuleDetail;