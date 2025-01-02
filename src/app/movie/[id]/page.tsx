import Section from "@/app/_components/Section";
import { options } from "@/app/constants/api";

export default async function Page({
  params,
}: {
  params: { id: string };
}){
  const response = await fetch (`https://api.themoviedb.org/3/movie/${params.id}`
  ,options);
  const data = await response.json()
  return (
    <div>
      <h1>{data.title}</h1>
      <Section title="moreLikeThis" endpoint={`movie/${params.id}/recommendations`}/>
    </div>
  )
}