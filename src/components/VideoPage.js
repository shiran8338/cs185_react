import React, { useState } from 'react';
import './style.css';

import video1 from './videos/video1.mp4';
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';
import video4 from './videos/video4.mp4';
import video5 from './videos/video5.mp4';

function Videos() {

    var [overlayVideo, setOverlayVideo] = useState(1);
    var [overlayStatus, toggleOverlay] = useState(false);
    var [topButtonStatus, toggleTopButton] = useState(false);

    function spawnOverlay(videoNumber) {
        setOverlayVideo(videoNumber);
        toggleOverlay(true);
    }

    function despawnOverlay() {
        toggleOverlay(false);
    }

    window.onscroll = () => scrollFunction();

    function scrollFunction() {
        var scrollTop = window.scrollY;
        var documentHeight = document.body.offsetHeight;
        var windowHeight = window.innerHeight;
        var scrollPercent = 100 * scrollTop / (documentHeight - windowHeight)
        if (scrollPercent > 25) {
            toggleTopButton(true);
        }
        else {
            toggleTopButton(false);
        }
    }

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (

        <div>

            <div className="grid_container">
                <div className="grid_item">
                    <img src={video1} alt="" onClick={() => spawnOverlay(1)} />
                </div>
                <div className="modal" alt="" onClick={() => despawnOverlay()} style={{ display: overlayStatus && overlayVideo === 1 ? "block" : "none" }}>
                    <div className="modal_video">
                        <iframe
                            width="100%"
                            height="700px"
                            src= {video1}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className="grid_item">
                    <img className="video_thumbnail" alt="" src={video2} onClick={() => spawnOverlay(2)} />
                </div>
                <div className="modal" alt="" onClick={() => despawnOverlay()} style={{ display: overlayStatus && overlayVideo === 2 ? "block" : "none" }}>
                    <div className="modal_video">
                        <iframe
                            width="100%"
                            height="700px"
                            src={video2}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className="grid_item">
                    <img className="video_thumbnail" alt="" src={video3} onClick={() => spawnOverlay(3)} />
                </div>
                <div className="modal" alt="" onClick={() => despawnOverlay()} style={{ display: overlayStatus && overlayVideo === 3 ? "block" : "none" }}>
                    <div className="modal_video">
                        <iframe
                            width="100%"
                            height="700px"
                            src={video3}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className="grid_item">
                    <img className="video_thumbnail" alt="" src={video4} onClick={() => spawnOverlay(4)} />
                </div>
                <div className="modal" alt="" onClick={() => despawnOverlay()} style={{ display: overlayStatus && overlayVideo === 4 ? "block" : "none" }}>
                    <div className="modal_video">
                        <iframe
                            width="100%"
                            height="700px"
                            src={video4}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className="grid_item">
                    <img className="video_thumbnail" alt="" src={video5} onClick={() => spawnOverlay(5)} />
                </div>
                <div className="modal" alt="" onClick={() => despawnOverlay()} style={{ display: overlayStatus && overlayVideo === 5 ? "block" : "none" }}>
                    <div className="modal_video">
                        <iframe
                            width="100%"
                            height="700px"
                            src={video5}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                
            </div>

            <button onClick={() => backToTop()} id="top_button" title="To Top" style={{ display: topButtonStatus ? "block" : "none" }}>Top</button>

        </div>

    )

}

export default Videos;