import React from "react";
import Form from './contact.form'; 
import ilustration from '../img/developer.png';

export default () => (
    <header className="bg-gray-300" >
        <div className="container mx-auto p-12 max-w-4xl">

            <div className="flex justify-center items-center">
                    <div className="flex-1">
                        <h1 className="font-bold text-red-400 text-6xl">Hola soy Ana Carolina</h1>
                        <p className="text-xl font-light">Desarrolladora de Software y DBA junior</p>
                    </div>
                <img src={ilustration} alt="Mujer programando" style={{height:"300px"}}></img>
            </div>
            <div>
                <Form></Form>
            </div>
        </div>
        
    </header>
)