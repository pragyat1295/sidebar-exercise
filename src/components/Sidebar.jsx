// https://raw.githubusercontent.com/rushil959/mock-data/main/nav-items.json
//1) Fetch the data from the link and use the data to create a sidebar component which will render a list of navitems. 
//2) Each navitem represents a file/folder.
//3) The folders should be expanded by default and should toggle between expanded and collapsed state on click.
//4) All the files/folders listed in a folder should have some space on the left to clearly indicate the hierarchical structure.
//Assume that the number of levels of nesting is not fixed. The solution should support any level of nesting.

import { useEffect, useState } from "react";
import RenderChildren from "./RenderChildren";

export default function Sidebar() {
  const [files, setFiles] = useState([]);
  async function fetchData() {
    const response = await fetch('https://raw.githubusercontent.com/rushil959/mock-data/main/nav-items.json');
    const data = await response.json();
    setFiles(data?.navitems);
  }

  useEffect(()=> {
    fetchData();
  },[])

  return (
        <div className="sidebar">
          Sidebar
          <div style={{marginTop: '10px'}}>
            {
              files?.map((item, index)=> {
                return(
                  <div key={index}>
                    <RenderChildren file={item}/>
                  </div>
                )
              })
            }
          </div>
        </div>
    );
}

