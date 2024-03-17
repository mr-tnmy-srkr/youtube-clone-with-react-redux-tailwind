import axios from "axios";
import { useEffect, useState } from "react";
import Avatar from "react-avatar";

const VideoCard = ({ item }) => {

   
    const [ytIcon, setYtIcon] = useState("");
    const getYoutubeChannelName = async () =>{
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${import.meta.env.VITE_API_KEY}`)
            setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getYoutubeChannelName();
    },[])


  return (
    <div className=" cursor-pointer my-2">
      <img
        className="rounded-xl w-full"
        src={item.snippet.thumbnails.medium.url}
        alt="ytVideo"
      />
      <div>
        <div className="flex mt-2">
          <div className="w-50px">
            <Avatar
              src={ytIcon}
              size={35}
              round={true}
            />
          </div>
          <div className="ml-2">
            <h1 className="font-bold">{item.snippet.title}</h1>
            <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
