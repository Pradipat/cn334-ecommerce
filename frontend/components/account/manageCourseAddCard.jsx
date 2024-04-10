
function manageCourseAddCard() {
  return (
        <div className={`fixed w-[779px] bg-white px-[1rem] py-[1rem] rounded-[15px] max-h-[90%] overflow-auto `} >
        <div className="flex justify-between text-[#595959] text-[16px] font-light">
            <div className="flex flex-col">
                <div className="">Icon Image</div>
                <div className=" h-[185px] w-[185px] bg-[#C4C4C4]  rounded-[5px]"></div>
            </div>
            <div className="flex flex-col">
                <div className="">Background Image</div>
                <div className=" h-[185px] w-[517px] bg-[#C4C4C4]  rounded-[5px]"></div>
            </div>
            
        </div>
        <form action="/submit-form" method="post" className='flex flex-col gap-2 mt-2'>
            <div className='flex flex-col text-[#595959]'>
            <label htmlFor="name" className='text-[#595959)] font-light'>Class Name</label>
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
        <div className=" w-full py-2 bg-[rgb(237,32,64)] rounded-[4px] font-bold text-[14px] flex justify-center items-center text-white mt-4">Create</div>
    </div>
  )
}

export default manageCourseAddCard