import React from 'react'
import GetProjectsData from './fetchProjects'

const Projects = () => {
  const {loading,projects} = GetProjectsData();
  console.log(projects)

  if(loading){
    return (
      <section className='projects'>
        <h2>
          loading...
        </h2>

      </section>
    )
  }
  
  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {
          projects.map((project)=>{
            const {title,url,id,img} = project;
            return (
              <a href={url} key={id} target='_blank' rel='norefferrer' className='project'>
                <img src={img}  alt={title} className='img'/>
                <h5>{title}</h5>

              </a>
            )
          })
        }
      </div>
     
      
    </section>
  )
}

export default Projects
