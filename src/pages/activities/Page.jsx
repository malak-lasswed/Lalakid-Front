import React, { useState, useEffect } from 'react';
import ActivitiesNavBar from './components/ActivitiesNavBar';
import Levels from './components/Levels';
import Button from '../../components/Button';
import ButtonPlaySound from '../../components/ButtonPlaySound';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Activities() {
      const location = useLocation();
      const [sections, setSections] = useState([]);
      const [loading, setLoading] = useState(true);
      const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
      const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
      const [currentStepIndex, setCurrentStepIndex] = useState(0);
      const [language, setLanguage] = useState('');

      useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/v1/sections', {
                  params: {
                        language_code: location.state.language
                  }
            })
                  .then(response => {
                        setSections(response.data);
                        setLoading(false);
                  })
                  .catch(error => {
                        console.error('Error fetching sections:', error);
                        setLoading(false);
                  });
      }, [location.state.language]); // Re-run effect when language changes

      const handlePreviousStep = () => {
            if (currentStepIndex > 0) {
                  setCurrentStepIndex(currentStepIndex - 1);
            } else if (currentLevelIndex > 0) {
                  setCurrentLevelIndex(currentLevelIndex - 1);
                  setCurrentStepIndex(sections[currentSectionIndex].levels[currentLevelIndex - 1].steps.length - 1);
            } else if (currentSectionIndex > 0) {
                  setCurrentSectionIndex(currentSectionIndex - 1);
                  const lastSectionIndex = sections[currentSectionIndex - 1].levels.length - 1;
                  setCurrentLevelIndex(lastSectionIndex);
                  setCurrentStepIndex(sections[currentSectionIndex - 1].levels[lastSectionIndex].steps.length - 1);
            }
      }

      const handleNextStep = () => {
            const currentSection = sections[currentSectionIndex];
            const currentLevel = currentSection.levels[currentLevelIndex];

            if (currentStepIndex < currentLevel.steps.length - 1) {
                  setCurrentStepIndex(currentStepIndex + 1);
            } else if (currentLevelIndex < currentSection.levels.length - 1) {
                  setCurrentLevelIndex(currentLevelIndex + 1);
                  setCurrentStepIndex(0);
            } else if (currentSectionIndex < sections.length - 1) {
                  setCurrentSectionIndex(currentSectionIndex + 1);
                  setCurrentLevelIndex(0);
                  setCurrentStepIndex(0);
            }
      }

      const handleSectionChange = (event) => {
            setCurrentSectionIndex(event.target.value);
            setCurrentLevelIndex(0);
            setCurrentStepIndex(0);
      }

      if (loading) {
            return <div>Loading...</div>;
      }

      const currentSection = sections[currentSectionIndex];
      const currentLevel = currentSection.levels[currentLevelIndex];
      const currentStep = currentLevel.steps[currentStepIndex];

      return (
            <div className='concert-one'>
                  <ActivitiesNavBar value={currentSectionIndex} onChange={handleSectionChange} sections={sections} />
                  <div className="container mt-4">
                        <div className="row ">
                              <div className="col-lg-2 ">

                                    <Levels
                                          section={currentSection}
                                          levels={currentSection.levels}
                                          selectedLevel={currentLevelIndex}
                                          onLevelChange={setCurrentLevelIndex}
                                    />

                              </div>
                              <div className="col-lg-10">
                                    <div className="card p-4 d-flex justify-content-center">
                                          <div className="d-flex justify-content-center mt-4">
                                                <div>{`Step ${currentStepIndex + 1}`}</div>
                                          </div>
                                          <div className="d-flex justify-content-center mt-4">

                                                <div className="card d-flex justify-content-center" style={{
                                                      width: '18rem', height: '18rem', display: "flex", flexWrap: "wrap", alignContent: "center"
                                                }}>
                                                      <img src={`http://127.0.0.1:8000/${currentStep.image}`} style={{ width: '60%', height: '60%', }} alt="..." />
                                                </div>
                                          </div>
                                          <div className="d-flex justify-content-between mt-5">
                                                <div>
                                                      <Button name="Prev" type="button" onClick={handlePreviousStep} />
                                                </div>
                                                <div >
                                                      <ButtonPlaySound soundlink={`http://127.0.0.1:8000/${currentStep.audio}`} />
                                                </div>
                                                <div>
                                                      <Button name="Next" type="button" onClick={handleNextStep} />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Activities;
