

const Header = () => {
  return (
    <header>
      <header className="bg-gray-100 py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Chap tomondagi 4 ta link */}
          <div className="flex space-x-4">
            <link href="/page1" className="text-gray-700 hover:text-blue-500">
              Page 1
            </link>
            <link href="/page2" className="text-gray-700 hover:text-blue-500">
              Page 2
            </link>
            <link href="/page3" className="text-gray-700 hover:text-blue-500">
              Page 3
            </link>
            <link href="/page4" className="text-gray-700 hover:text-blue-500">
              Page 4
            </link>
          </div>

          {/* Sayt logosi */}
          <div>
            <link href="/" className="text-2xl font-bold text-blue-600">
              LOGO
            </link>
          </div>

          {/* O'ng tomondagi 4 ta link va savatcha */}
          <div className="flex space-x-4 items-center">
            <link href="/page5" className="text-gray-700 hover:text-blue-500">
              Page 5
            </link>
            <link href="/page6" className="text-gray-700 hover:text-blue-500">
              Page 6
            </link>
            <link href="/page7" className="text-gray-700 hover:text-blue-500">
              Page 7
            </link>
            <link href="/page8" className="text-gray-700 hover:text-blue-500">
              Page 8
            </link>
            <link href="/cart" className="text-gray-700 hover:text-blue-500">
              🛒
            </link>
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