import React from 'react';
import './Card.scss';

const Card: React.FC = () => {
  return (
    <div className="card">
      <img 
        className="card__img"
        src="/images/card/card_img.png"
        alt="phone"
      />
      
      <p className="card__title">
        Apple iPhone 14 Pro 128GB Silver 
        <br/>(MQ023)          
      </p>

      <div className="card__price">
        <p className="card__price-actual">
          $999
        </p>

        <p className="card__price-sale">
          $999
        </p>
      </div>

      <hr />

      <div className="card__description">
        <div className="description-item">
          <span className="description-item-title">
            Screen
          </span>
          <span className="description-item-value">
          6.1” OLED
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
          Capacity
          </span>
          <span className="description-item-value">
            128 GB
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
            RAM
          </span>
          <span className="description-item-value">
            6 GB
          </span>
        </div>
      </div>

      <div className="card__footer">
        <button className="card__footer-button">
          Add to cart
        </button>

        <div className="card__footer-favourite">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" 
              clip-rule="evenodd" 
              d="M9.62803 1.63136C10.158 1.41178 10.7259 1.29877 11.2996 1.29877C11.8732 1.29877 12.4412 1.41178 12.9711 1.63136C13.501 1.85093 13.9825 2.17276 14.388 2.57846C14.7936 2.98392 15.1153 3.46531 15.3349 3.99513C15.5544 4.52505 15.6674 5.09304 15.6674 5.66665C15.6674 6.24026 15.5544 6.80825 15.3349 7.33817C15.1153 7.86805 14.7935 8.34947 14.3879 8.75496C14.3878 8.755 14.3879 8.75492 14.3879 8.75496L8.49453 14.6483C8.22117 14.9217 7.77795 14.9217 7.50458 14.6483L1.61125 8.75496C0.79218 7.93589 0.332031 6.82499 0.332031 5.66665C0.332031 4.50831 0.79218 3.39741 1.61125 2.57834C2.43032 1.75927 3.54122 1.29912 4.69956 1.29912C5.8579 1.29912 6.9688 1.75927 7.78787 2.57834L7.99956 2.79003L8.21113 2.57846C8.2111 2.5785 8.21117 2.57842 8.21113 2.57846C8.61662 2.17281 9.09816 1.85091 9.62803 1.63136ZM13.3978 3.56818C13.1223 3.29255 12.7952 3.0739 12.4352 2.92472C12.0751 2.77555 11.6893 2.69877 11.2996 2.69877C10.9099 2.69877 10.524 2.77555 10.1639 2.92472C9.80392 3.0739 9.47681 3.29255 9.20132 3.56818L8.49453 4.27496C8.22117 4.54833 7.77795 4.54833 7.50458 4.27496L6.79792 3.56829C6.2414 3.01177 5.4866 2.69912 4.69956 2.69912C3.91252 2.69912 3.15772 3.01177 2.6012 3.56829C2.04468 4.12481 1.73203 4.87961 1.73203 5.66665C1.73203 6.45369 2.04468 7.20849 2.6012 7.76501L7.99956 13.1634L13.3979 7.76501C13.6735 7.48951 13.8923 7.16229 14.0415 6.80227C14.1907 6.44224 14.2674 6.05635 14.2674 5.66665C14.2674 5.27695 14.1907 4.89106 14.0415 4.53103C13.8923 4.17101 13.6734 3.84367 13.3978 3.56818Z" 
              fill="#0F0F11"/>
          </svg>
        </div>
      </div>
    </div>
  )
};

export default Card;
