import React, { useRef } from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';


function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5e463819-a1c9-4218-906b-cce44675e0d3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form" onSubmit={onSubmit}>
                            <div className="form-field">
                                <label htmlFor="name"  >Enter your name*</label>
                                <input required type="text" id="name" name='name' />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email"  >Enter your email*</label>
                                <input required type="email" id="email" name='email' />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your Message*</label>
                                <textarea required name="message" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field f-button">
                                <button className='btn_send' type="submit">Submit Form</button>
                            </div>
                        </form>
                        <span>{result}</span>
                    </div>
                    <div className="right-content">
                        <ContactItem title={'Phone'} icon={phone} cont1={'+84-379174390'} />
                        <ContactItem title={'Email'} icon={email} cont1={'tuan292011@gmail.com'} />
                        <ContactItem title={'Address'} icon={location} cont1={'Thai Nguyen'} />

                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
                .btn_send{
                    background-color: var(--primary-color);
                    padding: .8rem 2.5rem;
                    color: white;
                    cursor: pointer;
                    display: inline-block;
                    font-size: inherit;
                    border: none;
                    /* text-transform: uppercase; */
                    position: relative;
                    transition: all .4s ease-in-out;
                    &::after{
                        content: "";
                        position: absolute;
                        width: 0;
                        height: .2rem;
                        transition: all .4s ease-in-out;
                        left: 0;
                        bottom: 0;
                        opacity: .7;
                    }
                    &:hover::after{
                        width: 100%;
                        background-color: var(--white-color);
                    }
                }
            }

            
        }
    }
`;

export default ContactPage
