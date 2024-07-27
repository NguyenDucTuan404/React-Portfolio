import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';

import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'2020 - Now'}
                        title={'Senior student'}
                        subTitle={'Thai Nguyen University of Information Technology and Communications'}
                        text={'I am currently a senior student at Thai Nguyen University of Information and Communications Technology, majoring in Software Engineering. Although I do not have much knowledge about programming, I have actively learned and researched on social networking sites, and I have also actively completed major assignments in class with my classmates. To develop my skills and knowledge in the field of information technology. These experiences not only help me master professional knowledge but also improve my ability to work in a team, communicate and manage time.'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
