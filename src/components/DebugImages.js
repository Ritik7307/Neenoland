import React from 'react';
import { CLOUDINARY_CLOUD_NAME } from '../config/images';

const DebugImages = () => {
    // Pick one image that is NOT working for you
    const testImageName = "1G4A2643";

    // Variations to test
    const variations = [
        { label: "Lowercase .jpg", ext: ".jpg" },
        { label: "Uppercase .JPG", ext: ".JPG" },
        { label: "Lowercase .jpeg", ext: ".jpeg" },
        { label: "No Extension", ext: "" },
        { label: "With 'neenoland/' folder", prefix: "neenoland/", ext: ".jpg" },
    ];

    return (
        <div style={{ padding: '20px', background: 'white', color: 'black', position: 'fixed', top: 0, left: 0, zIndex: 9999, overflowY: 'auto', maxHeight: '100vh', width: '300px' }}>
            <h2>Debug Image Loader</h2>
            <p>Cloud Name: <strong>{CLOUDINARY_CLOUD_NAME}</strong></p>

            {variations.map((v, i) => {
                const url = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${v.prefix || ''}${testImageName}${v.ext}`;
                return (
                    <div key={i} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                        <div><strong>{v.label}</strong></div>
                        <div style={{ fontSize: '10px', wordBreak: 'break-all' }}>{url}</div>
                        <img
                            src={url}
                            alt={v.label}
                            style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '5px', background: '#eee' }}
                            onError={(e) => e.target.style.border = '2px solid red'}
                            onLoad={(e) => e.target.style.border = '2px solid green'}
                        />
                    </div>
                );
            })}
            <button onClick={() => document.querySelector('.home-page').style.display = 'none'}>Hide Page Content</button>
        </div>
    );
};

export default DebugImages;
