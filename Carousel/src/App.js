import React from 'react';
import CustomCarousel from './components/CustomCarousel'; // Import your CustomCarousel component
import logo from './logo.svg';
import './App.css';

const App = () => {
  const data = [
    {
      category: '1',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FGSW_Menu_Front.jpg?alt=media&token=18403bc0-aee2-4ff9-8539-c749c71f0492&_gl',
      title: 'Title 1',
    },
    {
      category: '1',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FGSW_Menu_Back.jpg?alt=media&token=e1545e90-037c-4c19-a76d-2def04749128&_gl',
      title: 'Title 2',
    },
    {
      category: '1',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FOcimum.jpg?alt=media&token=a0cef347-632a-4512-9776-88391299b0ec&_gl',
      title: 'Title 3',
    },
    {
      category: '2',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FOcimum.jpg?alt=media&token=a0cef347-632a-4512-9776-88391299b0ec&_gl',
      title: 'Title 4',
    },
    {
      category: '2',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FGSW_Menu_Front.jpg?alt=media&token=18403bc0-aee2-4ff9-8539-c749c71f0492&_gl',
      title: 'Title 1',
    },
    {
      category: '3',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FGSW_Menu_Back.jpg?alt=media&token=e1545e90-037c-4c19-a76d-2def04749128&_gl',
      title: 'Title 2',
    },
    {
      category: '3',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FOcimum.jpg?alt=media&token=a0cef347-632a-4512-9776-88391299b0ec&_gl',
      title: 'Title 3',
    },
    {
      category: '3',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FOcimum.jpg?alt=media&token=a0cef347-632a-4512-9776-88391299b0ec&_gl',
      title: 'Title 4',
    },
    {
      category: '4',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FGSW_Menu_Back.jpg?alt=media&token=e1545e90-037c-4c19-a76d-2def04749128&_gl',
      title: 'Title 2',
    },
    {
      category: '4',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FOcimum.jpg?alt=media&token=a0cef347-632a-4512-9776-88391299b0ec&_gl',
      title: 'Title 3',
    },
    {
      category: '4',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FOcimum.jpg?alt=media&token=a0cef347-632a-4512-9776-88391299b0ec&_gl',
      title: 'Title 4',
    },
    {
      category: '5',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FGSW_Menu_Back.jpg?alt=media&token=e1545e90-037c-4c19-a76d-2def04749128&_gl',
      title: 'Title 2',
    },
    {
      category: '5',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FOcimum.jpg?alt=media&token=a0cef347-632a-4512-9776-88391299b0ec&_gl',
      title: 'Title 3',
    },
    {
      category: '5',
      image: 'https://firebasestorage.googleapis.com/v0/b/ckmportfolio.appspot.com/o/projectFiles%2FOcimum.jpg?alt=media&token=a0cef347-632a-4512-9776-88391299b0ec&_gl',
      title: 'Title 4',
    }
  ];
// Group data by category
  const groupedData = data.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {});

  // Convert grouped data into arrays
  const carouselData = Object.values(groupedData);

  // Create CustomCarousel components for each group
  const carousels = carouselData.map((group, index) => (
    <CustomCarousel key={index} data={group} />
  ));
  return (
    <div className="App">
       {carousels}
    </div>
  );
};

export default App;
