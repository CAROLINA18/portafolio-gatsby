import React from "react";
import laravel from '../img/laravelicon.png';
import php from '../img/php.png';
import sql from '../img/sql.png';
import gat from '../img/gatsby.png';
import html from '../img/html.png';
import js from '../img/js.jpg';

export default () => (
<div className="max-w-4xl mx-auto mt-12 ">
    <header className="text-center">
    <h2 className="text-3xl ">Lenguajes de Programación y framework</h2>
    </header>
    <div className = "contenedor">
    <div className = "contenido"><img src={laravel} alt="laravel" ></img></div>
    <div className = "contenido"><img src={php} alt="php" ></img></div>
    <div className = "contenido"><img src={sql} alt="sql" ></img></div>
    </div>
    <div className = "contenedor">
    <div className = "contenido"><img src={gat} alt="gat" ></img></div>
    <div className = "contenido"><img src={html} alt="html" ></img></div>
    <div className = "contenido"><img src={js} alt="js" ></img></div>
    </div>
</div>
);