import Image from "next/image"; // Import the Image component for optimized image loading
import profileImage from "@/components/assets/profile-image.jpeg"; // Import the profile image
import LogoImage from "@/components/assets/whatBytesLogo.png"; // Import the logo image

const Header = () => {
  return (
    <header className="bg-white border-b-2 max-w-screen p-4 flex justify-between items-center">
      {/* Logo Section */}
      {/* This section displays the app's logo and name. */}
      <div className="flex items-center group">
        <Image
          src={LogoImage} // The app logo image
          alt="WhatBytes Logo" // A description for the logo image
          height={15} // Set the height of the logo
          width={45} // Set the width of the logo
          className="group-hover:scale-95 group-hover:rotate-12 transition-all duration-200" // Add hover effects: scale and rotate
        />
        <h1 className="text-2xl font-bold flex group-hover:tracking-widest transition-all duration-200 ml-2">
          {/* The name of the app with hover animations */}
          <span className="group-hover:text-gray-600">What</span>{" "}
          <span className="group-hover:text-gray-500">Bytes</span>
        </h1>
      </div>

      {/* Profile Section */}
      {/* This section displays the user's profile picture and name. */}
      <div className="flex items-center border-2 border-gray-200 hover:bg-black hover:text-white rounded-lg p-1 transition-all duration-200">
        <Image
          src={profileImage} // The user's profile picture
          alt="User Profile" // A description for the profile image
          height={25} // Set the height of the profile picture
          width={25} // Set the width of the profile picture
          className="rounded-full object-cover" // Make the image circular and ensure it covers the frame nicely
        />
        <span className="ml-2 font-bold">Shivam Kumar Mallick</span> {/* Display the user's name */}
      </div>
    </header>
  );
};

export default Header;
