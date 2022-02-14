import React from 'react'
import "./header.css";
import Logo from "../assets/6.png";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    color: 'white',
    fontSize: 16,
    padding: '6px 12px',
    // border: '1px solid',
    lineHeight: 1.5,
    // backgroundColor: '#0063cc',
    // borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        //   backgroundColor: '#0069d9',
        //   borderColor: '#0062cc',
        //   boxShadow: 'none',
    },
    '&:active': {
        //   boxShadow: 'none',
        //   backgroundColor: '#0062cc',
        //   borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});
const header = () => {
    return (

        <div className='bg'>

            <div className='header-main'>

                <div className='brand'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='main-menu'>
                    <ul>
                        <li>
                            <BootstrapButton>
                                Jobs
                            </BootstrapButton>
                            {/* <Button variant="text">Jobs</Button> */}
                        </li>
                        <li>
                            <BootstrapButton>
                                Blogs
                            </BootstrapButton>
                        </li>
                        <li>
                            <BootstrapButton>
                                Freelancers
                            </BootstrapButton>
                        </li>
                        <li>
                            <BootstrapButton>
                                Gigs
                            </BootstrapButton>
                        </li>
                        <li>
                            <Button variant="contained" color="error">Dashboard</Button>
                        </li>
                    </ul>

                </div>



            </div>
            {/* <div className='header-leftContent'>
                <h1 style={{ color: 'white' }}>
                    BlockChain-Based <br></br>Freelancer Platform
                </h1>
                <p>Loram has built a decades-long partnership<br></br> with the rail industry offering the most innovative portfolio of<br></br> equipment crewed by our expertly-trained operators and technicians. </p>
            </div> */}
            <div className='img-bg'>
            </div>
            <div className='container'>
                <h1>BlockChain Based Freelancer Platform</h1>
                {/* <p> lkdsjskldsdlksjdfkldfjsdflksdfm.,sdf,ms.mf,nsd.f,snfklsd.fsd./,f,mf.dsnflkfefm,dk,,d,msd</p> */}
               <div className='button'>
               <Button className='button1' variant="contained" color="error" >Explore Gigs</Button>
               <Button variant="contained" color="secondary">Find Jobs</Button>
               </div>
               
            </div>
        </div>


    )
}

export default header
