import React from 'react';

const Flags = () => {
  const flagData = [
    { name: 'USA', code: 'us', regNumber: '' },
    { name: 'UK', code: 'gb', regNumber: '' },
    { name: 'UAE', code: 'ae', regNumber: '' },
  ];

  return (
    <div className="flag-container">
      {flagData.map((flag, index) => (
        <div className="flag-card" key={index} style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1.5rem', // Slightly increased padding
          margin: '0.5rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          height: 'auto', // Adjust height to auto
          width: '200px', // New width to accommodate larger flags
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'; // Increased from 1.03
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4), 0 0 25px 8px rgba(68,160,141,0.7)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
        }}>
          <img
            src={`https://flagcdn.com/w160/${flag.code}.png`} // Increased from w80 to w160
            alt={`${flag.name} flag`}
            className="flag-image"
            style={{
              width: '60%',
              minWidth: '160px', // Increased from 260px
              height: 'auto',
              marginBottom: '0.5rem'
            }}
          />
          <h3 className="flag-name" style={{ margin: '0.25rem 0' }}>{flag.name}</h3>
          <p className="registration-number" style={{ margin: '0' }}>{flag.regNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default Flags;