import React from 'react';
import Navbar from './Navbar';
import CaracteristicsSections from './CaracteristicsSections';
import SoftwareSection from './SoftwareSection';
import BenefitsSections from './BenefitsSections';
import './Layout.css'; // Importa su propio CSS

const Layout = ({variantB = "default", title}) => {
  return (
    <div className="layout-container">
      <Navbar title={title}/>
      <CaracteristicsSections />
      <SoftwareSection />
      <BenefitsSections variant={variantB}/>
    </div>
  );
};

export default Layout;
