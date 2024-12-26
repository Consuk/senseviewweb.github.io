import React, { useState, useEffect } from "react";
import Dropdown from "./DropDown";
import NavbarToggle from "./NavBarToggle";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../../LanguageContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { t } = useLanguage();  // Traslate

  const solutionItems = [
    { label: t("services"), icon: "/01-NavBar/senseview_isotype.png" },
    { label: t("industrialVariables"), icon: "/01-NavBar/troubleshoot.png", isIndented: true },
    { label: t("productionMetrics"), icon: "/01-NavBar/leaderboard.png", isIndented: true },
    { label: t("howItWorks"), icon: "/01-NavBar/emoji_objects.png" },
    { label: t("devices"), icon: "/01-NavBar/memory.png" },
    { label: t("dataMetrics"), icon: "/01-NavBar/dashboard_customize.png" },
  ];

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth <= 768;
      setIsMobile(isCurrentlyMobile);

      if (!isCurrentlyMobile) {
        setIsMenuOpen(false);
        setIsSolutionsDropdownOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSolutionsDropdown = () =>
    setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
  const toggleLanguageDropdown = () =>
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsSolutionsDropdownOpen(false);
  };


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src="/01-NavBar/Original.svg" alt="Sense View Logo" /></Link>
      </div>
      <div className={`navbar-links ${isMenuOpen || !isMobile ? "open" : ""}`}>
        <ul className="navbar-menu">
          <li>
            <Dropdown
              isOpen={isSolutionsDropdownOpen}
              toggleDropdown={toggleSolutionsDropdown}
              label={t("solutions")}
              items={solutionItems}
              isMenuOpen={isMenuOpen}
            />
          </li>
          <li className="bold-on-hover"><Link to="/pricing">{t("pricing")}</Link></li>
          <li className="bold-on-hover"> <Link to="/faq">{t("faq")}</Link></li>
          <li className="bold-on-hover"><Link to="/contact">{t("contact")}</Link></li>
          <li className="bold-on-hover"> <Link to="/about">{t("aboutUs")}</Link></li>
        </ul>
      </div>
      <LanguageSelector
      
        isOpen={isLanguageDropdownOpen}
        toggleLanguageDropdown={toggleLanguageDropdown}
        languages={[
          { label: t("spanish"), icon: "/01-NavBar/language_spanish.png", code: "es" },
          { label: t("english"), icon: "/01-NavBar/language_us.png", code: "en" },
        ]}
      />
      <NavbarToggle onClick={toggleMenu} isOpen={isMenuOpen} />
    </nav>
  );
}

export default Navbar;
