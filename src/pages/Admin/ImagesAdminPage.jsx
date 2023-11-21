import React from 'react'
import { Link } from 'react-router-dom'
import { storage } from '../../firebase';
import { useState, useEffect } from 'react';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import axios from 'axios';
import { DecodeUser, GetToken } from '../../compenents/LoginComponent';

const ImagesAdminPage = () => {

  const [imageUpload, setImageUpload] = useState(null)
  const [imagesUrls, setImageUrls] = useState(null)
  const [selectedImageURL, setSelectedImageURL] = useState(null)
  const [cities, setCities] = useState(null)
  const [selectedCity, setSelectedCIty] = useState("all")
  const [permission, setpermission] = useState(false)

  useState(() => {

    verifyAdminPermission()

  }, [])

  useState(() => {

  }, [permission])


  async function verifyAdminPermission() {
    const token = GetToken()
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const res = await axios.get("https://browseclimate20231121101412.azurewebsites.net/api/User/validate")
      if (res.status != 200) {
        setpermission(false)
        console.log("Permission Denied");
      }

      const user = DecodeUser()
      console.log(user);

      if (user.role == "Admin") {

        setpermission(true)
        console.log("Permission OK");
        return

      }

      console.log("Permission Denied");
      setpermission(false)
    }
  }


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
      const response = await axios.get("https://browseclimate20231121101412.azurewebsites.net/api/City/GetAll")
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

      {!permission && <div className='alert alert-danger'>  <h3>Vous n'avez pas les droits d'accés à cette ressource.</h3>
        <Link to="/" className='btn btn-primary'> Retour à l'acceuil</Link>

      </div>}

      {permission && <>

      <Link to={"/admin"} className='btn btn-primary'> Menu administrateur </Link>

      <h1>Gallerie</h1>

      <div className="admin-gallerie">

        <h3>Uploader une image</h3>
        <select className='admin-city-select' onChange={(e) => setSelectedCIty(e.target.value)} name="" id="">

          <option value="all" > Choisir une ville </option>
          {cities && cities.map(city => (
            <option value={city.name} key={city.id}> {city.name}</option>
          ))}


        </select>
        <input className='gallerie-input' type='file' onChange={e => setImageUpload(e.target.files[0])}></input>
        <button className='upload-button btn btn-primary' onClick={uploadImage}>Envoyer l'image</button>

      </div>



      {imagesUrls && imagesUrls.map(url => (


        <div className='admin-image' key={url}>


          <img src={url}></img>



          <button className='btn btn-danger' onClick={(e) => {
            setSelectedImageURL(url)
            DeleteImage(url)

          }}>Supprimer</button>
        </div>
      ))

      }

    </>}
    </div>
  )
}

export default ImagesAdminPage