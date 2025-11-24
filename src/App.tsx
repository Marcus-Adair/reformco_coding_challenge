import "./App.css";
import { AnimatedButtons } from "./components/AnimatedButtons";
import { CardScroller } from "./components/CardScroller";
import AnimatedHeader from "./components/AnimatedHeader";
// ----------------------------------------------- //

export default function App() {
  return (
    <main className="px-8 pt-8 md:pt-16 lg:pt-24 relative h-screen flex flex-col justify-between gap-6">
      <AnimatedHeader />

      <div className="grid grid-cols-2 w-full h-[300px] border border-[#6E9E8F4D]">
        {/* Left side */}
        <div className="flex flex-col justify-between gap-2 border-r border-[#6E9E8F4D] pt-4 pb-6 pl-6 pr-30">
          <span className="text-base md:text-lg lg:text-xl  text-[#30715D] tracking-tight ">
            Join hundreds of businesses who trust us to offer health insurance
            that works the way it should: affordable coverage that puts employes
            and their doctors in the driving seat.
          </span>

          <AnimatedButtons />
        </div>

        {/* Right side */}
        <CardScroller />
      </div>
    </main>
  );
}
