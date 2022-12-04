import { Fab } from "@mui/material";
import { Link } from "react-scroll";

export default function FloatingActionButton() {
    return (
        <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="relative px-6 py-3 mt-16 font-bold text-white group opacity-60 hover:opacity-100"
        >
            <Fab
                size="small"
                aria-label="scroll back to top"
                style={{
                    margin: 0,
                    top: "auto",
                    right: 20,
                    bottom: 20,
                    left: "auto",
                    position: "fixed",
                }}
                className="bg-thi5  text-thi3  hover:text-thi5 hover:bg-thi3 dark:bg-thi1 dark:text-thi4"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                    />
                </svg>
            </Fab>
        </Link>
    );
}
