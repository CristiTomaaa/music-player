const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
