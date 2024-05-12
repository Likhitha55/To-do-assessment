import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
    const handleCheckboxChange = (e) => {
        onChange(e.target.checked); 
      };
  return (
    <label>
      <input className="checkbox-input" type="checkbox" checked={checked} onChange={handleCheckboxChange} />
      {label}
    </label>
  );
};

export default Checkbox;