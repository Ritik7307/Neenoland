import React from 'react';
import './ExperimentalLayer.css';
import CharacterScene from './CharacterScene';
import './CharacterScene.css';
// Bubble removed per request

const ExperimentalLayer = () => {
    return (
        <div className="experimental-layer">
            {/* 
        This is the "Crazy UI" layer. 
        Add experimental components here.
        By default, pointer-events are set to 'none' in CSS so clicks pass through 
        unless they hit a direct child of this layer that re-enables them.
      */}
            <div className="experimental-content">
                <div className="character-scene-container">
                    {/* Bubble removed */}
                    <CharacterScene />
                </div>
            </div>
        </div>
    );
};

export default ExperimentalLayer;
