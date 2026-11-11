import logo from '../assets/logo-tronorex.png'
import Reloj from './Reloj'

interface HeaderProps {
  nombreEmpresa: string
  lema: string
}

function Header({ nombreEmpresa, lema }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__marca">
        <div className="logo-circulo">
          <img src={logo} alt={`Logo de ${nombreEmpresa}`} />
        </div>
        <div>
          <h1 className="header__nombre">
            Trono<span>Rex</span>
          </h1>
          <p className="header__lema">{lema}</p>
        </div>
      </div>
      <Reloj />
    </header>
  )
}

export default Header
