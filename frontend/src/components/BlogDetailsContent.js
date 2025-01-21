import React from 'react'
import './BlogDetailsContent.css'
import BlogImage from '../assets/BlogImage.png'

const BlogDetailsContent = () => {
  const data ='Lorem ipsum odor amet, consectetuer adipiscing elit. Duis pellentesque quam cursus consectetur nulla a fermentum. Velit mauris ridiculus convallis eu, mus vel habitasse. Quisque habitant vitae finibus in ante leo. Congue felis finibus neque, metus posuere hendrerit. Sit aliquam sed commodo senectus; at sed metus. Laoreet vulputate sit ante nibh sollicitudin curabitur purus penatibus nullam. Nullam tincidunt vel accumsan porttitor hac, nascetur metus fusce ultricies. Class tristique auctor proin lacus aliquet sem pharetra. Ligula duis sagittis mollis parturient rhoncus.Nam dignissim arcu himenaeos metus fringilla pharetra imperdiet imperdiet. Facilisi vehicula malesuada facilisi eu sodales taciti consectetur. Aliquam ridiculus sodales sagittis justo ullamcorper morbi parturient orci. Nunc himenaeos fringilla aptent posuere imperdiet. Sodales sodales in parturient consectetur libero viverra ligula eleifend. Interdum eleifend molestie id netus aenean fringilla dolor varius. Augue rhoncus conubia nisi rhoncus eleifend; cras consequat nullam.'

  function splitStringData(data) {
    // Check if the input is a valid string
    if (typeof data !== 'string') {
        throw new Error('Input data must be a string');
    }

    // Get the length of the string
    const length = data.length;

    // Calculate the midpoint to divide the string into two parts
    const midpoint = Math.ceil(length / 2);

    // Slice the string into two parts
    const firstPart = data.slice(0, midpoint);
    const secondPart = data.slice(midpoint);

    // Return the two parts as an array
    return [firstPart, secondPart];
}
const splitData= splitStringData(data)


  return (
    <div className='blogMainContent'>
      <div className='blogImageContent'>
        <img src={BlogImage}></img>
      </div>
      <div className='container'>
        <div class="part">
          <p>{splitData[0]}</p>
        </div>
      <div className='part'>
        <p>{splitData[1]}</p>
      </div>
      </div>
      <hr/>
      <div className='blogauthor'>
        <p><b>Creator <br/>Date</b></p>
      </div>
    </div>
  )
}

export default BlogDetailsContent
