import Header from "@/app/components/MainPage/Header";
import Body from "@/app/components/MainPage/Body";

export default function Home() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <Header />
      <Body />
    </main>
  );
}
