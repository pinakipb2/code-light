import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Room ID and username variables
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  // Generate a new Room ID
  const createNewRoom = (e) => {
    e.preventDefault();
    // Generate a new and unique ID
    const id = uuidV4();
    setRoomId(id);
    toast.success('Created a New Room');
  };

  const validateRoomId = (roomID) => {
    return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(roomID);
  };

  // Join a Room
  const joinRoom = () => {
    // Room ID and username must be present
    if (!roomId || !username) {
      toast.error('Room ID & Username is Required');
      return;
    }
    if (!validateRoomId(roomId)) {
      toast.error('Enter a valid Room ID');
      return;
    }
    // Redirect and pass username to editor route
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  // Handling "ENTER" click
  const handleInputEnter = (e) => {
    if (e.code === 'Enter') {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/coding-light.png" alt="coding-light-logo" />
        <h4 className="mainLabel">Paste Coding Light ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" onChange={(e) => setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter} />
          <input type="text" className="inputBox" placeholder="USERNAME" onChange={(e) => setUsername(e.target.value)} value={username} onKeyUp={handleInputEnter} />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="!" className="createNewBtn">
              New Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 🔥 by &nbsp;
          <a href="https://github.com/pinakipb2" target="_blank" rel="noreferrer">
            Pinaki Bhattacharjee
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
