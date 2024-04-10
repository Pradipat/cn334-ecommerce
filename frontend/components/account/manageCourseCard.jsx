'use client'
import React , {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

function ManageCourseCard({className, teacherName, teacherRole, img , price}) {
    const [isEdit , setIsEdit] = useState(false);

    const editHandle = () =>{
        setIsEdit(!isEdit);
    }
    return (
        <div className=" w-full bg-white text-black shadow-lg rounded-[13px] mb-5 px-2 py-2">
                <div className="flex items-center w-full relative">
                    <img src={img} className="h-[83px] w-[83px] object-cover rounded-[8px] mr-[10px]" alt="icon"></img>
                    <div className="flex flex-col w-full">
                        <div className="text-[14px] font-bold leading-5">{className}</div>
                        <div className="text-[14px] font-light text-[#595959]">{teacherRole}, {teacherName}</div>
                        <FontAwesomeIcon icon={faChevronDown} onClick={editHandle} className="w-5 h-5 text-[#929292] font-extralight absolute bottom-[10%] right-[1.5%]" />
                    </div>
                </div>

                <div className={`mt-[1rem] transition-all duration-500 ease-in-out overflow-hidden ${
                        isEdit ? 'max-h-[1000px]' : 'max-h-0 mt-[0rem]'
                }`}>
                    <form action="/submit-form" method="post" className='flex flex-col gap-2'>
                        <div className='flex flex-col'>
                        <label htmlFor="name" className='text-[#595959] font-light'>Class Name</label>
                        <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                            placeholder='Courese Name' type="text" id="name" name="name" required />
                        </div>
                        
                        <div className='flex justify-between'>
                        <div className='flex flex-col w-[49%]'>
                        <label htmlFor="mainCategory" className='text-[#595959] font-light'>Main Category</label>
                        <select className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' id="mainCategory" name="mainCategory">
                            <option value="">Select a Main Category</option>
                            <option value="Programming">Programming</option>
                            <option value="Illustration">Illustration</option>
                            <option value="Music Production">Music Production</option>
                        </select>
                        </div>

                        <div className='flex flex-col w-[49%]  '>
                        <label htmlFor="subCategory" className='text-[#595959] font-light'>Sub Category</label>
                        <select className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' id="subCategory" name="subCategory">
                            <option value="">Select a Sub Category</option>
                            <option value="Programming">Web Development</option>
                            <option value="AI">AI</option>
                            <option value="GameDevelopment">Game Development</option>
                            <option value="DatabaseDesign">Database Design</option>
                        </select>
                        </div>
                        </div>

                        <div className='flex flex-col'>
                        <label htmlFor="date" className='text-[#595959] font-light'>Available Time</label>
                        <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                            placeholder='Available Time' type='date' id="date" name="date" required />
                        </div>

                        <div className='flex flex-col'>
                        <label htmlFor="level" className='text-[#595959] font-light'>Level</label>
                            <select className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' id="level" name="level">
                                <option value="">Select a Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Basic">Basic</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Pro">Pro</option>
                            </select>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex flex-col w-[48%]'>
                            <label htmlFor="totalVideo" className='text-[#595959] font-light'>Total Videos</label>
                            <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                                placeholder='Total Videos' type="number" id="totalVideo" name="totalVideo" required />
                            </div>

                            <div className='flex flex-col w-[48%]'>
                            <label htmlFor="totalTime" className='text-[#595959] font-light'>Total Time (sec)</label>
                            <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                                placeholder='Total Time' type="number" id="totalTime" name="totalTime" required />
                            </div>
                        </div>
                            
                        <div className='flex justify-between'>
                            <div className='flex flex-col w-[48%]'>
                            <label htmlFor="teacherRole" className='text-[#595959] font-light'>Teacher Role</label>
                            <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                                placeholder='Teacher Role' type="text" id="teacherRole" name="teacherRole" required />
                            </div>

                            <div className='flex flex-col w-[48%]'>
                            <label htmlFor="teacherName" className='text-[#595959] font-light'>Teacher Name</label>
                            <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                                placeholder='Teacher Name' type="text" id="teacherName" name="teacherName" required />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                        <label htmlFor="desTopic" className='text-[#595959] font-light'>Description-topic</label>
                        <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                            placeholder='Description-topic' type="text" id="desTopic" name="desTopic" required />
                        </div>

                        <div className='flex flex-col'>
                        <label htmlFor="description" className='text-[#595959] font-light'>Description</label>
                        <textarea
                            className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1 h-max min-h-[15rem] resize-none text-left align-top'
                            placeholder='Description'
                            id="description"
                            name="description"
                            required
                        ></textarea>
                        </div>
                    </form>
                    <div className=" w-full py-2 bg-[rgb(237,32,64)] rounded-[4px] font-bold text-[14px] flex justify-center items-center text-white mt-4">Delete</div>
                    <div className=" w-full py-2 bg-[#2035ED] rounded-[4px] font-bold text-[14px] flex justify-center items-center text-white mt-4">Edit</div>
                </div>
        </div>
          
    )
  }
  
  export default ManageCourseCard