import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Header() {

  return (
    <nav className="bg-[#333333] flex flex-col justify-center items-center py-12"> 
        <div className="flex w-3/5 justify-start items-center">
            <img src="/logo.png" alt="Logo" className='w-auto h-4 mb-10'/>
        </div>

        <div className="flex border-b pb-5 border-neutral-50/25 text-neutral-300 font-light text-sm w-3/5 justify-start items-center">
            <div className='flex items-center'>
                <span className='pr-3'>Notice</span>
                <div className='w-0 h-3 border-r border-neutral-50/25'></div>
            </div>
            <div className='flex items-center'>
                <span className='px-3'>Privacy Policy</span>
                <div className='w-0 h-3 border-r border-neutral-50/25'></div>
            </div>
            <div className='flex items-center'>
                <span className='px-3'>FAQ</span>
                <div className='w-0 h-3 border-r border-neutral-50/25'></div>
            </div>
            <div className='flex items-center'>
                <span className='px-3'>Refund</span>
                <div className='w-0 h-3 border-r border-neutral-50/25'></div>
            </div>
            <div className='flex items-center'>
                <span className='px-3'>CookiePolicy</span>
            </div>
            

        </div>

        <div className="flex pt-5 text-neutral-200  font-thin text-sm  w-3/5 justify-start items-center gap-12">
            <div className='flex gap-2'><span className='text-neutral-500 font-medium '>Refund</span><span className='font-lighter'>refund@eduportal.com</span></div>
            <div className='flex gap-2'><span className='text-neutral-500 font-medium '>Help Center</span><span className='font-lighter'>help@eduportal.com</span></div>
        </div>

        <div className="flex justify-between pt-5 text-neutral-400 font-extralight text-sm w-3/5 items-center">
            <div className='flex flex-wrap justify-start w-3/5'>
                <div className='flex items-center'>
                    <span className='pr-2'>CN334 Inc.</span>
                    <div className='w-0 h-3 border-r border-neutral-50/25'></div>
                </div>
                <div className='flex items-center'>
                    <span className='px-2'>CEO akkharawoot  takhom</span>
                    <div className='w-0 h-3 border-r border-neutral-50/25'></div>
                </div>
                <div className='flex items-center'>
                    <span className='px-2'>Company Registration Number : 087-777-7777</span>
                    <div className='w-0 h-3'></div>
                </div>
                <div className='flex items-center'>
                    <span className='pr-2'>Thammasat Rangsit University</span>
                    <div className='w-0 h-3'></div>
                </div>
            </div>
            <div className='flex align-bottom gap-6'>
                <FontAwesomeIcon icon={faDiscord} className="w-10 h-10 font-thin" />
                <FontAwesomeIcon icon={faFacebook} className="w-10 h-10 font-thin"/>
                <FontAwesomeIcon icon={faInstagram} className="w-10 h-10 font-thin"/>
                <FontAwesomeIcon icon={faXTwitter} className="w-10 h-10 font-thin"/>
            </div>
        </div>
    </nav>
  );
};
