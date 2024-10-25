//Libraries
import Image from "next/image";

//Images
import oliveLogo from "../Assets/Images/oliveLogo.png";

export default function Footer() {
  return (
    <div className="flex justify-center items-center h-[70px]">
      <div className="flex justify-between w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-[60vw] 2xl:w-[60vw]">
        <Image
          src={oliveLogo}
          alt="Olive Logo"
          className="w-[25vw] sm:w-[15vw] md:w-[13vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[5.5vw]"
        />
        <button className="btn bg-[#485424] text-white">Support</button>
      </div>
    </div>
  );
}
