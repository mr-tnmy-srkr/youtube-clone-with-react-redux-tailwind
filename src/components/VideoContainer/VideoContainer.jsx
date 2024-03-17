import axios from "axios";
import { useEffect, useState } from "react";
import VideoCard from "../../VideoCard/VideoCard";
import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=50&regionCode=IN&key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setVideo(res?.data?.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchingYoutubeVideo();
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {video?.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/watch?v=${
              typeof item.id === "object" ? item.id.videoId : item.id
            }`}
          >
            <VideoCard item={item} />
          </Link>
        );
      })}
    </div>
  );
};
export default VideoContainer;
