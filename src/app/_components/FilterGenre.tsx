"use client"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useEffect, useState } from "react"
import { options } from "../constants/api";
import { Badge } from "@/components/ui/badge";
import { GenreType } from "../constants/types";
import Link from "next/link";


export const FilterGenre= () => {
  const [genres,setGenres] = useState([]);
  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch (
        `https://api.themoviedb.org/3/genre/movie/list?language=en`,
        options
      );
      const data = await response.json()
      setGenres(data.genres)
    };
    fetchGenres();
  },[])
  const onClickGenre = (genreId: number) => {
    //https://api.themoviedb.org/3/discover/movie?with_genres=16&language=en-US&page=1
  }
  return(
    <Popover>
      <PopoverTrigger>
        <div>Genre</div>
      </PopoverTrigger>
      <PopoverContent>
        {genres?.map((genre:GenreType) => (
       <Link href={`search/?with_genres=${genre.id}`}><Badge key={`genre-${genre.id}`}>{genre?.name}</Badge></Link>

      ))}</PopoverContent>
    </Popover>
  )
}