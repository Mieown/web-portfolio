import React from 'react';
import './Work.css';
import info from '../../info';
import Card from '../../Components/Card/Card';

function Work({ isOpened, setIsOpened }) {
  return (
    <div className="work" id="workLink">
      <div className="text-container-work">
        <h1 className="work-header">My Work</h1>
        <p className="work-textinfo">
          Here is a collection of projects created by me or together with classmates and co-workers. Web based projects and projects made in print. Read more about each project and how they have been created. Feel free to test them out.
        </p>
      </div>
      <div className="cards-container">
        {info.map((item, index) => (
          <Card
            index={index}
            key={index}
            name={item.name}
            img={item.imgSRC}
            pinfo={item.pinfo}
            classtext={item.classtext}
            img1={item.img1}
            img2={item.img2}
            img3={item.img3}
            img4={item.img4}
            linktext={item.linktext}
            linkclasstext={item.linkclasstext} 
            link={item.link} 
            isOpened={isOpened}
            setIsOpened={setIsOpened}
          />
        ))}
      </div>
      <hr 
          style={{
            color: 'blueviolet',
            backgroundColor: '#493011',
            height: 1,
            border: 'none',
        }}/>
    </div>
  );
}

export default Work;