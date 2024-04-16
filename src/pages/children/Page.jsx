import React, { useState, useEffect } from 'react';
import ChildrenNavBar from './components/ChildrenNavBar';
import ChildCard from './components/ChildCard';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Children() {

      const navigate = useNavigate();
      const location = useLocation();
      const [profiles, setProfiles] = useState([]);
      const [selectedProfile, setSelectedProfile] = useState(null);

      useEffect(() => {
            fetchChildren();
      }, []);

      const fetchChildren = async () => {
            try {
                  const response = await fetch(`http://127.0.0.1:8000/api/v1/children/by-user/${location.state.id}`);
                  if (!response.ok) {
                        throw new Error('Failed to fetch children data');
                  }
                  const data = await response.json();
                  console.log(data);
                  setProfiles(data.data);
            } catch (error) {
                  console.error('Error fetching children data:', error);
            }
      };

      const addProfile = () => {
            navigate("/inv-child", { state: { userid: location.state.id } });
      };

      const selectProfile = (index) => {
            setSelectedProfile(profiles[index]);
      };

      const deleteProfile = async (index) => {
            try {
                  const profileToDelete = profiles[index];
                  const response = await fetch(`http://127.0.0.1:8000/api/v1/children/${profileToDelete.id}`, {
                        method: 'DELETE',
                  });
                  if (!response.ok) {
                        throw new Error('Failed to delete profile');
                  }
                  // Remove the deleted profile from the state
                  const updatedProfiles = profiles.filter((_, i) => i !== index);
                  setProfiles(updatedProfiles);
                  setSelectedProfile(null);
            } catch (error) {
                  console.error('Error deleting profile:', error);
            }
      };


      // Function to generate a random color for the avatar background
      const getRandomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
      };

      return (
            <div className='concert-one'>
                  <ChildrenNavBar />
                  <div className="container mt-4">
                        <div className="row">
                              <div className="container mt-4 col-lg-4">
                                    <div className="card">
                                          <h3 className="card-header text-center">My Children</h3>
                                          <div className="card-body">
                                                <ul className="list-group d-flex align-items-center px-2">
                                                      {profiles.map((profile, index) => (
                                                            <div className="container my-2 width-100 border border-2 ps-0" key={index} onClick={() => selectProfile(index)}>
                                                                  <div className="d-flex justify-content-between">
                                                                        <div className="me-2">
                                                                              <div style={{ backgroundColor: profile.color, width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", color: "#FFF", fontWeight: "bold" }}>
                                                                                    {profile.name.charAt(0)}
                                                                              </div>
                                                                        </div>
                                                                        <div className="align-self-center" style={{ width: "200px" }}>
                                                                              {profile.name}
                                                                        </div>
                                                                        <div className="align-self-center d-flex justify-content-end" style={{ width: "20%" }}>
                                                                              <button className="btn btn-sm btn-danger float-start" onClick={(e) => { e.stopPropagation(); deleteProfile(index); }}><i className="bi bi-trash-fill"></i></button>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      ))}
                                                      <li className="card m-2 p-2" onClick={addProfile}><i className="bi bi-plus-square"> Add a child</i></li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>

                              <div className="col-lg-7 card mt-4">
                                    {selectedProfile && <ChildCard profile={selectedProfile} />}
                              </div>
                        </div>
                  </div>
            </div>
      );
}
