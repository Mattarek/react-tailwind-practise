import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                    REACT.
                </h1>
                <p className='py-4'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                    odit ullam iste repellat consequatur libero reiciendis,
                    blanditiis accusantium.
                </p>
                <div className='flex justify-around md:w-full my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h2 className='font-medium text-gray-100'>Solutions</h2>
                    <ul>
                        <li className='py-2 text-xs'>Analytics</li>
                        <li className='py-2 text-xs'>Marketing</li>
                        <li className='py-2 text-xs'>Commerce</li>
                        <li className='py-2 text-xs'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-100'>Support</h6>
                    <ul>
                        <li className='py-2 text-xs'>Pricing</li>
                        <li className='py-2 text-xs'>Documentation</li>
                        <li className='py-2 text-xs'>Guides</li>
                        <li className='py-2 text-xs'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-100'>Company</h6>
                    <ul>
                        <li className='py-2 text-xs'>About</li>
                        <li className='py-2 text-xs'>Blog</li>
                        <li className='py-2 text-xs'>Jobs</li>
                        <li className='py-2 text-xs'>Press</li>
                        <li className='py-2 text-xs'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-100'>Legal</h6>
                    <ul>
                        <li className='py-2 text-xs'>Claim</li>
                        <li className='py-2 text-xs'>Policy</li>
                        <li className='py-2 text-xs'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
