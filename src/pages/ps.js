import React from 'react';
import Card from './Card'; // Adjust the path as needed
import '../global.css';

const Ps = () => {
  const cardData = [
    {
      image: "https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093743_640.jpg",
      title: "School Management System",
      link: "https://drive.google.com/file/d/13OoctZhbWPSWix0-m0US5tUm8gprVL8I/view"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_640.jpg",
      title: "React-A-thon",
      link: "https://drive.google.com/file/d/1DqLnahmr0FPdYvxb6MNxlSSy6Nr9G7dc/view"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/02/17/21/18/south-india-2075399_640.jpg",
      title: "Tourism Website",
      link: "path/to/doc3.docx"
    },
    {
      image: "https://cdn.pixabay.com/photo/2022/09/16/09/36/work-7458261_640.jpg",
      title: "HRMS Application Requirements Document",
      link: "https://drive.google.com/file/d/1uyCkJW0D_VbtSrkRr07kJgRppJpXJgsj/view"
    },
    {
      image: "https://cdn.pixabay.com/photo/2021/08/06/00/37/stock-trading-6525081_640.jpg",
      title: "Inventory Management System",
      link: "https://drive.google.com/file/d/1Y7oYmwPZEgtOfdQIySdDme-HxRCcYpKh/view"
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/17/22/42/library-849797_640.jpg",
      title: "Digital Library Hub",
      link: "https://drive.google.com/file/d/15isLJixBUqum-5IVFjReDlY9rr7Jcfzw/view"
    },
    {
      image: "https://via.placeholder.com/640x360",
      title: "Electronic Medical Record System",
      link: "https://drive.google.com/file/d/1t-hWgFJciOxrgiTmJSiFZADiISfAm_yA/view"
    }
    // Add more items as needed
  ];

  return (
    <div>
      <h1>Problem Statement</h1>
      <h2>Choose your favorite and get started!</h2>
      <div className="container mt-5">
        <div className="row">
          {cardData.map((data, index) => (
            <Card key={index} image={data.image} title={data.title} link={data.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ps;
