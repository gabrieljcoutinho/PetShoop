import React from 'react';
import '../Css/loja.css';

// Imgs caminhas
import caminha1 from '../img/caminha1.jpg';
import caminha2 from '../img/caminha2.jpg';
import caminha3 from '../img/caminha3.jpg';
import caminha4 from '../img/caminha4.jpg';
import caminha5 from '../img/caminha5.jpg';
import caminha6 from '../img/caminha6.jpg';


import caminha7 from '../img/caminha7.jpg';
import caminha8 from '../img/caminha8.jpg';
import caminha9 from '../img/caminha9.jpg';
import caminha10 from '../img/caminha10.jpg';
import caminha11 from '../img/caminha11.jpg';
import caminha12 from '../img/caminha12.jpg';

//Imgs brinquedos
import brinquedo1 from '../img/brinquedo1.jpg';
import brinquedo2 from '../img/brinquedo2.jpg';
import brinquedo3 from '../img/brinquedo3.jpg';
import brinquedo4 from '../img/brinquedo4.jpg';
import brinquedo5 from '../img/brinquedo5.jpg';
import brinquedo6 from '../img/brinquedo6.jpg';

import brinquedo7 from '../img/brinquedo7.jpg';
import brinquedo8 from '../img/brinquedo8.jpg';
import brinquedo9 from '../img/brinquedo9.jpg';
import brinquedo10 from '../img/brinquedo10.jpg';
import brinquedo11 from '../img/brinquedo11.jpg';
import brinquedo12 from '../img/brinquedo12.jpg';



const Loja = () => {
  // Caminhas
  const produtosEmDestaque = [
    { id: 1, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha1 },
    { id: 2, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha2 },
    { id: 3, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha3 },
    { id: 4, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha4 },
    { id: 5, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha5 },
    { id: 6, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha6 },
    { id: 7, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha7 },
    { id: 8, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha8 },
    { id: 9, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha9 },
    { id: 10, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha10 },
    { id: 11, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha11 },
    { id: 12, nome: 'Caminha', preco: 'R$ 89,90', imagem: caminha12},



    //binquedos
    { id: 13, nome: 'Urso de Pelúcia', preco: 'R$ 50,00', imagem: brinquedo1 },
    { id: 14, nome: 'Urso de Pelúcia', preco: 'R$ 50,00', imagem: brinquedo2 },
    { id: 15, nome: 'Urso de Pelúcia', preco: 'R$ 50,00', imagem: brinquedo3 },
    { id: 16, nome: 'Urso de Pelúcia', preco: 'R$ 50,00', imagem: brinquedo4 },
    { id: 17, nome: 'Urso de Pelúcia', preco: 'R$ 50,00', imagem: brinquedo5 },
    { id: 18, nome: 'Urso de Pelúcia', preco: 'R$ 50,00', imagem: brinquedo6},

    { id: 19, nome: 'Binquedo de gato', preco: 'R$ 50,00', imagem: brinquedo7},
    { id: 20, nome: 'Binquedo de gato', preco: 'R$ 50,00', imagem: brinquedo8},
    { id: 21, nome: 'Binquedo de gato', preco: 'R$ 50,00', imagem: brinquedo9},
    { id: 22, nome: 'Binquedo de gato', preco: 'R$ 50,00', imagem: brinquedo10},
    { id: 23, nome: 'Binquedo de gato', preco: 'R$ 50,00', imagem: brinquedo11},
    { id: 24, nome: 'Binquedo de gato', preco: 'R$ 50,00', imagem: brinquedo12},
  ];

  return (
    <div className="loja-container">
      <section className="banner-loja">
        <div className="banner-content">
          <h1>Encontre Tudo Para o Seu Melhor Amigo!</h1>
          <p>Explore nossa seleção de produtos de alta qualidade, pensados para o bem-estar e a alegria do seu pet.</p>
        </div>
      </section>

      <section className="destaques-loja">
        <h2>Produtos em Destaque</h2>
        <div className="grid-produtos">
          {produtosEmDestaque.map((produto) => (
            <div key={produto.id} className="card-produto">
              <img src={produto.imagem} alt={produto.nome} className="imagem-produto" />
              <h3>{produto.nome}</h3>
              <p className="preco">{produto.preco}</p>
              <button className="button-comprar">Comprar</button>
            </div>
          ))}
        </div>
      </section>

      <section className="info-loja">
        <div className="info-item">
          <i className="fas fa-truck"></i> {/* Ícone de caminhão */}
          <h3>Entrega Rápida e Segura</h3>
          <p>Receba seus produtos no conforto da sua casa.</p>
        </div>
        <div className="info-item">
          <i className="fas fa-paw"></i> {/* Ícone de pata */}
          <h3>Produtos de Qualidade</h3>
          <p>Selecionamos os melhores itens para o seu pet.</p>
        </div>
        <div className="info-item">
          <i className="fas fa-comments"></i> {/* Ícone de balões de conversa */}
          <h3>Atendimento Personalizado</h3>
          <p>Tire suas dúvidas com nossa equipe.</p>
        </div>
      </section>
    </div>
  );
};

export default Loja;