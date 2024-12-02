import React, { useState, useEffect } from "react";
import { useNavigate , Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './css/sidebar.css'
const Sidebari = () => {
    const [tela, setTela] = useState('Clientes');
    const [collapsed, setCollapsed] = useState(window.innerWidth < 640);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [toggled, setToggled] = useState(false);
    
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        setWindowWidth(windowWidth);
        setCollapsed(windowWidth < 640);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
 
    const navigate = useNavigate();
    
    

 


        return (
            <>
            <div className="border-b-2 h-16 py-1  flex w-full justify-between">
              <h1 className="text-2xl sm:text-4xl   mx-0 sm:mx-2 align-middle m-auto ">  {'[VD]'}</h1>
              <div className=" text-xl  my-auto align-middle  mr-2 flex ">
                <p onClick={() => (navigate('/'))} className="navText  text-sm sm:text-xl ">Sobre </p>
                <p onClick={() => (navigate('/projetos'))} className="navText  text-sm sm:text-xl mx-4 sm:mx-12">Projetos</p>
                <p onClick={() => (navigate('/contatos'))} className="navText  text-sm sm:text-xl" >Contatos</p>
              </div>
            </div>
            </>
        );
   
};

export default Sidebari;