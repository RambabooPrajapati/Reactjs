
import React from 'react'

const Pages = ({totalPages, setCurrentPage}) => {
    let pages = [];
    for (let i=1; i<=totalPages; i++){
        pages.push(i)
    }
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "right", paddingRight: "30px", gap: "2px"}} >
      {pages.map((page, index)=>(
        <button style={{ padding: "5px", fontSize: "20px", backgroundColor: "lightblue", marginTop: "20px", marginBottom: "30px"}} key={index} onClick={()=>setCurrentPage(page)}>
            {page}
        </button>
      ))}
    </div>
  )
}

export default Pages
