import React, { useState } from "react";
import Presentation from "./Presentation";
import ProfileImage from "./ProfileImage";

function Hero({ language }) {
    return (
        <section
            id="home"
            className=" lg:h-[85vh] flex items-center  lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
        >
            <div className="container mx-auto h-full ">
                <div className="flex items-center h-full ">
                    <div className="flex-1 flex flex-col items-center lg:items-center ">
                        <Presentation language={language} />
                    </div>
                    <ProfileImage />
                </div>
            </div>
        </section>
    );
}

export default Hero;
