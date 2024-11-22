import './index.scss';
import { Link } from 'react-router-dom';

export default function Login() {

    return (
        <div className="mãe">
      <div className="login">
        <div className="login__logo">
          <img src="/assets/images/image 84.png" alt="Logo do dente" />
        </div>
        <h1>Faça seu Login</h1>
        <div className="login__input">
          <label>E-mail</label>
          <input type="text" placeholder="Digite seu e-mail" />
        </div>
        <div className="login__input">
          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />
        </div>
        <Link to='/Login'>Login</Link>
        
      </div>
    </div>
    );
}