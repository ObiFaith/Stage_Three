import { Link } from "react-router-dom"
import { left_arrow, filter, input_search } from "../assets"

const BreadCrumb = ({search = false, backTo, name}) => {
  return (
    <div className={`container lg:px-24 py-8 ${search ? 'flex items-center gap-6 justify-between' : ''}`}>
      <div className={backTo ? "flex gap-10 items-center py-4" : ''}>
        {backTo && <Link to={backTo}><img src={left_arrow} alt="prev" /></Link>}
        <h2 className="lg:text-2xl md:text-xl text-lg text-green-400">{name}</h2>
      </div>
      {search && <div className="flex items-center lg:min-w-96 border px-5 border-green-400 rounded-2xl">
        <img src={input_search} alt="search" />
        <input style={{background: 'transparent'}} className="w-full indent-5 placeholder:text-base" type="text" placeholder="Search" />
        <img src={filter} alt="filter" />
      </div>}
    </div>
  )
}

export default BreadCrumb