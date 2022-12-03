import Image from "next/image";
//import image-01.png from the public/imgs folder
import Img from "../../assets/image-01.png";
function ProfileImage() {
    return (
        <div className=" min-h-screen portrait:min-h-full lg:flex flex-1 justify-center items-center ">
            <div className="relative w-full max-w-lg items-center flex flex-row justify-center align-middle ">
                <div className="z-0 absolute top-0  w-80 h-80 bg-thi3 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
                {/* <div className="z-0 absolute top-0 right-10 w-72 h-72 bg-thi3 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="z-0 absolute -bottom-8 left-20 w-72 h-72 bg-thi5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
                <div className="z-50 rounded-full overflow-hidden w-72 h-72 bg-thi4 border-solid border-thi5 border-2">
                    <div className="opacity-100">
                        <Image
                            src={Img}
                            alt=""
                            width={300}
                            height={300}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileImage;
