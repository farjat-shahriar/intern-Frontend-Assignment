import React from 'react'
import  './Process.css'
import Processcard from './Processcard'
import Fade from 'react-reveal/Fade';

const processlsit=[
  {
    id:'01',
     title:"Pre-Process",
     item1:"Collect Informations",
     item2:"Personas",
     item3:"SetUp Goals",
     item4:"Project Folder + Moodboard",
  },
  {
    id:'02',
     title:" Low Fidelity",
     item1:"Maps Screen Info",
     item2:"Possible States",
     item3:"Whiteboard",
     item4:"First DiagramFirst Diagram",
    



  },
  {
    id:'03',
     title:"Work/ Design",
     item1:"Moodboard",
     item2:"First Diagram",
     item3:" Write your copy",
     item4:"Intern Test",
  },
  
 
  {
    id:'04',
     title:"Assets & Delivery",
     item1:"Specifications",
     item2:"Diagram",
     item3:"Final Prototype",
     item4:"Video x Notes",
  },
  {
    id:'05',
     title:"Final & Test",
     item1:"Inspectlet x hotjar",
     item2:"Mixpanel",
     item3:"Google Analytics",
     item4:"Intercom",
  },
  {
    id:'06',
     title:"After Design",
     item1:"Goals",
     item2:"Workspace",
   
  },
  
]
const Process = () => {
  return (
    <div  className='process'>
      
   <label className='section-process'>Process + </label>
 <Fade bottom>
   <Processcard card={processlsit}/>
   </Fade>
    </div>
  )
}

export default Process