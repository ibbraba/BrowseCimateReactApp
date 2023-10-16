import React from 'react'
import { Link } from 'react-router-dom'
import { storage } from '../../firebase';
import { useState, useEffect } from 'react';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import axios from 'axios';

const ImagesAdminPage = () => {

  const [imageUpload, setImageUpload] = useState(null)
  const [imagesUrls, setImageUrls] = useState(null)
  const [selectedImageURL, setSelectedImageURL] = useState(null)
  const [cities, setCities] = useState(null)
  const [selectedCity, setSelectedCIty] = useState("all")


  //IMAGE UPLOAD


  const uploadImage = () => {
    if (imageUpload == null) {
      return;

    }
    console.log("Uploading image ...");
    const imageRef = ref(storage, `/city/${selectedCity.trim()}/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((image) => {
      getDownloadURL(image.ref).then((url) => {
        setImageUrls((prev) => [...prev, url])
      })

    })
  };

  useEffect(() => {
    console.log("SELECTED CITY CHANGES");
    console.log(selectedCity);
    getImagesUrls()
  }, [selectedCity])

  //FETCHING IMAGES
  useEffect(() => {
    GetAllCities()
    getImagesUrls()
    console.log(cities);
    console.log(imagesUrls);
  }, []);


  async function GetAllCities() {
    try {

      console.log("call cities");
      const response = await axios.get("https://localhost:7226/api/City/GetAll")
      setCities(response.data)

      console.log("End call cities");
    } catch (error) {

      console.log(error);
    }
  }



  async function getimagesItems() {

    let imageListRef = ""



    if (selectedCity != null && selectedCity != "all") {

      imageListRef = ref(storage, `/city/${selectedCity.trim()}`)
    } else {
      imageListRef = ref(storage, `/city`)
    }
    const res = await listAll(imageListRef)
    console.log(res);
    return res.items
  }

  const getImagesUrls = async () => {
    try {

      const items = await getimagesItems()

      if (items != null) {
        const urls = []

        for (const item of items) {

          const url = await getDownloadURL(item)
          urls.push(url)
          console.log(urls);


        }

        setImageUrls(urls)
      }



    } catch (error) {

      console.log(error);

    }

  }

  async function DeleteImage(url) {
    console.log(url);


  }







  return (


    <div>

      <Link to={"/admin"} className='btn btn-primary'> Menu administrateur </Link>

      <h1>Gallerie</h1>

      <div className="app">

        <select className='admin-city-select' onChange={(e) => setSelectedCIty(e.target.value)} name="" id="">

          <option value="all" > Choisir une ville </option>
          {cities && cities.map(city => (
            <option value={city.name} key={city.id}> {city.name}</option>
          ))}


        </select>
        <input type='file' onChange={e => setImageUpload(e.target.files[0])}></input>
        <button onClick={uploadImage}>Upload image</button>
      </div>

      {imagesUrls && imagesUrls.map(url => (


        <>

          <p>{url}</p>
          <img src={url}></img>

          <button className='btn btn-danger' onClick={(e) => {
            setSelectedImageURL(url)
            DeleteImage(url)

          }}>Supprimer</button>
        </>
      ))

      }

    </div>
  )
}

export default ImagesAdminPage