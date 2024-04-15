// manageCourseAddCard.jsx
'use client'
import axiosInstance from "@/axios.config";
import React, { useEffect, useState } from 'react';

function manageCourseAddCard({ addHandleF }) {
    // Create Courese
    const [thumbnailImagePreview, setThumbnailImagePreview] = useState(null);
    const [backgroundImagePreview, setBackgroundImagePreview] = useState(null);

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
    const [thumbnailImage, setThumbnailImage] = useState(null); 
    const [backgroundImage, setBackgroundImage] = useState(null);
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        setThumbnailImage(file); // Store the image file
        setThumbnailImagePreview(URL.createObjectURL(file));
    };
    
    const handleBackgroundChange = (e) => {
        const file = e.target.files[0];
        setBackgroundImage(file); 
        setBackgroundImagePreview(URL.createObjectURL(file));
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
        formData.append('thumbnailImage', thumbnailImage); // Image file
        formData.append('backgroundImage', backgroundImage); // Image file

        try {
            const response = await axiosInstance.post('/courses/', formData);
            console.log('Course created:', response.data);
            addHandleF();
            alert("Course Created");
            // Handle successful course creation (e.g., redirect, display success message)
        } catch (error) {
            console.error('Error creating course:', error);
            // Handle error (e.g., display error message)
        }
    };

    // UI
    const [subCategoryUI, setSubCategoryUI] = useState([]);
    const [mainCategoryUI, setMainCategoryUI] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/categories/');
                setMainCategoryUI(response.data.category); 
            } catch (error) {
                console.error('Error getting category:', error);
                // Handle error (e.g., display error message)
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/categories/subcategories/${mainCategory}`);
                setSubCategoryUI(response.data.subCategories); 
            } catch (error) {
                console.error('Error getting category:', error);
                // Handle error (e.g., display error message)
            }
        };

        fetchData();
    }, [mainCategory]);

    useEffect(() => {
        console.log('Categories updated:', subCategoryUI);
    }, [subCategoryUI]);

    return (
        <div className={`fixed w-[779px] bg-white px-[1rem] py-[1rem] rounded-[15px] max-h-[90%] overflow-auto text-[#595959] `} >
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-2'>
            <div className="flex justify-between text-[#595959] text-[16px] font-light">
                <div className="flex flex-col">
                    <div className="">Thumbnail Image</div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleThumbnailChange}
                        className='mb-1 w-full'
                    />
                    <div className=" h-[185px] w-[185px] bg-[#C4C4C4]  rounded-[5px] overflow-hidden">
                        {thumbnailImagePreview && (
                            <img src={thumbnailImagePreview} alt="Thumbnail Preview" className="w-full h-full object-cover" />
                        )}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="">Background Image</div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleBackgroundChange}
                        className='mb-1 w-full'
                    />
                    <div className=" h-[185px] w-[517px] bg-[#C4C4C4]  rounded-[5px] overflow-hidden">
                        {backgroundImagePreview && (
                            <img src={backgroundImagePreview} alt="Thumbnail Preview" className="w-full h-full object-cover" />
                        )}
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
                {mainCategoryUI.map((category) => (
                <option key={category._id} value={category.name}>
                    {category.name}
                </option>
                ))}
            </select>
            </div>

            <div className='flex flex-col w-[49%]  '>
            <label htmlFor="subCategory" className='text-[#595959] font-light'>Sub Category</label>
            <select className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' id="subCategory" name="subCategory"
            onChange={(e) => setSubCategory(e.target.value)}>
                <option value="">Select a Sub Category</option>
                {subCategoryUI.map((category , index) => (
                <option key={index} value={category}>
                    {category}
                </option>
                ))}
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
                <label htmlFor="price" className='text-[#595959] font-light'>Price</label>
                <input className='border rounded-[5px] border-[#A0A0A0] font-extralight px-4 py-1' 
                    placeholder='Teacher Name' type="number" id="price" name="price" required 
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
            />
            </div>
        </form>
    </div>
  )
}

export default manageCourseAddCard