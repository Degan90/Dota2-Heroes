

export default function Search({handleChange,handleSearch,search}){
    return(
        <div className="allSearch">
        <form onSubmit={handleSearch} action="/heroes">
           <input type="text"  id="seach" placeholder="Search" className="search" value={search} onChange={handleChange}/>
        </form>
  
      </div>
    )
}