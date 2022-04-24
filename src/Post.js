import "./Post.css";
import FaceIcon from "@mui/icons-material/Face";
import InputOption from "./InputOption";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

import SendIcon from "@mui/icons-material/Send";
import AvatarM from "./AvatarM";
const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="Post">
      <div className="Post__header">
        <AvatarM />
        <div className="Post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="Post__body">
        <p>{message}</p>
      </div>
      <div className="Post__buttons">
        <InputOption Icon={ThumbUpIcon} color="blue" title="Like" />
        <InputOption Icon={CommentIcon} color="blue" title="Comment" />
        <InputOption Icon={ShareIcon} color="blue" title="Share" />
        <InputOption Icon={SendIcon} color="blue" title="Send" />
      </div>
    </div>
  );
};
export default Post;
