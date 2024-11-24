

const Header = () => {
  return (
    <header>
      <header className="bg-gray-100 py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Chap tomondagi 4 ta link */}
          <div className="flex space-x-4">
            <Link to="/page1" className="text-gray-700 hover:text-blue-500">
              Page 1
            </Link>
            <Link to="/page2" className="text-gray-700 hover:text-blue-500">
              Page 2
            </Link>
            <Link to="/page3" className="text-gray-700 hover:text-blue-500">
              Page 3
            </Link>
            <Link to="/page4" className="text-gray-700 hover:text-blue-500">
              Page 4
            </Link>
          </div>

          {/* Sayt logosi */}
          <div>
            <Link to="/" className="text-2xl font-bold text-blue-600">
              LOGO
            </Link>
          </div>

          {/* O'ng tomondagi 4 ta link va savatcha */}
          <div className="flex space-x-4 items-center">
            <Link to="/page5" className="text-gray-700 hover:text-blue-500">
              Page 5
            </Link>
            <Link to="/page6" className="text-gray-700 hover:text-blue-500">
              Page 6
            </Link>
            <Link to="/page7" className="text-gray-700 hover:text-blue-500">
              Page 7
            </Link>
            <Link to="/page8" className="text-gray-700 hover:text-blue-500">
              Page 8
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-500">
              🛒
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-8">
        <h1 className="text-center text-3xl font-semibold">Welcome to the website</h1>
      </main>
    </Router>
    </header>
  )
}

export default Header