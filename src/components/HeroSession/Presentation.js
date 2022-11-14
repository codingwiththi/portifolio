//Create Presentation Component for HeroSection
import { infoEN, infoPT } from "./Info";

function Presentation({ language }) {
    return (
        <>
            {language === "pt" ? (
                <div className="ml-4 p-2 ">
                    <p className="text-lg text-accent text-md mb-[22px] text-thi5">
                        {infoPT.subtitle}
                    </p>
                    <h1 className="text-thi5 font-[satisfy] text-4xl mb-5 leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                        {infoPT.title}
                    </h1>
                    <a
                        href="#_"
                        className="relative px-6 py-3 mt-16 font-bold text-white group"
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-thi3 rounded-md group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-thi5 rounded-md"></span>
                        <span className="relative">{infoPT.buttonText}</span>
                    </a>
                </div>
            ) : (
                <div className="ml-4 p-2 ">
                    <p className="text-lg text-accent text-md mb-[22px] text-thi5">
                        {infoEN.subtitle}
                    </p>
                    <h1 className="text-thi5 font-[satisfy] text-4xl mb-5 leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                        {infoEN.title}
                    </h1>
                    <a
                        href="#_"
                        className="relative px-6 py-3 mt-16 font-bold text-white group"
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-thi3 rounded-md group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-thi5 rounded-md"></span>
                        <span className="relative">{infoEN.buttonText}</span>
                    </a>
                </div>
            )}
        </>
    );
}

export default Presentation;
