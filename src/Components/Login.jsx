import React from "react";

function Login() {
  const handdleClick = () => {
    const clientId = "1d81bc19435a44198a5497d4dee4dacf";
    const redirectUrls = "http://localhost:3000/";
    const apiUrl = "https//accounts.spotify.com.authorize";
    const scropes = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrls}&scrope=${scropes.join(
      " "
    )}&response_type=token&show_daialog=true`
  };
  return (
    <div
      className="
    bg-[#1db954] h-screen w-full flex justify-center items-center"
    >
      <div className="flex justify-center flex-col">
        <img
          src="https://seekvectors.com/files/download/spotify-logo-01.png"
          alt=""
          className="w-[400px] h-[300px] bg-[#1db954] object-cover "
        />
        <button
          className="bg-[black] text-[white] px-[80px] py-[20px] rounded-[80px]"
          onClick={handdleClick}
        >
          Connect Spotify
        </button>
      </div>
    </div>
  );
}

export default Login;
