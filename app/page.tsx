'use client';

import Tools from './components/Tools';
import Editable from './components/Editable';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SaveButton from './components/SaveButton';
import { useState } from 'react';

interface Section {
  type:string,
  content:string

}

const Page:React.FC= ()=> {

  const [sections ,setSections] = useState<Section[]>([]);

  const handleDrop = (type:string) =>{
    setSections([...sections ,{type,content:''}]);
  }

  const handleDelete = (type:string) => {
    setSections(sections.filter((section)=> section.type !== type));
  }

  const handleSave = () => {
    
    console.log('Sections saved:', sections);
  };


  return (
    <DndProvider backend={HTML5Backend}>

    <div className='h-[100vh]'>
      <span className='text-blue-900 font-bold text-3xl'>Simple Static Website Generator</span>
      <SaveButton onSave={handleSave}/>
      <div className='grid grid-cols-4 gap-3 h-[90%] mt-3 '>
        <div className='col-span-1 bg-blue-200 p-4 flex flex-col items-center rounded-xl shadow-xl'>
          <span className='text-xl'>Toolbar</span>
         
        <Tools/>


        </div>
        <div className="col-span-3 bg-blue-500 p-4 flex items-center flex-col rounded-xl shadow-xl">
          <span className='text-xl '>Website Section</span>
          <div className='h-full w-full m-5 rounded-3xl bg-gray-50 p-3'>
              {sections.map((section, index) => (
            <Editable
              key={index}
              type={section.type}
              onDrop={handleDrop}
              onDelete={handleDelete}
            />
          ))}
          </div>
          
        </div>
      </div>
    </div>
    </DndProvider>
  );
}

export default Page;
