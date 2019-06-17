import React from 'react'
import { DataContext } from '../App'
import Excerpts from '../components/Excerpts'
import logoColor from '../img/logos/logo-color.png'
import arrowDown from '../img/icons/arrow-do.png'
import arrowLeft from '../img/icons/arrow-lf.png'
import arrowRight from '../img/icons/arrow-rt.png'

const Home = () => (
  <div>
    <header>
      <img
        src={logoColor}
        alt="Aspiring Writers Alley logo"
        className="m-auto block mb-30"
      />
    </header>
    <main>
      <div className="flex items-baseline font-medium justify-end mr-30 my-16">
        <label htmlFor="category">Category</label>
        {/* @TODO Add functionality to category selector */}
        <select
          id="category"
          name="category"
          className="font-medium ml-8 border-gray-100 border bg-no-repeat bg-right-8 bg-white w-200 pt-6 px-12 appearance-none"
          style={{ backgroundImage: `url(${arrowDown})` }}
        >
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          <option value="category4">Category 4</option>
        </select>
      </div>
      <hr className="border-gray-100 border m-0 mx-30" />
      <div className="flex-col">
        <DataContext.Consumer>
          {value => <Excerpts data={value} />}
        </DataContext.Consumer>
      </div>
      <hr className="border-gray-100 border m-0 mx-30" />
      {/* @TODO Add functionality to previous and next buttons */}
      <div className="flex justify-between m-30">
        <div className="flex items-center">
          <img src={arrowLeft} alt="previous blog posts" className="mr-8" />
          <button className="btn">Prev</button>
        </div>
        <div className="flex items-center">
          <button className="btn">Next</button>
          <img src={arrowRight} alt="next blog posts" className="ml-8" />
        </div>
      </div>
    </main>
  </div>
)

export default Home
