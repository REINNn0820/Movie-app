import MovieCard from "./_components/MovieCard";
import Section from "./_components/Section";
 
export default async function Home() {
  
  return (
    <div className="">
      <Section title ="Upcoming" endpoint="upcoming" />
      <Section title ="Popular" endpoint="popular"/>
      <Section title ="Top rated" endpoint="top_rated"/>
    </div>
  );
}
 
 