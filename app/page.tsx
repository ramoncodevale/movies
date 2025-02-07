"use client"

import { useEffect } from "react"
import Header from "./_components/header/page"

const Home = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=cef8fd32a7c11405be7acd7ae5e001d0&language=pt-BR`,
        )
        const data = await response.json()
        console.log(data) // Exibe os dados no console
      } catch (error) {
        console.error("Erro ao buscar filmes:", error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
