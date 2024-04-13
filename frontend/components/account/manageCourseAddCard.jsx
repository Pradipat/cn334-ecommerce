'use client'
import axiosInstance from "@/axios.config";
import React, { useEffect, useState } from 'react';

function manageCourseAddCard() {
    const [thumbnailImage, setThumbnailImage] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        console.log('Thumbnail Image:', thumbnailImage);
      }, [thumbnailImage]);

    const [title, setTitle] = useState('');
    const [descriptionTopic, setDescriptionTopic] = useState('');
    const [descriptionContent, setDescriptionContent] = useState('');
    const [price, setPrice] = useState(0);
    const [instructorName, setInstructorName] = useState('');
    const [instructorRole, setInstructorRole] = useState('');
    const [mainCategory, setMainCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [availableTime, setAvailableTime] = useState('');
    const [level, setLevel] = useState('');
    const [totalVideos, setTotalVideos] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const handleThumbnailChange = (e) => {
        setThumbnailImage(e.target.files[0]);
      };
      
    const handleBackgroundChange = (e) => {
        setBackgroundImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('title', title);
        formData.append('descriptionTopic', descriptionTopic);
        formData.append('descriptionContent', descriptionContent);
        formData.append('price', price);
        formData.append('instructorName', instructorName);
        formData.append('instructorRole', instructorRole);
        formData.append('mainCategory', mainCategory);
        formData.append('subCategory', subCategory);
        formData.append('availableTime', availableTime);
        formData.append('level', level);
        formData.append('totalVideos', totalVideos);
        formData.append('totalTime', totalTime);
        // Append other form data...
        if (thumbnailImage) {
          formData.append('thumbnailImage', thumbnailImage);
        }
        if (backgroundImage) {
          formData.append('backgroundImage', backgroundImage);
        }
      
        try {
          const response = await axiosInstance.post('/courses/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <div className={`fixed w-[779px] bg-white px-[1rem] py-[1rem] rounded-[15px] max-h-[90%] overflow-auto text-[#595959] `} >
        <form className='flex flex-col gap-2 mt-2'>
            <div className="flex justify-between text-[#595959] text-[16px] font-light">
                <div className="flex flex-col">
                    <div className="">Thumbnail Image</div>
                    <div className=" h-[185px] w-[185px] bg-[#C4C4C4]  rounded-[5px] overflow-hidden">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                            className='w-full bg-orange-600 h-full inset-0 opacity-0 cursor-pointer'
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="">Background Image</div>
                    <div className=" h-[185px] w-[517px] bg-[#C4C4C4]  rounded-[5px]">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleBackgroundChange}
                            className='w-full bg-orange-600 h-full inset-0 opacity-0 cursor-pointer'
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col text-[#595959]'>
            <label htmlFor="name" className='text-[#595959)] font-light'>Class Name</label>
            <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                placeholder='Courese Name' type="text" id="name" name="name"  required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            
            <div className='flex justify-between'>
            <div className='flex flex-col w-[49%]'>
            <label htmlFor="mainCategory" className='text-[#595959] font-light'>Main Category</label>
            <select className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' id="mainCategory" name="mainCategory"
            onChange={(e) => setMainCategory(e.target.value)}>
                <option value="">Select a Main Category</option>
                <option value="Programming">Programming</option>
                <option value="Illustration">Illustration</option>
                <option value="Music Production">Music Production</option>
            </select>
            </div>

            <div className='flex flex-col w-[49%]  '>
            <label htmlFor="subCategory" className='text-[#595959] font-light'>Sub Category</label>
            <select className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' id="subCategory" name="subCategory"
            onChange={(e) => setSubCategory(e.target.value)}>
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
                placeholder='Available Time' type='date' id="date" name="date" required 
                onChange={(e) => setAvailableTime(e.target.value)}
                />
            </div>

            <div className='flex justify-between'>
                <div className='flex flex-col w-[48%]'>
                <label htmlFor="level" className='text-[#595959] font-light'>Level</label>
                <select className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' id="level" name="level"
                onChange={(e) => setLevel(e.target.value)}>
                    <option value="">Select a Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Basic">Basic</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Pro">Pro</option>
                </select>
                </div>

                <div className='flex flex-col w-[48%]'>
                <label htmlFor="teacherName" className='text-[#595959] font-light'>Price</label>
                <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                    placeholder='Teacher Name' type="text" id="teacherName" name="teacherName" required 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                    />
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex flex-col w-[48%]'>
                <label htmlFor="totalVideo" className='text-[#595959] font-light'>Total Videos</label>
                <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                    placeholder='Total Videos' type="number" id="totalVideo" name="totalVideo" required
                    value={totalVideos}
                    onChange={(e) => setTotalVideos(e.target.value)} />
                </div>

                <div className='flex flex-col w-[48%]'>
                <label htmlFor="totalTime" className='text-[#595959] font-light'>Total Time (sec)</label>
                <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                    placeholder='Total Time' type="number" id="totalTime" name="totalTime" required
                    value={totalTime}
                    onChange={(e) => setTotalTime(e.target.value)}  />
                </div>
            </div>
                
            <div className='flex justify-between'>
                <div className='flex flex-col w-[48%]'>
                <label htmlFor="teacherRole" className='text-[#595959] font-light'>Teacher Role</label>
                <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                    placeholder='Teacher Role' type="text" id="teacherRole" name="teacherRole" required
                    value={instructorRole}
                    onChange={(e) => setInstructorRole(e.target.value)}  />
                </div>

                <div className='flex flex-col w-[48%]'>
                <label htmlFor="teacherName" className='text-[#595959] font-light'>Teacher Name</label>
                <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                    placeholder='Teacher Name' type="text" id="teacherName" name="teacherName" required 
                    value={instructorName}
                    onChange={(e) => setInstructorName(e.target.value)} 
                    />
                </div>
            </div>

            <div className='flex flex-col'>
            <label htmlFor="desTopic" className='text-[#595959] font-light'>Description-topic</label>
            <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                placeholder='Description-topic' type="text" id="desTopic" name="desTopic" required 
                value={descriptionTopic}
                onChange={(e) => setDescriptionTopic(e.target.value)} />
            </div>

            <div className='flex flex-col'>
            <label htmlFor="description" className='text-[#595959] font-light'>Description</label>
            <textarea
                className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1 h-max min-h-[15rem] resize-none text-left align-top'
                placeholder='Description'
                id="description"
                name="description"
                required
                value={descriptionContent}
                onChange={(e) => setDescriptionContent(e.target.value)} 
            ></textarea>
            <input className=" w-full py-2 bg-[rgb(237,32,64)] rounded-[4px] font-bold text-[14px] flex justify-center items-center text-center text-white mt-4"
                type="submit"
                value="Create"
                onClick={handleSubmit}
            />
            </div>
        </form>
    </div>
  )
}

export default manageCourseAddCard