import React from "react";
import Sidebari from "../components/sidebari";
import {  useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate()
    return(
      
          
           

        <div className="flex    flex-col h-full w-full text-center justify-center  ">
        <Sidebari/>
        <div class="fundo h-full flex ">
            <div className="border-2 border-black rounded-md m-auto h-full w-full sm:w-[50%]">
            <span class="selfie  w-full " id="selfie"> <img class="" id="selfie" src="../static/img/selfie.jpg" alt=""/></span>
                <span class="texto card ">
                            
                    
                    <p id="resume"> Meu nome é Victor Daniel, tenho 18 anos sou um jovem de São José dos Campos (SP) aficcionado por tecnologia, atualmente cursando Desenvolvimento 
                        de Software Multiplataforma e meu objetivo é buscar expandir minhas skills como desenvolvedor.
                    </p>
                    <span> 
                        <a target="_blank"  href="https://github.com/victordanielrb"><img  class="icon" src="../static/img/git.png" alt=""/></a>
                        <a  href="https://www.linkedin.com/in/victor-daniel-ramos-bessa-1436a3215/" cl><img class="icon" src="../static/img/linkedin.png" alt=""/></a>
                        <a target="_blank" href="mailto:victordanielramosb@gamil.com" ><img class="icon" src="../static/img/email.png" alt=""/></a>
                    </span>
            </span>   
            </div> 
               
        </div>
        </div>
       
    )
}