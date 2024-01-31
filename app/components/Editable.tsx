// Editable.tsx
import React, { ChangeEvent, useState } from 'react';
import { useDrop } from 'react-dnd';

interface EditableProps {
  type: string;
  onDrop: (type: string) => void;
  onDelete: (type: string) => void;
}

const Editable: React.FC<EditableProps> = ({ type, onDrop, onDelete }) => {
  const [content, setContent] = useState<string>('');

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

 

  const [{ isOver }, drop] = useDrop({
    accept: type,
    drop: (item) => {
      console.log('Dropped item:', item);
      onDrop(type);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`h-full w-full m-5 rounded-3xl bg-gray-50 p-3 ${
        isOver ? 'border-dashed border-4 border-blue-500' : ''
      }`}
    >
      {type === 'Text' ? (
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Type something..."
        />
      ) : (
        <img src={content} alt="Image" style={{ maxWidth: '100%' }} />
      )}
      <button onClick={() => onDelete(type)}>Delete</button>
    </div>
  );
};

export default Editable;
