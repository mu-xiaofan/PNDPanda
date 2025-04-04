import React from 'react';

const GameEmbed = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <iframe
                src="https://i.simmer.io/@XiaofanMu/pnd-panda-rocky-s-planning-adventures"
                width="960"
                height="600"
                allowFullScreen
                allow="geolocation; microphone; camera; midi; encrypted-media; gamepad; accelerometer; gyroscope; xr-spatial-tracking; clipboard-read; clipboard-write; cross-origin-isolated; autoplay"
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
                title="Pnd Panda Rocky's Planning Adventures"
            ></iframe>
        </div>
    );
};

export default GameEmbed;