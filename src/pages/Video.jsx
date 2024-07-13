import React, { useRef, useState, useEffect } from 'react';
import vid from "../assets/vid.mov";
import back from "../assets/rewind.svg";
import forward from "../assets/forward.svg";
import settings from "../assets/settings.svg";
import video from "../assets/video.svg";
import maximize from "../assets/maximize.svg";
import { IoPlayOutline, IoPause } from "react-icons/io5";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

function Video() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);
    const [overlay, setoverlay] = useState(false);

    function overlayhandler() {
        setoverlay(!overlay)
        
    }

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleLoadedMetadata = () => setDuration(video.duration);
            const handleTimeUpdate = () => setCurrentTime(video.currentTime);

            video.addEventListener('loadedmetadata', handleLoadedMetadata);
            video.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, []);

    const videoHandler = (control) => {
        if (control === "play") {
            videoRef.current.play();
            setPlaying(true);
        } else if (control === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    const fastForward = () => {
        videoRef.current.currentTime += 5;
    };

    const revert = () => {
        videoRef.current.currentTime -= 5;
    };

    const handlePlaybackRate = (rate) => {
        videoRef.current.playbackRate = rate;
        setPlaybackRate(rate);
        document.getElementById("settings-menu").classList.add("hidden");
    };

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
                videoRef.current.msRequestFullscreen();
            }
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    const toggleMute = () => {
        videoRef.current.muted = !muted;
        setMuted(!muted);
    };

    const changeVolume = (event) => {
        const newVolume = event.target.value;
        videoRef.current.volume = newVolume;
        setVolume(newVolume);
        setMuted(newVolume === 0);
    };

    return (
        <div className='h-auto  p-2 lg:p-0  lg:h-screen xl:h-auto overflow-x-auto  relative my-20'>
            <div 
            style={{
                backgroundImage: `url(${video})`,
                backgroundSize: 'cover',
                backgroundPosition:"center",
            }}
            
            className="max-w-[1400px] border-[#FFE37E] border-4 clip overflow-hidden
            flex flex-col gap-5 items-center justify-between mx-auto ">
    
                <video 
                    ref={videoRef}
                    className="video"
                    src={vid}
                    controls={false}
                >


                    
          
                </video>
                <div className={overlay? "hidden" :'bg-[#000000c9] absolute  flex pt-4 justify-center top-[0px] w-full h-full clash font-extrabold  text-[10px] lg:text-[35px] right-[0px] text-white z-[49]'}>How the Pools work & How to buy tickets?</div>
                  <div className="flex z-50  lg:gap-3 w-full lg:w-auto  absolute bottom-0 lg:right-[60px] items-center py-3 ">
                <div className="controlsContainer flex items-center justify-around  w-[1200px] mx-auto  gap-3">
                    <div className="volumeContainer hidden lg:flex items-center gap-2">
                        {muted ? (
                            <FaVolumeMute className='text-white'  onClick={toggleMute} />
                        ) : (
                            <FaVolumeUp className='text-white' onClick={toggleMute} />
                        )}
                        <div className="volumeSliderContainer w-[100px] h-[5px] bg-[#ffffff7a] rounded-full relative">
                            <div 
                                className="volumeSlider bg-white rounded-full absolute top-0 h-full"
                                style={{ width: `${volume * 100}%` }}
                            ></div>
                            <div 
                                className="volumeThumb bg-white rounded-full absolute top-[-5px] w-[15px] h-[15px]"
                                style={{ left: `${volume * 100}%`, transform: 'translateX(-50%)' }}
                            ></div>
                            <input 
                                type="range" 
                                min="0" 
                                max="1" 
                                step="0.01" 
                                value={volume} 
                                onChange={changeVolume} 
                                className="volumeRange absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="controls flex gap-2  items-center justify-center">
                        <img className="controlsIcon w-[10px]  lg:w-[60px] lg:h-[60px]" alt="" onClick={revert} src={back} />
                        {playing ? (
                            <IoPause className='text-white w-[10px]  lg:w-[60px] lg:h-[60px]'     onClick={() => {videoHandler("pause");
                                overlayhandler()
                            }} />
                        ) : (
                            <IoPlayOutline className='text-white w-[10px]  lg:w-[60px] lg:h-[60px]'  onClick={() => {videoHandler("play");
                                overlayhandler()
                            }} />
                        )}
                        <img className="controlsIcon w-[10px]  lg:w-[60px] lg:h-[60px]" onClick={fastForward} alt="" src={forward} />

                        <div className="controls hidden lg:flex  gap-1 items-center justify-center relative">
                            <img className="controlsIcon--small w-[25px] cursor-pointer" alt="" src={settings} onClick={() => document.getElementById("settings-menu").classList.toggle("hidden")} />
                            <img className="controlsIcon w-[25px] cursor-pointer" alt="" src={maximize} onClick={toggleFullscreen} />

                            {/* Settings Menu */}
                            <div id="settings-menu" className="hidden absolute top-[-50px] right-0 bg-black text-white rounded p-2">
                                <div onClick={() => handlePlaybackRate(0.5)} className="cursor-pointer p-1">0.5x</div>
                                <div onClick={() => handlePlaybackRate(1)} className="cursor-pointer p-1">1x</div>
                                <div onClick={() => handlePlaybackRate(1.5)} className="cursor-pointer p-1">1.5x</div>
                                <div onClick={() => handlePlaybackRate(2)} className="cursor-pointer p-1">2x</div>
                            </div>
                        </div>
                    </div>

                    <div className="timecontrols hidden lg:flex items-center gap-1 lg:gap-4 text-white">
                        <p className="controlsTime">{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}</p>
                        <div className="time_progressbarContainer flex items-center w-[100px] h-[4px] lg:w-[400px] lg:h-[10px] rounded-full bg-[#ffffff7a]">
                            <div style={{ width: `${(currentTime / duration) * 100}%` }} className="time_progressBar rounded-full  relative flex h-[4px] lg:w-[10px] lg:h-[10px] bg-white">
                                <div className="w-[20px] h-[20px] hidden lg:block  bg-white rounded-full right-[-10px] absolute top-[-4px]"></div>
                            </div>
                        </div>
                        <p className="controlsTime">{Math.floor(duration / 60) + ":" + ("0" + Math.floor(duration % 60)).slice(-2)}</p>
                    </div>
                </div>
            </div>
            </div>

          
        </div>
    );
}

export default Video;
