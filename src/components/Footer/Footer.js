import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer({ menu }) {
    return (
        <footer className="bg-thi5 text-thi1">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between">
                    <div className="mt-8 flex justify-center space-x-6  ">
                        {menu?.map((item) => (
                            <a
                                className="text-thi1 hover:text-thi3"
                                href={item.href}
                                key={item.name}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center space-x-6  ">
                        <p className="text-thi1">© 2022 Coding With Thi</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
