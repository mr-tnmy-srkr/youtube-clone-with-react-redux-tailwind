import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "../../VideoCard/VideoCard";
import { setHomeVideo } from "../../redux/features/appSlice/appSlice";

const VideoContainer = () => {
  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=50&regionCode=IN&key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVideoByCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchingYoutubeVideo();
    } else {
      fetchVideoByCategory(category);
    }
  }, [category]);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {video?.map((item) => {
        return (
          <Link
            to={`/watch?v=${
              typeof item.id === "object" ? item.id.videoId : item.id
            }`}
            key={typeof item.id === "object" ? item.id.videoId : video.id}
          >
            <VideoCard item={item} />
          </Link>
        );
      })}
    </div>
  );
};
export default VideoContainer;
