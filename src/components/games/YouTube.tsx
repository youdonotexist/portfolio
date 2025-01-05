import React from 'react';

interface YouTubeEmbedProps {
    videoId: string; // YouTube video ID
    width?: string;  // Optional width
    height?: string; // Optional height
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, width = '560', height = '315' }) => {
    //Special thanks to https://jameshfisher.com/2017/08/30/how-do-i-make-a-full-width-iframe/
    return (
        <div
            style={{
                alignContent: "center",
                width: `${width}px`,
                position: "relative"
            }}>
            <div style={{
                position: "relative",
                paddingTop: "56.25%",
                width: `${width}px`,
                backgroundColor: "black",
                clear: "both",
                overflow: "clip" //Thanks to https://stackoverflow.com/questions/52159274/iframe-seems-to-break-css-layout
            }}>

                <iframe
                    src={`https://www.youtube.com/embed/videoseries?si=0E2HRsbGj5pREd0r&list=${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    width={width}
                    allowFullScreen
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: `${width}px`,
                        height: "100%"
                    }}/>

            </div>


        </div>
    );
};

export default YouTubeEmbed;