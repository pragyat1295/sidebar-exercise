export default function RenderChildren({file}) {
    return (
    <div style={{marginLeft: '15px'}}>
      {file?.name}
      {
        file?.children && file?.children?.map((item, index) => {
          return(
            <div key={index} >
              <RenderChildren file={item}/>
            </div>
          )
          
          
        })
      }
    </div>
  )
}