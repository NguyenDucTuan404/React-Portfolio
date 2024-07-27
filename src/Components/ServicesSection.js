import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import web from '../img/web.png';


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard
                        image={web}
                        title={'Frontend Developer'}
                        paragraph={'Desire to become a professional Front End developer and create many beautiful interfaces, optimizing user experience.'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={web}
                            title={'Backend Developer'}
                            paragraph={'Desire to become a professional Back End developer building functions that meet customer requirements.'}
                        />
                    </div>
                    <ServiceCard
                        image={web}
                        title={'Fullstack Developer'}
                        paragraph={'Desire to become a professional Full Stack developer to design beautiful websites, optimized in both function and performance.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
