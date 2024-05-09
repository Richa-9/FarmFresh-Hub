import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card';
import MultiCard from './MultiCard';
import './home.css';

const Cards = () => {
  return (
    <div className='cards-section'>
      <div className='cards-container container-fluid'>
        <div className='row cards'>
          <div className='col-6 col-sm-4 col-xl-3 multi-card'>
            <MultiCard name="Everyday Sale on Products" img="category-1" a="Cereals" b="Dairy" c="Coffee and Beverages" d="Dry fruits" bottom="See more" />
          </div>
          <div className='col-6 col-sm-4 col-xl-3'>
            <Card name="Health and Personal Care" img="category-2" bottom="Shop now" />
          </div>
          <div className='col-6 col-sm-4 col-xl-3'>
            <Card name="Fresh Vegetables" img="15" bottom="Explore now" />
          </div>
          <div className='col-6 col-sm-4 col-xl-3'>
            <Card name="Shop Mother's Day Gifts" img="category-4" bottom="Shop now" />
          </div>
          <div className='col-6 col-sm-4 col-xl-3'>
            <Card name="Hygiene" img="16" bottom="Shop now" />
          </div>
          <div className='col-6 col-sm-4 col-xl-3'>
            <Card name="Ready to eat" img="category-6" bottom="Shop now" />
          </div>
          <div className='col-6 col-sm-4 col-xl-3 multi-card'>
            <MultiCard name="Cooking Ingredients" img="category-7" a="Machinery" b="Equipments" c="Accessories" d="Medical Kits" bottom="See more" />
          </div>
          <div className='col-6 col-sm-4 col-xl-3'>
            <Card name="Snacks" img="category-8" bottom="Shop more" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;