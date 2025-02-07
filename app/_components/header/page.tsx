import Link from "next/link"

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-around bg-dark-bg p-8">
        <p className="text-base font-semibold text-white">Cine Sphere</p>
        <ul className="flex gap-12">
          <li>
            <Link
              className="text-base font-semibold text-white hover:text-glass"
              href="/"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-semibold text-white hover:text-glass"
              href="/"
            >
              Filmes
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-semibold text-white hover:text-glass"
              href="/"
            >
              Séries
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-semibold text-white hover:text-glass"
              href="/"
            >
              Lançamentos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
