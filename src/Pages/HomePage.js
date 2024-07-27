import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Tuan Nguyen Duc</span></h1>
                <p>
                    <br></br>
                    You can call me Tean.
                    <br></br>
                    <br></br>
                    A web developer with a passion for creating beautiful, useful, and user-centered digital experiences. Currently I am just new in the field. But I'm always looking for new and creative ways to bring my clients' visions to life.
                    <br></br>
                    <br></br>
                    I believe design is about more than making things look pretty it's about solving problems and creating an intuitive, enjoyable experience for users.
                    <br></br>
                    <br></br>
                    Whether I'm working on a website, mobile app, or other digital product, I'm committed to design excellence and a user-centered mindset for every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/tuancutedapxetrenph0"
                        className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/NguyenDucTuan404"
                        className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/tuancutedapxetrenph0/"
                        className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:tuan292011@gmail.com"
                        className="icon i-mail">
                        <MailIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
