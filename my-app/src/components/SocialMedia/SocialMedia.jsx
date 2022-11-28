import "./SocialMedia.scss";

function SocialMedia() {
  const base = `socialMedia`;

  return (
    <div className={`${base}`}>
      <div className={`${base}_rightText`}>We are in social networks</div>
      <div className={`${base}_mediaLine`}>
        <svg
          width="2"
          height="246"
          viewBox="0 0 2 246"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            opacity="0.3"
            x1="1.35303"
            y1="0.757568"
            x2="1.35302"
            y2="245.758"
            stroke="#383838"
          />
        </svg>
      </div>
      <div className={`${base}_mediaIcon`}>
        <svg
          className={`${base}_mediaYoutube`}
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0734 5.28765C20.3515 4.37306 19.0186 4 16.4731 4H7.23278C4.62897 4 3.27348 4.39713 2.55426 5.37083C1.85303 6.3202 1.85303 7.71903 1.85303 9.65503V13.345C1.85303 17.0957 2.68503 19 7.23278 19H16.4731C18.6806 19 19.9038 18.6709 20.6952 17.8637C21.5068 17.036 21.853 15.6847 21.853 13.345V9.65503C21.853 7.61335 21.7988 6.20628 21.0734 5.28765ZM14.6931 12.0095L10.4971 14.3465C10.4033 14.3988 10.3007 14.4247 10.1982 14.4247C10.0822 14.4247 9.96651 14.3914 9.864 14.3253C9.67097 14.2006 9.55309 13.9777 9.55309 13.7371V9.07803C9.55309 8.83794 9.67064 8.61518 9.86329 8.49045C10.056 8.36574 10.2957 8.35721 10.4956 8.4679L14.6916 10.7899C14.9051 10.908 15.0391 11.1429 15.0394 11.3991C15.0397 11.6556 14.9063 11.8908 14.6931 12.0095Z"
            fill="#C3C3C3"
          />
        </svg>
        <svg
          className={`${base}_mediaFacebook`}
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.69803 0.00354004L7.49343 0C5.01673 0 3.41621 1.64212 3.41621 4.18372V6.1127H1.19967C1.00813 6.1127 0.853027 6.26798 0.853027 6.45952V9.2544C0.853027 9.446 1.00831 9.601 1.19967 9.601H3.41621V16.6534C3.41621 16.8449 3.57132 17 3.76285 17H6.65483C6.84633 17 7.00143 16.8447 7.00143 16.6534V9.601H9.59313C9.78463 9.601 9.93973 9.446 9.93973 9.2544L9.94083 6.45952C9.94083 6.36755 9.90423 6.27948 9.83933 6.21439C9.77443 6.14931 9.68593 6.1127 9.59403 6.1127H7.00143V4.47748C7.00143 3.69153 7.18873 3.29254 8.21253 3.29254L9.69763 3.29201C9.88903 3.29201 10.0441 3.13673 10.0441 2.94537V0.35018C10.0441 0.15899 9.88913 0.00389004 9.69803 0.00354004Z"
            fill="#C3C3C3"
          />
        </svg>
        <svg
          className={`${base}_mediaVK`}
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.747 15.8373C21.7227 15.7824 21.7002 15.7369 21.6791 15.7003C21.3321 15.0432 20.6691 14.2364 19.6902 13.2801L19.6696 13.2581L19.6593 13.2475L19.6487 13.2364H19.6382C19.1939 12.7911 18.9126 12.4916 18.7949 12.3384C18.5794 12.0463 18.531 11.7507 18.6489 11.4512C18.7321 11.2249 19.0448 10.747 19.586 10.0168C19.8707 9.62986 20.0963 9.31972 20.2628 9.08606C21.4639 7.40686 21.9847 6.33383 21.8249 5.86655L21.7628 5.75735C21.7211 5.69161 21.6136 5.63147 21.4401 5.57662C21.2665 5.52189 21.0443 5.51284 20.7736 5.54931L17.7747 5.57109C17.7261 5.55299 17.6566 5.55468 17.5663 5.57662C17.4761 5.59856 17.4309 5.60956 17.4309 5.60956L17.3787 5.63699L17.3373 5.66994C17.3026 5.69173 17.2643 5.73004 17.2226 5.78482C17.1811 5.83939 17.1466 5.90345 17.1188 5.97643C16.7922 6.85979 16.4211 7.6811 16.0045 8.4403C15.7476 8.89301 15.5117 9.28535 15.2963 9.6175C15.0811 9.94965 14.9005 10.1943 14.7548 10.3512C14.6089 10.5081 14.4773 10.6339 14.3591 10.7289C14.2411 10.824 14.151 10.864 14.0885 10.8493C14.026 10.8348 13.9671 10.8202 13.9113 10.8056C13.8142 10.7398 13.736 10.6504 13.6772 10.5372C13.618 10.4241 13.5782 10.2817 13.5574 10.1101C13.5366 9.93841 13.5244 9.79076 13.5209 9.6666C13.5176 9.54267 13.5191 9.36725 13.5262 9.14094C13.5334 8.91453 13.5366 8.76133 13.5366 8.68103C13.5366 8.40356 13.5418 8.10243 13.552 7.77757C13.5626 7.45269 13.5711 7.1953 13.5782 7.00566C13.5853 6.81583 13.5886 6.61502 13.5886 6.4033C13.5886 6.19157 13.5763 6.02553 13.552 5.90502C13.5282 5.78466 13.4915 5.66783 13.4431 5.55457C13.3944 5.44142 13.3231 5.35389 13.2296 5.29175C13.1359 5.2297 13.0193 5.18045 12.8807 5.14386C12.5128 5.05629 12.0442 5.00892 11.4748 5.00156C10.1837 4.98698 9.35405 5.07466 8.98611 5.26449C8.84033 5.34469 8.7084 5.45427 8.59046 5.59288C8.46547 5.75355 8.44804 5.84124 8.53827 5.85565C8.95485 5.92128 9.24977 6.07827 9.42335 6.32647L9.48589 6.45799C9.53455 6.55287 9.58312 6.72088 9.63175 6.96174C9.68029 7.20261 9.71162 7.46907 9.7254 7.76095C9.76005 8.29397 9.76005 8.75025 9.7254 9.12982C9.69065 9.50949 9.65782 9.80512 9.62649 10.0169C9.59516 10.2286 9.54833 10.4002 9.48589 10.5316C9.42335 10.6629 9.38173 10.7432 9.36087 10.7724C9.34003 10.8016 9.32268 10.82 9.30889 10.8271C9.21866 10.8635 9.12481 10.882 9.02769 10.882C8.93042 10.882 8.81246 10.8309 8.67365 10.7285C8.53487 10.6263 8.39085 10.4859 8.24156 10.307C8.09228 10.128 7.92393 9.87806 7.73642 9.55682C7.54906 9.23564 7.35466 8.85603 7.15334 8.41802L6.98676 8.10036C6.88264 7.896 6.7404 7.59844 6.5599 7.20795C6.37929 6.8173 6.21965 6.43942 6.08087 6.07439C6.02539 5.92108 5.94205 5.80437 5.831 5.72405L5.77888 5.6911C5.74423 5.66196 5.68861 5.63101 5.61231 5.59802C5.53591 5.56507 5.45617 5.54145 5.3728 5.52691L2.5196 5.5487C2.22804 5.5487 2.03021 5.61816 1.92604 5.75689L1.88436 5.82252C1.86353 5.85906 1.85303 5.91744 1.85303 5.9978C1.85303 6.07812 1.87385 6.17669 1.91554 6.2934C2.33206 7.32287 2.78501 8.31569 3.2744 9.27203C3.76378 10.2284 4.18905 10.9988 4.54993 11.5825C4.91091 12.1666 5.27885 12.7179 5.65374 13.236C6.02864 13.7544 6.27679 14.0866 6.39822 14.2326C6.51978 14.3788 6.61526 14.4881 6.68466 14.561L6.94505 14.8238C7.11165 14.9991 7.3563 15.209 7.67912 15.4535C8.00201 15.6981 8.35948 15.939 8.75171 16.1765C9.14399 16.4135 9.60038 16.6069 10.1211 16.7566C10.6417 16.9064 11.1485 16.9665 11.6414 16.9375H12.839C13.0818 16.9154 13.2658 16.8352 13.3909 16.6966L13.4323 16.6417C13.4602 16.598 13.4863 16.5304 13.5103 16.4392C13.5347 16.3481 13.5467 16.2475 13.5467 16.1382C13.5396 15.8243 13.5624 15.5413 13.6144 15.2896C13.6663 15.0378 13.7254 14.848 13.7915 14.7201C13.8577 14.5924 13.9322 14.4846 14.0154 14.3972C14.0986 14.3097 14.1579 14.2567 14.1927 14.2385C14.2272 14.2201 14.2549 14.2076 14.2757 14.2C14.4423 14.1417 14.6384 14.1983 14.8642 14.37C15.0899 14.5415 15.3016 14.7533 15.4995 15.0051C15.6974 15.2571 15.9351 15.5399 16.2126 15.8537C16.4906 16.1677 16.7335 16.4011 16.9415 16.5546L17.1498 16.686C17.2889 16.7736 17.4693 16.854 17.6916 16.927C17.9134 17 18.1077 17.0183 18.2745 16.9817L20.9401 16.938C21.2039 16.938 21.409 16.8921 21.5545 16.801C21.7004 16.7097 21.787 16.6092 21.8148 16.4999C21.8428 16.3905 21.8443 16.2662 21.8201 16.1274C21.7955 15.9888 21.7711 15.892 21.747 15.8373Z"
            fill="#C3C3C3"
          />
        </svg>
      </div>
    </div>
  );
}

export default SocialMedia;
