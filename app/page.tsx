// app/page.tsx
'use client'; // Asegura que el componente se ejecute en el cliente

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDiscord } from 'react-icons/fa';
import CountUp from 'react-countup';
import Snowfall from 'react-snowfall';
import Image from 'next/image';

const Home = () => {
  const [members] = useState<number>(22468);
  const [staff] = useState<number>(50);
  const [messages] = useState<number>(1461747);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-back',
      once: true,
    });

    window.scrollTo(0, 0);

    const lightEffect = document.querySelector('.light-effect') as HTMLElement;

    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      if (lightEffect) {
        lightEffect.style.left = `${mouseX - lightEffect.offsetWidth / 2}px`;
        lightEffect.style.top = `${mouseY - lightEffect.offsetHeight / 2}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Metadatos del sitio */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Gatitos World 2 - Conéctate y juega" />
        <meta property="og:image" content="URL_DE_LA_IMAGEN_AQUI" />
        <meta property="og:site_name" content="Gatitos World 2" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <title>GW2</title>
      </head>

      <div className="bg-gray-900 text-white font-inter">
        {/* Efecto de Copos de Nieve */}
        <Snowfall />

        {/* Header Limpio y Moderno */}
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-4 shadow-lg flex justify-between items-center">
          {/* Logo Circular a la Izquierda */}
          <div className="flex items-center">
            <Image 
              src="/images/logo.png"
              alt="Logo"
              width={64} 
              height={64} 
              className="rounded-full border-4 border-white" 
            />
          </div>

          {/* Botón Únete Ahora a la Derecha */}
          <a 
            href="https://discord.gg/gatitos2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            style={{ zIndex: 999 }}
          >
            <span className="mr-3 text-xl">
              <FaDiscord />
            </span>
            <span className="text-lg">Únete Ahora</span>
          </a>
        </header>

        {/* Hero Section */}
        <section
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
            <div>
              <h1 className="text-6xl font-extrabold text-white mb-8" data-aos="fade-up">
                ¡Bienvenido a GW2!
              </h1>
              <p className="text-xl text-gray-300 mb-6" data-aos="fade-up" data-aos-delay="200">
                Conéctate con miles de personas, accede a contenido exclusivo y mejora tu experiencia.
              </p>
              <a
                href="https://discord.gg/gatitos2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:bg-gradient-to-l hover:from-blue-400 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                data-aos="fade-up" data-aos-delay="400"
              >
                Únete Ahora
              </a>
            </div>
          </div>
        </section>

        {/* Acerca de Nosotros */}
        <section id="about" className="py-20 bg-gray-800" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">¿Quiénes Somos?</h2>
            <p className="text-lg text-gray-400 mx-auto max-w-4xl">
              Bienvenido a Gatitos World 2 (GW2), un servidor de Discord donde la amistad, la diversión y el buen rollo se dan la mano. Somos una comunidad vibrante y acogedora compuesta por amantes de los gatos, entusiastas de los videojuegos, y personas que buscan un espacio cálido para relajarse, compartir y hacer nuevas amistades. Aquí, cada miembro es valorado y se fomenta la participación activa para construir un ambiente donde todos se sientan como en casa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <Image 
                src="/images/evento.png" 
                alt="Comunidad 1" 
                width={500} 
                height={500} 
                className="w-full h-56 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Eventos en Vivo</h3>
              <p className="text-gray-300">Participa en eventos en tiempo real, accede a transmisiones exclusivas y conoce a otros miembros en vivo.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <Image 
                src="/images/sorteo.png" 
                alt="Comunidad 2" 
                width={500} 
                height={500} 
                className="w-full h-56 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Contenidos Exclusivos</h3>
              <p className="text-gray-300">Accede a sorteos, experiencia y contenido que no encontrarás en ningún otro lugar. Solo para miembros.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <Image 
                src="/images/server.png" 
                alt="Comunidad 3" 
                width={500} 
                height={500} 
                className="w-full h-56 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Conexión Global</h3>
              <p className="text-gray-300">Conéctate con personas de todo el mundo, comparte conocimientos y haz amigos en todo el planeta.</p>
            </div>
          </div>
        </section>

        {/* Estadísticas del Servidor */}
        <section className="py-20 bg-gray-900 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-8">Estadísticas del Servidor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-4">Miembros</h3>
              <CountUp start={0} end={members} duration={2} className="text-4xl text-blue-500" />
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-4">Staff</h3>
              <CountUp start={0} end={staff} duration={2} className="text-4xl text-blue-500" />
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-4">Mensajes</h3>
              <CountUp start={0} end={messages} duration={2} className="text-4xl text-blue-500" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 py-6 text-center text-gray-400">
          <p>&copy; 2024 GW2. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
