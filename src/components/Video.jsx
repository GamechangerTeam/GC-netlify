import Video from "next-video";
// import video from "/video/GCLogo.mp4"

export default function VideoLogo() {
  return (
    <Video
      src="/video/GCLogo.mp4"
      type="video/mp4"
      autoPlay
      muted
      loop
      className="hero__video"
    />
  );
}
