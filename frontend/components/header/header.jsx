import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Header({ clicked, handleHover, handleOut}) {
  const handleMouseOver = () => {
    handleHover();
  };

  const handleMouseOut = () => {
    handleOut();
  };

  return (
    <nav className="bg-black flex flex-col items-center"> 
    {clicked ? ( 
      <div className="w-full flex flex-col justify-center items-center gap-6 py-3 border-b border-white/20"> 
        <div className="flex w-3/5 justify-between items-center">
            <div className='flex gap-9 items-center'>
              <Link href="/"><img src="/logo.png" alt="Logo" className='w-auto h-4'/></Link>
              <div className="flex ">
                <div className="relative text-xs font-normal">
                  <input
                    type="text"
                    className="w-72 py-2 pl-8 pr-4 rounded-full bg-white text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="Search for class"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 flex items-center">
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3 h-3 font-thin" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div >My class</div>
              <div className='flex items-center gap-2'>
                <span className='font-normal'>name</span>
                <FontAwesomeIcon icon={faChevronDown} className="w-2 h-2" />
              </div>
            </div>
        </div>
        <div className='flex w-3/5 justify-start items-center gap-10 text-sm '>
            <div className=' relative flex items-center gap-2'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOver}
            >
              <FontAwesomeIcon icon={faBars} className="w-4 h-4 font-semibold" /><span className='font-semibold text-gray-300'>Category</span>
              <div className='w-full absolute left-0 -bottom-[13px] border-b border-[#FF0000]'></div>
            </div>
            <div className='flex items-center relative text-gray-100 font-semibold'>
              <span>Promotion</span>
              <div className='h-1 w-1 absolute -right-1.5 bottom-1 bg-yellow-500 rounded-full'></div>
            </div>
            <div className='flex items-center text-gray-300 justify-end'>
              <span>News</span>
              
            </div>
            <div className='flex items-center text-gray-300'>
              <span>Events</span>
            </div>
        </div>
      </div>)
      
      : (
      <div className="w-full flex flex-col justify-center items-center gap-6 py-3"> 
        <div className="flex w-3/5 justify-between items-center">
            <div className='flex gap-9 items-center'>
              <img src="/logo.png" alt="Logo" className='w-auto h-4'/>
              <div className="flex ">
                <div className="relative text-xs font-normal">
                  <input
                    type="text"
                    className="w-72 py-2 pl-8 pr-4 rounded-full bg-white text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="Search for class"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 flex items-center">
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3 h-3 font-thin" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div >My class</div>
              <div className='flex items-center gap-2'>
                <span className='font-normal'>name</span>
                <FontAwesomeIcon icon={faChevronDown} className="w-2 h-2" />
              </div>
            </div>
        </div>
        <div className='flex w-3/5 justify-start items-center gap-10 text-sm '>
            <div className=' relative flex items-center gap-2'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOver}
            >
              <FontAwesomeIcon icon={faBars} className="w-4 h-4 font-semibold" /><span className='font-semibold text-gray-300'>Category</span>
            </div>
            <div className='flex items-center relative text-gray-100 font-semibold'>
              <span>Promotion</span>
              <div className='h-1 w-1 absolute -right-1.5 bottom-1 bg-yellow-500 rounded-full'></div>
            </div>
            <div className='flex items-center text-gray-300 justify-end'>
              <span>News</span>
              
            </div>
            <div className='flex items-center text-gray-300'>
              <span>Events</span>
            </div>
        </div>
      </div>
      )}

        <div
          className={`w-full flex justify-center overflow-hidden transition-all duration-300 ${
            clicked ? 'max-h-96' : 'max-h-0'
          }`}
          onMouseOver={handleHover}
          onMouseOut={handleOut}
        >
          <div className='flex w-3/5 justify-start text-gray-300 text-xs gap-16 py-9'>
            <div className='flex flex-col gap-3'>
            <Link href="/category/Programming">
              <div className='text-sm font-normal'>Programming</div>
            </Link>
              <div>Web Development</div>
              <div>AI</div>
              <div>Game Development</div>
              <div>Database Design</div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='text-sm font-normal'>Illustration</div>
              <div>Illustration</div>
              <div>Characters</div>
              <div>Concept Art</div>
              <div>Backgrounds</div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='text-sm font-normal'>Music Production</div>
              <div>Song Writing</div>
              <div>Music Arranging</div>
              <div>Music Mastering</div>
              <div>Music Composition</div>
            </div>
          </div>
        </div>
        
    </nav>

  );
};
