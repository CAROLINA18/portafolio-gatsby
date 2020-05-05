import React from "react";


export default () => (
    <form className="mt-16 text-center">
        <label for="contacto" className="block text-gray-700 text-sm font-bold mb-2">Cuéntame de esa idea que quieres hacer realidad:</label>
        <div className="flex shadow rounded bg-white border p-2">
            <textarea 
            id="contacto"
            name="contacto"
            className = "flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"></textarea>
        <button class="btn ml-4">Enviar</button>
        </div>
        
    </form>
);