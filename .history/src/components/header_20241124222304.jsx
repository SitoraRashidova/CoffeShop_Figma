

const Header = () => {
  return (
    <header>
      <header className="bg-gray-100 py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Chap tomondagi 4 ta link */}
          <div className="flex space-x-4">
            <link to="/page1" className="text-gray-700 hover:text-blue-500">
              Page 1
            </link>
            <link to="/page2" className="text-gray-700 hover:text-blue-500">
              Page 2
            </link>
            <link to="/page3" className="text-gray-700 hover:text-blue-500">
              Page 3
            </link>
            <link to="/page4" className="text-gray-700 hover:text-blue-500">
              Page 4
            </link>
          </div>

          {/* Sayt logosi */}
          <div>
            <link to="/" className="text-2xl font-bold text-blue-600">
              LOGO
            </link>
          </div>

          {/* O'ng tomondagi 4 ta link va savatcha */}
          <div className="flex space-x-4 items-center">
            <link to="/page5" className="text-gray-700 hover:text-blue-500">
              Page 5
            </link>
            <link to="/page6" className="text-gray-700 hover:text-blue-500">
              Page 6
            </link>
            <link to="/page7" className="text-gray-700 hover:text-blue-500">
              Page 7
            </link>
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
    </header>
  )
}

export default Header