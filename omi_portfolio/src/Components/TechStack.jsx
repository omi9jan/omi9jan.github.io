import { SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import Styles from "../Styles/TechStack.css";


export default function TechStack() {
    return (
        <SimpleGrid bgGradient=
        'linear(to-b, blue.100, orange.100, orange.200, orange.300)' 
        padding="40px">
            <div className='techstack' id='techStack'>
            <div className='techstack-heading'>
                <h1>Technical Skills</h1>
                <div className='dash'>
                    <div className='hr-line'></div ><div className='hr-line-orange'></div><div className='hr-line'></div>
                </div>
            </div>
            
            <div className='techstack-container'>
            <div className='techstack-heading2'>
                {/* <h1>Frontend</h1> */}
            </div>
                <div className='techstack-frontend'>
                    <div>
                      <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png" alt="ok" />
                      <h4>CSS</h4>
                    </div>
                    <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_WSdtn3KLnPDYAHhVjp05Jrt_qgsfrLvyjf0ZCsGLCUTQD5It9-pjMbVGwkM9isiZXo&usqp=CAU" alt="ok" />
                       <h4>HTML</h4>
                    </div>
                    <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQK9gTb30FwDgp7Ss5lS1yumraT65MmdaR1J2ZLBa5WYjgzafpD8dac4lP-Kp3pWmebY&usqp=CAU" alt="ok" />
                       <h4>JAVASCRIPT</h4>
                    </div>
                    <div>
                       <img src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" alt="ok" />
                    <h4>REACT</h4>
                    </div>
                    <div>
                       <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042017/untitled-2_5.png?itok=IlsUnu37" alt="ok" />
                       <h4>GIT</h4>
                    </div>
                    <div>
                       <img src="https://e7.pngegg.com/pngimages/522/1018/png-clipart-purple-atom-redux-logo-icons-logos-emojis-tech-companies-thumbnail.png" alt="ok" />
                       <h4>REDUX</h4>
                    </div>
                    <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMmDkxQn-Czj1RIByReKqFXlN2SIRDgvuCQ&usqp=CAU" alt="ok" />
                       <h4>BOOTSTRAP</h4>
                    </div>
                    <div>
                       <img src="https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg" alt="ok" />
                       <h4>CHAKRA UI</h4>
                    </div>
                    <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgA12maOTY4A_4kASmwSFgAlTg_MCzk8r6w&usqp=CAU" alt="ok" />
                       <h4>NETLIFY</h4>
                    </div>
                    <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgejJN-rCHaZV5fCYU-_CApY-VWTcC3xqqg&usqp=CAU" alt="ok" />
                       <h4>TYPESCRIPT</h4>
                    </div><div>
                       <img src="https://user-images.githubusercontent.com/2730609/49487139-07392080-f7f6-11e8-96b1-e19e8be696c4.png" alt="ok" />
                       <h4>CYPRESS</h4>
                    </div>
                    

                </div>
                <div className='techstack-heading2'>
                {/* <h1>Backend</h1> */}
               </div>
                {/* <div className='techstack-backend'>
                    <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Uwiil7q-Oq_EMK41OxZNDc7q5SqEX8pMnA&usqp=CAU" alt="ok" />
                <h4>NODE JS</h4>

                    </div>
                    <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnyFUtltxXuEjXQNZtIkAik-XEOLujbu1bw&usqp=CAU" alt="ok" />
                <h4>MONGO DB</h4>

                    </div>
                    <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2Cl7TKrJZnqIcySObGhSToz0G8jAHbfryA&usqp=CAU" alt="ok" />
                <h4>EXPRESS JS</h4>

                    </div>


                </div> */}
            </div>
            {/* <div className='techstack-heading'>
                <h1>Projects</h1>
                <div className='dash'>
           <div className='hr-line'></div ><div className='hr-line-orange'></div><div className='hr-line'></div>

           </div>
            </div> */}

            
        </div>
        </SimpleGrid>
        
    )
}
