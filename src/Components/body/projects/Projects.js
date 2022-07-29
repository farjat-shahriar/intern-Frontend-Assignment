import React from 'react'
import'./Project.css'
import Slider from "react-slick";
import NextArrow from '../../carousel/NextArrow'
import PrevArrow from '../../carousel/PrevArrow'
import Projectitem from './Projectitem'
import Separator from '../../separator/index';
import Fade from 'react-reveal/Fade';
const Projectdata=[
  {
    id:1,
    titil:"NewsApp",
    cover:"https://farjat-shahriar.github.io/portfolio/static/media/newsapp.67cc5e84dacdc825da05.jpg",
  },
  {
    id:2,
    titil:"Recipe Finder",
    cover:"https://farjat-shahriar.github.io/portfolio/static/media/1.1ec939f7e6b27bd20f92.jpg",
  },
  {
    id:3,
    titil:"Weather App",
    cover:"https://farjat-shahriar.github.io/portfolio/static/media/5-8.32f6990d9237b4186162.jpg",
  },
  {
    id:4,
    titil:"Restaurant Menu",
    cover:"https://farjat-shahriar.github.io/portfolio/static/media/recipe.e0a5db0b732107a86e1b.jpg",
  },
  {
    id:5,
    titil:"Resturent",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2020/10/EDAMAME-SALAD.jpg",
  },
  {
    id:6,
    titil:"Todo List",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2021/06/Meal-Kit-Lemon-Chicken.jpg",
  },
  
]
const settings = {
 
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>
};
const Projects = () => {
  return (
    <div className="project-collection">
      <div className="max-width">
     
      <div className="projects">Projects +</div>
      <Fade right> 
     <Slider{...settings}>
    
        
          {Projectdata.map((item)=>{
            return <Projectitem items={item}/>
         })}
        </Slider>
        </Fade>
         <a href='#drible' className='mydribble'>MY DRIBBLE</a>
      <Separator />
      </div>
    </div>
    
  )
}

export default Projects