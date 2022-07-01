import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='mt-36'>
            <footer className="footer footer-center p-2 bg-[#112B3C] text-base-content">
                <div>
                <div className='mb-5 lg:mb-0'>
                        <div className='flex'>
                            <a className='lg:ml-0' target='_blank' href="https://github.com/raselcsedev"><img className='hover:scale-110' src="images/icons/github.svg" alt="my GitHub" /></a>
                            <a className='lg:ml-0' target='_blank' href="https://www.linkedin.com/in/md-rasel-1a9957174/"><img className='hover:scale-110' src="images/icons/linkedin.svg" alt="my LinkedIn" /></a>
                            <a className='lg:ml-0' target='_blank' href="https://www.facebook.com/raselrezwan001"><img className='hover:scale-110' src="images/icons/facebook.svg" alt="my Facebook" /></a>

                        </div>
                    </div> 
                    <p className='text-white'>Copyright © {currentYear} - all right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;