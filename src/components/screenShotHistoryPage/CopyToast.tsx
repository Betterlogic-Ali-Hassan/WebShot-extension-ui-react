import { IoIosCheckmarkCircle } from "react-icons/io";

const CopyToast = () => {
  return (
    <div className='relative w-full py-6 px-4'>
      <h2 className='font-semibold flex gap-2 text-[15px] items-center'>
        <IoIosCheckmarkCircle size={18} />
        Image copied to clipboard successfully!
      </h2>
    </div>
  );
};

export default CopyToast;
