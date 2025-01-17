import React, { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import { useLanguage } from "../../LanguageContext";
import './Navbar.css';

const Navbar = ({title}) => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState(''); // Estado para la sección activa

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['characteristics', 'software', 'benefits'];
      let currentSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection); // Actualiza la sección activa
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="industrial-navbar">
      <div className="navbar-top">
        <h1>{title}</h1>
        <Button>
        {t("scheduleDemo")}
          <img src="/00-Buttons, Dropdowns & Questions/event.svg" alt="demo" />
        </Button>
      </div>
      <div className="navbar-bottom">
        <button
          onClick={() => scrollToSection('characteristics')}
          className={activeSection === 'characteristics' ? 'active' : ''}
        >
          {t("characteristics")}
        </button>
        <button
          onClick={() => scrollToSection('software')}
          className={activeSection === 'software' ? 'active' : ''}
        >
         {t("software")}
        </button>
        <button
          onClick={() => scrollToSection('benefits')}
          className={activeSection === 'benefits' ? 'active' : ''}
        >
          {t("benefitsNavbar")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
