import React, { useEffect, useState } from "react";
//import repos from "../data/repos";
import Repo from "./repo";

export default () => {
    const [repos,setRepos]=useState([]);
    const [reposCount,setReposCount]=useState([]);

    useEffect(()=>{
        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
        let myRepos=JSON.parse(data);
        setReposCount(myRepos.length);
        myRepos = myRepos.slice(1,3);
        return setRepos(myRepos);
    }
        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/CAROLINA18/repos");
            myRepos= await response.json();
            setReposCount(myRepos.length);
             sessionStorage.setItem("repos", JSON.stringify(myRepos));
             setRepos(myRepos);
          }

          fetchRepos();
    },[]);
    


    return(
<div className="max-w-4xl mx-auto mt-12">
    <header className="text-center">
    <h2 className="text-3xl ">Repositorios de Código</h2>
    <p>Código Fuente realizado en tiempo libre</p>
    </header>
    <ul className="repos-list">
        {
            repos.map((repo)=>{
            return <Repo repo={repo} key={repo.id} />


            } )
        }
    </ul>
    <div className = "mt-8 text-center">
        <a href="https://github.com/CAROLINA18" className="btn" target="_blank" rel="noopener noreferrer" >
        Ver mas en GitHub ({reposCount})
        </a>
    </div>
</div>
);
    };