import React from "react";
import Button from 'react-bootstrap/Button';
function ProductDetails()
{
  return(
<div style={{margin:"20px 200px 80px 140px",border:"10px solid black",borderRadius:"40px",padding:"10px 10px 10px 10px"}}>
  <center>
  <img width='300px' height='350px' src="https://static.toiimg.com/thumb/resizemode-4,msid-80635321,imgsize-200,width-1200,imgv-2/80635321.jpg" alt="Product Image" />
   <h2>Iphone 14 pro max</h2>
    <p>
Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously, Rated IP68 (Maximum Depth of 6 Metres Upto 30 Minutes) Under IEC Standard 60529, Enabled by TrueDepth Camera for Facial Recognition, Emergency SOS, Crash Detection, Digital Compass, Cellular, iBeacon Micro Location, FaceTime Video Calling Over Cellular or Wi-Fi, FaceTime HD (1080p) Video Calling Over 5G or Wi?Fi, Share Experiences like Movies, TV, 
Music and Other Apps in a FaceTime Call with SharePlay, Screen Sharing, Portrait Mode in FaceTime Video, Spatial Audio, Voice Isolation and Wide Spectrum Microphone Modes, Optical Zoom with Rear-Facing Camera, FaceTime Audio, Voice over LTE (VoLTE), Wi-Fi Calling, Screen Sharing, Spatial Audio, Voice Isolation and Wide Spectrum Microphone Modes, Spatial Audio Playback</p>
    <div>
      <p>Rs.1,49,000.00</p>
      <p>[STOCK LEFT: 500]</p>
      <input style={{margin:"0px 10px 0px 0px",width:"35px",border:"3px"}}type={"number"}/>
      <Button style={{height:"35px",background:"black",color:"white",borderRadius:"3px"}} variant="dark">
          BUY NOW
        </Button>{' '}
    </div>
  </center>
</div>
  );
};
export default ProductDetails;