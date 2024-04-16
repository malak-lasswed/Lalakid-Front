import React, { useState, useEffect } from 'react';
import TextField from '../../../components/TextField';
import TextArea from '../../../components/TextArea';
import { useNavigate } from 'react-router-dom'; // Removed unused import
import DropdownList from '../../../components/DropdownList';

const ChildCard = ({ profile }) => {
      const [updatedProfile, setUpdatedProfile] = useState({ ...profile });
      const navigate = useNavigate();

      useEffect(() => {
            setUpdatedProfile({ ...profile });
      }, [profile]);

      const handleSave = async () => {
            try {
                  const response = await fetch(`http://127.0.0.1:8000/api/v1/children/${profile.id}`, {
                        method: 'PUT',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(updatedProfile),
                  });

                  if (!response.ok) {
                        throw new Error('Failed to update profile');
                  }

                  console.log('Profile updated successfully');
            } catch (error) {
                  console.error('Error updating profile:', error.message);
                  // Handle error: display error message to the user
            }
      };

      const handleChange = (field, value) => {
            setUpdatedProfile(prevProfile => ({
                  ...prevProfile,
                  [field]: value
            }));
      };

      const goActivities = () => {
            navigate("/activities", { state: { language: updatedProfile.preferred_language } });
      };

      return (
            <div className="container mt-4">
                  <div className="card-header text-center">
                        <h3>Profile Details</h3>
                  </div>
                  <div className="card-body">
                        <div className="row">
                              <div className="col-md-6">
                                    <div style={{ backgroundColor: profile.color, width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", color: "#FFF", fontWeight: "bold", fontSize: "40px" }}>
                                          {profile.name.charAt(0)}
                                    </div>
                                    <TextField label="Name" value={updatedProfile.name} onChange={e => handleChange('name', e.target.value)} />
                                    <TextField label="Age" value={updatedProfile.age ? `${updatedProfile.age} years` : 'Unknown'} onChange={e => handleChange('age', e.target.value)} />
                              </div>
                              <div className="col-md-6">
                                    <DropdownList label="Sex" name="sex" options={["Male", "Female"]} selected={updatedProfile.sex} onChange={(e) => handleChange('sex', e.target.value)} />
                                    <DropdownList label="Preferred language" name="language" options={["English", "Arabic"]} selected={updatedProfile.preferred_language} onChange={(e) => handleChange('preferred_language', e.target.value)} />
                                    <TextField label="Eye Rate" value={updatedProfile.eye_rate} onChange={e => handleChange('eye_rate', e.target.value)} />
                                    <TextArea label="Pathologie" value={updatedProfile.pathologie} onChange={e => handleChange('pathologie', e.target.value)} />
                              </div>
                        </div>
                        <button className="btn btn-primary me-2" onClick={handleSave}>Save</button>
                        <button className="btn btn-primary" onClick={goActivities}>Go Activities</button>
                  </div>
            </div>
      );
};

export default ChildCard;
