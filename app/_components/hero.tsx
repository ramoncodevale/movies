"use client"

import { apiKey } from "@/app/_utils/api-key"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"
import { useEffect, useState } from "react"

interface HeroProps {
  contentType: string
  href: string
}

interface Data {
  id: number
  title?: string
  name?: string
  poster_path?: string
  release_date?: string
  first_air_date?: string
  overview?: string
  backdrop_path?: string
}

const Hero = ({ contentType, href }: HeroProps) => {
  const [movie, setMovie] = useState<Data | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${contentType}/popular?api_key=${apiKey}&language=pt-BR`,
        )
        const data = await response.json()

        if (
          data.results &&
          Array.isArray(data.results) &&
          data.results.length > 0
        ) {
          setMovie(data.results[0])
        } else {
          console.warn("Nenhum resultado encontrado na API.")
        }
      } catch (error) {
        console.error("Erro ao buscar filmes:", error)
      }
    }

    fetchMovies()
  }, [contentType])

  if (!movie) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-white">
        Carregando...
      </div>
    )
  }

  return (
    <Link href={`${href}/${movie.id}`} className="relative h-screen w-full">
      <Image
        alt={movie.title || movie.name || "Filme"}
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        width={1200}
        height={700}
        className="h-full w-full rounded-[3px] border border-[#333333] object-cover object-center hover:border-white"
        priority
      />
      <div className="absolute inset-0 h-full w-full object-cover blur-sm filter" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-10 lg:px-40">
        <h1 className="text-4xl font-bold text-white">
          {" "}
          {movie?.title || movie?.name}
        </h1>
        <p className="line-clamp-3 text-center text-lg text-white/80">
          {" "}
          {movie?.overview}
        </p>

        <Button
          title="Ver detalhes"
          viewDetails={`Ver detalhes ${movie?.title || movie?.name}`}
        />
      </div>
    </Link>
  )
}

export default Hero
