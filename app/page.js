'use client';

import { useState } from 'react';
import {
  Header,
  Footer,
  HeroSection,
  ExhibitorsSection,
  ScheduleSection,
  GallerySection,
  RegistrationModal
} from '../components';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  // Handlers to open and close the modal
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-black font-sans">
      <Header onRegisterClick={openModal} />
      
      <main>
        <HeroSection onRegisterClick={openModal} />
        <ExhibitorsSection />
        <ScheduleSection />
        <GallerySection />
      </main>
      
      <Footer />
      
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
