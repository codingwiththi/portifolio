import React, { useState } from "react";
import Presentation from "./Presentation";
import ProfileImage from "./ProfileImage";

function Hero({ language }) {
    return (
        <section
            id="home"

            className=" lg:h-[85vh] flex items-center portrait:items-start  lg:bg-cover lg:bg-center lg:bg-no-repeat  overflow-hidden  portrait:h-full portrait:pb-4"
        >
            <div className="container mx-auto ">
                <div className="flex portrait:flex-col items-center h-full ">
                    <div className="flex flex-col portrait:flex-row portrait:my-4 w-2/3 portrait:w-full items-center  ">
                        <Presentation language={language} />
                    </div>
                    <div className="flex flex-col portrait:flex-row w-1/3 portrait:w-full ">
                        <ProfileImage />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
