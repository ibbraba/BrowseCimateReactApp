import React from 'react'
import CityComponent from '../compenents/CityComponent'

const CityPage = () => {
  return (
    <div className='page-container'>
        
        
        <div className="intro">
        <h3>Les plus belles villes à découvrir </h3>
        <CityComponent>  </CityComponent>
        </div>

        <div> Classement des plus belles villes </div>


        <div>Visitez en images</div>



    </div>
  )
}

export default CityPage