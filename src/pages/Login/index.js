import React from 'react';
import './Login.scss';
import Logo from '@assets/logoAdmin.png';

export default function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-container-logo">
          <img src={Logo} alt="Logo"></img>
        </div>
        <div className="login-container-forms">
          <div className="login-container-forms-texts">
            <p>Oturum aç</p>
            <span>Aşağıdaki bilgileri doldurarak giriş yapabilirsiniz.</span>
          </div>
          <input placeholder="E-Posta" type="text"></input>
          <input placeholder="Şifre" type="password"></input>
          <button>Giriş Yap</button>
        </div>
        <div className="login-container-informations">
          <p>
            Henüz bir hesabınız yok mu?{' '}
            <span className="c-pointer">Üye ol</span>{' '}
          </p>
          <p className="c-pointer">Şifremi unuttum</p>
        </div>
      </div>
    </div>
  );
}
