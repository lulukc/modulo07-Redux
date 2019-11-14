import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/57f27d11b18f4a8d9d9aa7fa00ed0c3d_9366/Tenis_Superstar_Branco_C77124_07_standard.jpg"
                alt="Tenis"
              />
            </td>
            <td>
              <strong>Tenis muito legal</strong>
              <span>RS 379,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$759,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button"> Finalizar pedido </button>
        <Total>
          <span>Total</span>
          <strong>R$759,90</strong>
        </Total>
      </footer>
    </Container>
  );
}
