import { FaApple, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <div className='container mx-auto py-8 text-center'>
            <h2 className='text-[#E55473] text-3xl font-semibold my-4'>Flower<span className='text-white'>Shop</span></h2>
            <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            {/* Social Icons */}
            <div className='text-white flex items-center justify-center gap-4 text-2xl my-4'>
                <FaTwitter></FaTwitter>
                <FaFacebook></FaFacebook>
                <FaYoutube></FaYoutube>
                <FaLinkedin></FaLinkedin>
                <FaInstagram></FaInstagram>
                <FaApple></FaApple>
            </div>
            {/* Important Links */}
            <>
                <ul className='text-white flex flex-col md:flex-row justify-center items-center gap-6'>
                    <li><Link to='/shop' className='hover:underline'>Send Flowers</Link></li>
                    <li><Link to='/about' className='hover:underline'>What We Do</Link></li>
                    <li><Link to='/gallery' className='hover:underline'>Gallery</Link></li>
                    <li><Link to='/contacts' className='hover:underline'>Contacts</Link></li>
                </ul>
            </>
        </div>
    );
};

export default FooterComponent;