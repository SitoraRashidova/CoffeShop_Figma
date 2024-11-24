

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div>
            <ul className="nav-list">
                <li className="nav-list__item">
                    <a className="nav-list__item-link" href="/home">Home</a>
                </li>
                <li className="nav-list__item">
                    <a className="nav-list__item-link" href="/home">About</a>
                </li>
                <li className="nav-list__item">
                    <a className="nav-list__item-link" href="/home">Menu</a>
                </li>
                <li className="nav-list__item">
                    <a className="nav-list__item-link" href="/Reservation">Reservation</a>
                </li>
            </ul>
        </div>
      </div>
    </header>
  )
}

export default Header