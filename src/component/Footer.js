
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <>
    <div className="flex justify-center -translate-y-[1px]">
    <div className="w-3/4">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
    </div>
  </div>
  <div className="flex justify-center -translate-y-[1px]">
    <div className="w-3/4">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
    </div>
  </div>
    <div className=" mt-2 relative border-t bg-[#0d1224] border-[#353951] text-white ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <span className="text-[#16f2b3]">Sourabh Kumar</span>
          </p>
         
        </div>
      {/* </div> */}
    </div >
    </>
  );
};

export default Footer;