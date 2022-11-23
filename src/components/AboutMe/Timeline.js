import React from "react";
import TimelineItem from "./TimelineItem";

function Timeline({ timeline }) {
    return (

        <div className="flex flex-col  md:flex-row justify-start m-4 px-16">
            <div className="w-full ">
                <h1
                    id="timeline"
                    className="text-2xl font-bold  decoration-4 mb-5 text-thi5 dark:text-thi1 "


                >
                    Timeline
                </h1>
                {timeline.map((item) => (
                    <TimelineItem
                        key={item.year}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    );
}

export default Timeline;
