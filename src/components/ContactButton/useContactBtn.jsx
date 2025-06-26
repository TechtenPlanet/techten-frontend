// useToggleForm.js
import { useState } from 'react';

const useToggleForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggle = () => {
    setShowForm(!showForm);
  };

  return [showForm, handleToggle];
};

export default useToggleForm;
