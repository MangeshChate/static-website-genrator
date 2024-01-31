import React from 'react';

interface SaveButtonProps{
    onSave: ()=>void ;
}

const SaveButton:React.FC<SaveButtonProps> = ({ onSave }) => {
  return <button className='p-3 bg-green-400 text-xl font-bold text-white shadow rounded-md absolute top-2 right-5 w-[150px]' onClick={onSave}>Save</button>;
};

export default SaveButton;
