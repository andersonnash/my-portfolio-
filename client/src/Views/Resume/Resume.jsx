import React from 'react'
import PDF from '../Resume/NashA_Resume_SE.pdf'
const Resume = () => {
  return (
    <div className='flex justify-center shadow-2xl'>
      {/* <img src='https://i.imgur.com/EQh7l6e.jpg' /> */}
      <div className="resume-container">
        <embed className="pdf-import" src={PDF} />
        
        <h3 className="download-text">Download Resume:</h3>
        
      <div className="resume-downloads">
        <div className="pdf-wrapper"> 
          <a className="pdf-download"
            href={PDF}
            rel="noreferrer"
            target="_blank"
            filename="Resume/NashA_Resume_SE.pdf" download>
              PDF
          </a>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Resume
