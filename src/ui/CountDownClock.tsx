import React from 'react';

const Flags = () => {
  const flagData = [
    { name: 'CapiMax USA', code: 'us', regNumber: '' },
    { name: 'CapiMax UKE', code: 'gb', regNumber: '' },
    { name: 'CapiMax UAE', code: 'ae', regNumber: '' },
  ];

  return (
    <div className="flag-container">
      {flagData.map((flag, index) => (
        <div className="flag-card" key={index}>
          {/* Auto-fetching the flags using a CDN */}
          <img
            src={`https://flagcdn.com/w80/${flag.code}.png`}
            alt={`${flag.name} flag`}
            className="flag-image"
          />
          <h3 className="flag-name">{flag.name}</h3>
          <p className="registration-number">{flag.regNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default Flags;