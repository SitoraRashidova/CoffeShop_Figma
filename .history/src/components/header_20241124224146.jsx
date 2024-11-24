

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
            <ul className="nav-list">
                <li className="nav-list__item">
                    <a className="nav-list__item-link" href="/home">Home</a>
                </li>
                <li className="nav-list__item">
                    <a className="nav-list__item-link" href="/about">About</a>
                </li>
                <li className="nav-list__item">
                    <a className="nav-list__item-link" href="/menu">Menu</a>
                </li>
                <li className="nav-list__item">
                    <a className="nav-list__item-link" href="/Reservation">Reservation</a>
                </li>
            </ul>
        </nav>
        <div>
            <img src="" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header