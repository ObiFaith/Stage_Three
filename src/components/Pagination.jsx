import { arrow_left, arrow_right } from "../assets";

const Pagination = ({pageNo, setPageNo, maxPageNo }) => {
  return (
    <div className='flex gap-4 pt-9 items-center *:cursor-pointer justify-self-end col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4'>
      <img src={arrow_left} alt="arrow_left" onClick={() => setPageNo(pageNo => pageNo - 1)} />
      <div className="flex flex-wrap items-center gap-2.5">{[...Array(maxPageNo)].map((_, index) => (
        <div key={index} onClick={() => setPageNo(index + 1)}
          className={`rounded-lg cursor-pointer font-openSans text-base border px-2.5 py-1
          ${index + 1 === pageNo ? 'bg-green-400 text-white-400 border-green-400' : 'text-[#B34444] border-[#BFC5C4]'}`}>
            {index + 1}
        </div>))}
      </div>
      <img src={arrow_right} alt="arrow_right" onClick={() => setPageNo(pageNo => pageNo + 1)} />
    </div>
  )
}

export default Pagination