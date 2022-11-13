import Image from "next/image";
//import image-01.png from the public/imgs folder
import WomanImg from "../../public/imgs/image-01.png";
function ProfileImage() {
  return (
    <div className=" min-h-screen lg:flex flex-1 justify-center items-center  ">
      <div className="relative w-full max-w-lg px-16">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-thi3 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-thi2 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        {/* <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-thi4 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div> */}
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-thi4 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="opacity-100 ">
          <Image
            src={WomanImg}
            alt=""
            layout="fixed"
            width={300}
            height={300}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
