const HeroVideo = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.15] opacity-30"
      >
        <source src="/galaxy-bg.mp4" type="video/mp4" />
      </video>
      <div className="aurora-bg" />
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
    </div>
  );
};

export default HeroVideo;
