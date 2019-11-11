import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/57f27d11b18f4a8d9d9aa7fa00ed0c3d_9366/Tenis_Superstar_Branco_C77124_07_standard.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>RS 379,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/57f27d11b18f4a8d9d9aa7fa00ed0c3d_9366/Tenis_Superstar_Branco_C77124_07_standard.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>RS 379,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/57f27d11b18f4a8d9d9aa7fa00ed0c3d_9366/Tenis_Superstar_Branco_C77124_07_standard.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>RS 379,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/57f27d11b18f4a8d9d9aa7fa00ed0c3d_9366/Tenis_Superstar_Branco_C77124_07_standard.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>RS 379,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/57f27d11b18f4a8d9d9aa7fa00ed0c3d_9366/Tenis_Superstar_Branco_C77124_07_standard.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>RS 379,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/57f27d11b18f4a8d9d9aa7fa00ed0c3d_9366/Tenis_Superstar_Branco_C77124_07_standard.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>RS 379,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
