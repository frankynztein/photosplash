import { Poppins } from "next/font/google";
import { SearchBar } from "./SearchBar";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '600', '700', '800'] });

const Main = () => {
  return (
    <section className={poppins.className}>
      <div className="main relative h-screen w-full bg-cover bg-center bg-no-repeat">      
        <div className="overlay absolute top-0 bottom-0 h-full w-full"></div>
        <div className="relative z-10 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-5xl font-semibold tracking-tight mb-4">PhotoSplash</h1>
          <p className="text-white text-xl font-light leading-5 mb-10">A free image resource from creators worldwide.<br/>Driven by creative minds everywhere.</p>
          <SearchBar inputStyles="w-full max-w-lg" buttonStyles="bg-black text-white" />
        </div>
      </div>
    </section>
  )
}

export { Main };