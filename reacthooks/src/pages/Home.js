import React, { useState, useEffect } from 'react';
import '../Css/home.css';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pets, setPets] = useState([
    { id: 1, name: 'Apolo', type: 'Cachorro', breed: 'Boxer', description: 'Um boxer brincalhão e cheio de energia, sempre pronto para uma aventura.' },
    { id: 2, name: 'Luna', type: 'Gato', breed: 'Persa', description: 'Elegante e calma, Luna adora um colo quentinho e uma sessão de carinho.' },
    { id: 3, name: 'Pipoca', type: 'Hamster', breed: 'Sírio', description: 'Pequeno e curioso, Pipoca adora explorar sua rodinha e fazer novos esconderijos.' },
    { id: 4, name: 'Kiwi', type: 'Pássaro', breed: 'Agapornis', description: 'Colorido e vocal, Kiwi traz alegria com seus cantos e acrobacias.' },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % pets.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [pets.length]);

  const currentPet = pets[activeIndex];

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Um Universo de Mimos para Seu Melhor Amigo!</h1>
          <p>Explore um mundo de produtos e serviços pensados com o coração para o bem-estar do seu pet.</p>
          <button className="call-to-action">Descubra Agora!</button>
        </div>
        <div className="hero-image-overlay"></div>
      </section>

      <section className="featured-pet">
        <h2>Conheça o Astro de Hoje!</h2>
        <div className="pet-card">
          <div className="pet-icon">
            {currentPet.type === 'Cachorro' && <span role="img" aria-label="cachorro">🐶</span>}
            {currentPet.type === 'Gato' && <span role="img" aria-label="gato">🐱</span>}
            {currentPet.type === 'Hamster' && <span role="img" aria-label="hamster">🐹</span>}
            {currentPet.type === 'Pássaro' && <span role="img" aria-label="pássaro">🐦</span>}
            {/* Adicione mais ícones conforme necessário */}
          </div>
          <div className="pet-details">
            <h3>{currentPet.name}</h3>
            <p className="pet-type"><span className="pet-type-label">{currentPet.type}</span> - {currentPet.breed}</p>
            <p className="pet-description">{currentPet.description}</p>
            <button className="learn-more">Saiba Mais sobre {currentPet.name}</button>
          </div>
        </div>
      </section>

      <section className="services">
  <h2>Nossos Serviços que Fazem a Diferença</h2>
  <div className="services-grid">
    <div className="service-item">
      <div className="service-icon">🐾</div>
      <h3>Tosa com Estilo</h3>
      <p>Deixe seu pet ainda mais charmoso e confortável.</p>
      <button className="service-button">Agendar</button>
    </div>
    <div className="service-item">
      <div className="service-icon">🍖</div>
      <h3>Delícias Nutritivas</h3>
      <p>Alimentação saudável e saborosa para cada fase da vida.</p>
      <button className="service-button">Ver Opções</button>
    </div>
    <div className="service-item">
      <div className="service-icon">🩺</div>
      <h3>Cuidado Veterinário Dedicado</h3>
      <p>Saúde e bem-estar com profissionais que amam animais.</p>
      <button className="service-button">Consultar</button>
    </div>
    <div className="service-item">
      <div className="service-icon">🎾</div>
      <h3>Alegria e Movimento</h3>
      <p>Brinquedos e acessórios para muita diversão e exercício.</p>
      <button className="service-button">Explorar</button>
    </div>
    <div className="service-item">
      <div className="service-icon">🏡</div>
      <h3>Hotelzinho Aconchegante</h3>
      <p>Um lar temporário seguro e cheio de carinho para quando você precisar.</p>
      <button className="service-button">Reservar</button>
    </div>
    <div className="service-item">
      <div className="service-icon">🎓</div>
      <h3>Adestramento Gentil</h3>
      <p>Ensine comandos e fortaleça o vínculo com seu companheiro.</p>
      <button className="service-button">Saber Mais</button>
    </div>
  </div>
</section>

      <section className="testimonials">
        <h2>O Que Nossos Amigos Humanos Dizem</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <p>"Meu Apolo ficou ainda mais lindo depois da tosa! Super recomendo." - Mariana F.</p>
            <div className="testimonial-author">- Mariana F.</div>
          </div>
          <div className="testimonial">
            <p>"A Luna adora os petiscos naturais daqui. E o atendimento é sempre impecável!" - Lucas G.</p>
            <div className="testimonial-author">- Lucas G.</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
