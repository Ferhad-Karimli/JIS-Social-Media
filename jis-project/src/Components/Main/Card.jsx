import style from "../Main/Allposts.module.css";
import photo from "../Image/Rectangle 374.png";
import photo_1 from "../Image/Ellipse 6.png";
import card from "../Main/Card.module.css";
import photo_2 from "../Image/07 JUN 2021.png";
function Card() {
  return (
    <div className={style.card_container}>
      <div className={style.card_1}>
        <img src={photo} className={style.photo_div} alt="" />

        <div className={card.logo}>
          <img src={photo_1} alt="" />
          <span className={card.studio}>Jeykhun Imanov Studio</span>
        </div>

        <div className={card.words}>
          {" "}
          Akkord Korporasiyası Cənubi Qafqazın inşaat
          <br /> sektorunun lider şirkətlərindən biridir...
        </div>

        <div className={card.smilik}>
          <div className={card.thumb}>
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.162 4.338C9.338 4.461 9.5 4.583 9.5 5.012C9.5 5.442 9.271 5.616 9.026 5.737C9.1261 5.90028 9.1581 6.09637 9.115 6.283C9.038 6.627 8.723 6.894 8.443 6.973C8.564 7.167 8.602 7.358 8.458 7.593C8.273 7.888 8.112 8 7.4 8H4.5C3.512 8 3 7.454 3 7V4.665C3 3.435 4.467 2.39 4.467 1.535L4.361 0.47C4.356 0.405 4.369 0.246 4.419 0.2C4.499 0.121 4.72 0 5.054 0C5.272 0 5.417 0.0409999 5.588 0.123C6.169 0.4 6.32 1.101 6.32 1.665C6.32 1.936 5.906 2.748 5.85 3.029C5.85 3.029 6.717 2.837 7.729 2.83C8.79 2.824 9.478 3.02 9.478 3.672C9.478 3.933 9.259 4.195 9.162 4.338ZM0.6 4H1.4C1.55913 4 1.71174 4.06321 1.82426 4.17574C1.93679 4.28826 2 4.44087 2 4.6V8.4C2 8.5591 1.93679 8.7117 1.82426 8.8243C1.71174 8.9368 1.55913 9 1.4 9H0.6C0.44087 9 0.28826 8.9368 0.17574 8.8243C0.06321 8.7117 0 8.5591 0 8.4V4.6C0 4.44087 0.06321 4.28826 0.17574 4.17574C0.28826 4.06321 0.44087 4 0.6 4Z"
                fill="white"
              />
            </svg>
          </div>

          <div className={card.heart}>
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4732 0C5.27523 0 5.00023 1.824 5.00023 1.824C5.00023 1.824 4.72623 0 2.52823 0C0.414234 0 -0.201766 2.222 0.056234 3.41C0.736234 6.55 5.00023 8.75 5.00023 8.75C5.00023 8.75 9.2652 6.55 9.9452 3.41C10.2022 2.222 9.5852 0 7.4732 0Z"
                fill="white"
              />
            </svg>
          </div>

          <div className={card.smile}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M5.33301 12.765C5.33301 12.902 5.42701 13 5.58301 13C5.93401 13 6.41901 12.375 8.00001 12.375C9.58101 12.375 10.067 13 10.417 13C10.573 13 10.667 12.902 10.667 12.765C10.667 12.368 9.82801 11 8.00001 11C6.17201 11 5.33301 12.368 5.33301 12.765Z"
                fill="url(#paint1_linear)"
              />
              <path
                d="M3.59872 8.79998C3.59872 7.98998 4.10772 7.33398 4.73272 7.33398C5.35972 7.33398 5.86672 7.98998 5.86672 8.79998C5.86672 9.13798 5.77772 9.44998 5.62872 9.69798C5.56211 9.80986 5.45387 9.89078 5.32772 9.92299C5.18772 9.95999 4.97472 9.99998 4.73272 9.99998C4.48972 9.99998 4.27972 9.95999 4.13772 9.92299C4.01184 9.89074 3.90393 9.8098 3.83772 9.69798C3.67817 9.42583 3.59556 9.11544 3.59872 8.79998ZM10.1327 8.79998C10.1327 7.98998 10.6407 7.33398 11.2657 7.33398C11.8927 7.33398 12.3997 7.98998 12.3997 8.79998C12.3997 9.13798 12.3107 9.44998 12.1617 9.69798C12.1288 9.75345 12.0853 9.80189 12.0336 9.8405C11.982 9.87911 11.9232 9.90714 11.8607 9.92299C11.4708 10.024 11.0616 10.024 10.6717 9.92299C10.6092 9.90714 10.5504 9.87911 10.4988 9.8405C10.4471 9.80189 10.4036 9.75345 10.3707 9.69798C10.2115 9.42575 10.1292 9.11536 10.1327 8.79998Z"
                fill="url(#paint2_linear)"
              />
              <g filter="url(#filter0_i)">
                <path
                  d="M3.59872 8.79998C3.59872 7.98998 4.10772 7.33398 4.73272 7.33398C5.35972 7.33398 5.86672 7.98998 5.86672 8.79998C5.86672 9.13798 5.77772 9.44998 5.62872 9.69798C5.56211 9.80986 5.45387 9.89078 5.32772 9.92299C5.18772 9.95999 4.97472 9.99998 4.73272 9.99998C4.48972 9.99998 4.27972 9.95999 4.13772 9.92299C4.01184 9.89074 3.90393 9.8098 3.83772 9.69798C3.67817 9.42583 3.59556 9.11544 3.59872 8.79998ZM10.1327 8.79998C10.1327 7.98998 10.6407 7.33398 11.2657 7.33398C11.8927 7.33398 12.3997 7.98998 12.3997 8.79998C12.3997 9.13798 12.3107 9.44998 12.1617 9.69798C12.1288 9.75345 12.0853 9.80189 12.0336 9.8405C11.982 9.87911 11.9232 9.90714 11.8607 9.92299C11.4708 10.024 11.0616 10.024 10.6717 9.92299C10.6092 9.90714 10.5504 9.87911 10.4988 9.8405C10.4471 9.80189 10.4036 9.75345 10.3707 9.69798C10.2115 9.42575 10.1292 9.11536 10.1327 8.79998Z"
                  fill="black"
                />
              </g>
              <path
                d="M4.61595 7.98556C4.74395 8.11056 4.75195 8.35756 4.63295 8.53656C4.51295 8.71456 4.31295 8.75856 4.18495 8.63256C4.05695 8.50756 4.04995 8.26056 4.16795 8.08256C4.28795 7.90356 4.48795 7.86056 4.61595 7.98556ZM11.105 7.98556C11.233 8.11056 11.241 8.35756 11.123 8.53656C11.003 8.71456 10.803 8.75856 10.673 8.63256C10.546 8.50756 10.539 8.26056 10.658 8.08256C10.777 7.90356 10.977 7.86056 11.105 7.98556Z"
                fill="#4E506A"
              />
              <path
                d="M4.1572 5.15259C4.4892 4.99959 4.7532 4.93359 4.9582 4.93359C5.2352 4.93359 5.4092 5.05259 5.5082 5.23959C5.6832 5.56859 5.6042 5.64059 5.3102 5.69859C4.2042 5.92259 3.0932 6.64059 2.6112 7.08859C2.3102 7.36859 2.0222 7.05859 2.1752 6.81459C2.3292 6.57059 2.9492 5.70959 4.1572 5.15259ZM10.4922 5.23959C10.5912 5.05259 10.7652 4.93359 11.0422 4.93359C11.2482 4.93359 11.5112 4.99959 11.8432 5.15259C13.0512 5.70959 13.6712 6.57059 13.8242 6.81459C13.9772 7.05859 13.6902 7.36859 13.3892 7.08859C12.9062 6.64059 11.7962 5.92259 10.6892 5.69859C10.3952 5.64059 10.3182 5.56859 10.4922 5.23959Z"
                fill="url(#paint3_linear)"
              />
              <path
                d="M13.5 16C12.672 16 12 15.252 12 14.329C12 13.407 12.356 12.784 12.643 12.182C13.241 10.924 13.359 10.75 13.5 10.75C13.641 10.75 13.759 10.924 14.357 12.182C14.644 12.784 15 13.407 15 14.329C15 15.252 14.328 16 13.5 16Z"
                fill="url(#paint4_linear)"
              />
              <path
                d="M13.5002 13.6063C13.1722 13.6063 12.9062 13.3103 12.9062 12.9463C12.9062 12.5803 13.0473 12.3333 13.1613 12.0943C13.3973 11.5963 13.4442 11.5283 13.5002 11.5283C13.5562 11.5283 13.6032 11.5963 13.8392 12.0943C13.9532 12.3343 14.0942 12.5803 14.0942 12.9453C14.0942 13.3103 13.8282 13.6063 13.5002 13.6063Z"
                fill="url(#paint5_linear)"
              />
              <defs>
                <filter
                  id="filter0_i"
                  x="3.59863"
                  y="7.33398"
                  width="8.80107"
                  height="2.666"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0411227 0 0 0 0 0.0430885 0 0 0 0 0.0922353 0 0 0 0.819684 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear"
                  x1="8"
                  y1="1.64"
                  x2="8"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEEA70" />
                  <stop offset="1" stop-color="#F69B30" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="8"
                  y1="11"
                  x2="8"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#472315" />
                  <stop offset="1" stop-color="#8B3A0E" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="7.999"
                  y1="7.334"
                  x2="7.999"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#191A33" />
                  <stop offset="0.872" stop-color="#3B426A" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear"
                  x1="8"
                  y1="4.934"
                  x2="8"
                  y2="7.199"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E78E0D" />
                  <stop offset="1" stop-color="#CB6000" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear"
                  x1="13.5"
                  y1="15.05"
                  x2="13.5"
                  y2="11.692"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#35CAFC" />
                  <stop offset="1" stop-color="#007EDB" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear"
                  x1="13.5"
                  y1="11.528"
                  x2="13.5"
                  y2="13.606"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6AE1FF" stop-opacity="0.287" />
                  <stop offset="1" stop-color="#A8E3FF" stop-opacity="0.799" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <span className={card.number}>166</span>

          <div className={card.message}>
             
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

                
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 4.9V0.7C0.5 0.315 0.815 0 1.2 0H6.8C7.185 0 7.4965 0.315 7.4965 0.7L7.5 7L6.1 5.6H1.2C0.815 5.6 0.5 5.285 0.5 4.9Z"
                fill="white"
              />
            </svg>
          </div>

         <span className={card.m_number}>4</span>

          <div className={card.share}>
            <svg
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            > 
              <path
                d="M5.75 0.5C5.47152 0.5 5.20445 0.610625 5.00754 0.807538C4.81062 1.00445 4.7 1.27152 4.7 1.55C4.70021 1.61585 4.70662 1.68154 4.71914 1.74619L2.22881 3.19883C2.03913 3.03815 1.79859 2.94997 1.55 2.95C1.27152 2.95 1.00445 3.06062 0.807538 3.25754C0.610625 3.45445 0.5 3.72152 0.5 4C0.5 4.27848 0.610625 4.54555 0.807538 4.74246C1.00445 4.93938 1.27152 5.05 1.55 5.05C1.79821 5.04951 2.03822 4.96111 2.22744 4.80049L4.71914 6.25381C4.70662 6.31846 4.70021 6.38415 4.7 6.45C4.7 6.72848 4.81062 6.99555 5.00754 7.19246C5.20445 7.38938 5.47152 7.5 5.75 7.5C6.02848 7.5 6.29555 7.38938 6.49246 7.19246C6.68938 6.99555 6.8 6.72848 6.8 6.45C6.8 6.17152 6.68938 5.90445 6.49246 5.70754C6.29555 5.51062 6.02848 5.4 5.75 5.4C5.50156 5.40033 5.26128 5.48873 5.07188 5.64951L2.58086 4.19619C2.59338 4.13154 2.59979 4.06585 2.6 4C2.59979 3.93415 2.59338 3.86846 2.58086 3.80381L5.07119 2.35117C5.26087 2.51185 5.50141 2.60003 5.75 2.6C6.02848 2.6 6.29555 2.48938 6.49246 2.29246C6.68938 2.09555 6.8 1.82848 6.8 1.55C6.8 1.27152 6.68938 1.00445 6.49246 0.807538C6.29555 0.610625 6.02848 0.5 5.75 0.5Z"
                fill="white"
              />
            </svg>
          </div>
          <span className={card.m_number}>2</span>
        </div>

        <div className={card.time}>
          <img src={photo_2} alt="" />
        </div>

        <div className={card.hashtags_container}>
          <p className={card.hashtags}>#Pharetra</p>
          <p className={card.vitae}>#Vitae</p>
          <p className={card.tellus}>#Tellus</p>
          <p className={card.quis}> #Quis</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
