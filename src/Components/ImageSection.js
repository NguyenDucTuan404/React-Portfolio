import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span>Tuan Nguyen Duc</span></h4>
                <p className="paragraph">
                    Even though I am just a novice full-stack developer, I will definitely try to turn ideas into creative web applications. Explore new projects and articles, I will try to show my expertise in React.js, Node.Js and web development.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Tuan Nguyen Duc</p>
                        <p>: 22</p>
                        <p>: Viet Nam </p>
                        <p>: VietNamese, English </p>
                        <p>: Thai Nguyen</p>
                        <p>: Student</p>
                    </div>
                </div>
                <div className='button'>
                    <PrimaryButton title="Resume EN" href={`${process.env.PUBLIC_URL}/resumeEN.pdf`} />
                    <PrimaryButton title="Resume VI" href={`${process.env.PUBLIC_URL}/resumeVI.pdf`} />
                </div>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
           
        }
         .button{
                display: flex;
                justify-content: space-around;
            }
    }
`;
export default ImageSection;
