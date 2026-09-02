import { useState } from "react";
import { Header } from "@/widgets/header/header";
import { Hero } from "@/widgets/hero/hero";
import { Participate } from "@/widgets/participate/participate";
import { About } from "@/widgets/about/about";
import { Decide } from "@/widgets/decide/decide";
import { Modal } from "@/widgets/modal/modal";
import "./home-page.css";

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ You have successfully registered for the beta test!");
    setIsModalOpen(false);
  };

  return (
    <div className="home-page">
      <Header onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Participate onOpenModal={handleOpenModal} />
        <About />
        <Decide />
      </main>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3>JOIN THE BETA</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="btn-main">
            SUBMIT
          </button>
        </form>
      </Modal>
    </div>
  );
};
