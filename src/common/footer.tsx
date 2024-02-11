import React from 'react'

const Footer=()=> {
  const footerBtns=[
    {name:"Help"},
    {name:"Status"},
    {name:"About"},
    {name:"Careers"},
    {name:"Blog"},
    {name:"Privacy"},
    {name:"Terms"},
  ]
  return (
    <footer>
      {footerBtns.map((btn:any, i)=><button key={i}>
        {btn.name}
      </button>)}
    
  </footer>
  )
}

export default Footer
