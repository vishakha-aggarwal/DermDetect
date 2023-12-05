import React, { useState, useRef }  from 'react'
import { BASE_URL } from '../../constants/appConstants';
import "./home.css"
import Slideshow from '../slideshow/Slideshow';
import welcomeImage from '../../images/welcome.gif'
import About from '../About/About';

const Home = () => {

  const api_base_url = BASE_URL;
  const fileInputRef = useRef(null); // Create a ref for the input element

  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleFileChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      setImage(selectedImage);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      alert('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch(api_base_url, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data.prediction);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClearImage = () => {
    setImage(null);
    setImagePreview('');
    setPrediction('');
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset input value to clear the selected file
    }
  };

  return (
    <div className='home-container'>
      <div className='bannerCont' >
        <div className='bannerContent'>
          <div className='bannerContext'>Hey! Welcome to DermDetect,</div>
          <div className='bannerContext'>"A Timely Precision Platform for Timeless Skin"</div>
        </div>
        <img src={welcomeImage}></img>
      </div>
      <About />
      <div className='prediction'>
        <div className='home-heading'>Predict the skin disease by uploading image </div>
        <div className="box">
          {!imagePreview && <input type="file" onChange={handleFileChange} ref={fileInputRef}/>}
          {imagePreview && <img src={imagePreview} alt="Selected" style={{ width: '100%', height: '100%' }} />}
        </div>
        <div>
        {imagePreview && <button onClick={handleClearImage} className='clearImage'>Clear Image</button>}
        </div>

        <button className='predict-btn' onClick={handleSubmit}>Predict</button>
        {prediction && <p className='prediction-text'>Prediction: {prediction}</p>}
      </div>
    <Slideshow />
    </div>
  )
}

export default Home