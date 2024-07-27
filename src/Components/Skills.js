import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';


function Skills() {
    return (
        <SkillsStyled>

            <Title title={'My Skills'} span={'my skills'} />
            <InnerLayout>
                <div className="skills">

                    <ProgressBar
                        title={'HTML5'}
                        width={'85%'}
                        text={'85%'}
                    />
                    <ProgressBar
                        title={'SCSS'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar
                        title={'JAVASCRIPT'}
                        width={'55%'}
                        text={'55%'}
                    />
                    <ProgressBar
                        title={'Node JS'}
                        width={'40%'}
                        text={'40%'}
                    />
                    <ProgressBar
                        title={'MySQL'}
                        width={'65%'}
                        text={'65%'}
                    />
                    <ProgressBar
                        title={'React JS'}
                        width={'40%'}
                        text={'40%'}
                    />
                    <ProgressBar
                        title={'Redux'}
                        width={'40%'}
                        text={'40%'}
                    />
                    <ProgressBar
                        title={'Express'}
                        width={'40%'}
                        text={'40%'}
                    />
                    <ProgressBar
                        title={'MongoDB'}
                        width={'40%'}
                        text={'40%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
