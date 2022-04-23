import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import DescriptionIcon from "@mui/icons-material/Description";
// import { db } from "./firebase";
import Post from "./Post";
import { useEffect, useState } from "react";
const Feed = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {}, []);
  const sendPost = (e) => {
    e.preventDefault();
    // db.collection("posts").onSnapshot();
  };

  return (
    <div className="Feed">
      <div className="Feed__inputContainer">
        <div className="Feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="Feed_inputOptions">
          <InputOption title="Photo" Icon={InsertPhotoIcon} color="blue" />

          <InputOption title="Video" Icon={OndemandVideoIcon} color="yellow" />

          <InputOption title="Event" Icon={EventIcon} color="gray" />

          <InputOption
            title="Write article"
            Icon={DescriptionIcon}
            color="green"
          />
        </div>
      </div>

      {/* posts */}

      <div className="Feed__posts">
        <Post
          name="Sonny"
          description="intern at switch"
          message="hey, y'all #greatLife"
        />
        <Post
          name="Sonny"
          description="intern at switch"
          message="hey, y'all #greatLife"
        />
      </div>
    </div>
  );
};
export default Feed;
