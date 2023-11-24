import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { DecodeUser, GetToken } from './LoginComponent'
import { Link, Navigate, useParams } from 'react-router-dom'
import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../firebase'

const WriteArticleComponent = () => {

    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [data, setData] = useState(null)
    const [cities, setCities] = useState(null)
    const handleChange = (e, editor) => { setData(editor.getData()) }
    const [selectedCity, setSelectedCIty] = useState(null)
    const [imageUpload, setImageUpload] = useState(null)
    const [incompleteArticleMessage, setIncompleteArticleMessage] = useState(false)
    const [user, setUser] = useState(null)
    const [successMessage, setSuccesMessage] = useState(null)
    const [article, setArticle] = useState(null)
    const [articleImageURL, setArticleImageURL] = useState("")
    const [articleCity, setArticleCity] = useState(null)


    const params = useParams()
    const { id } = params



    useEffect(() => {
        GetAllCities()
        const user = DecodeUser()
        console.log(user);
        setUser(user)
        if (id) {
            GetArticle()
        }

    }, [])


    useEffect(() => {

        //LOAD IMAGE   
        GetArticleImage()
        console.log(article);

    }, [article])


    useEffect(() => {

        if (article && cities) {
            cities.forEach(city => {
                if (city.id == article.cityId) {
                   setArticleCity(city.name)
                }
            });
        }

    }, [article, cities])

    useEffect(() => {

    }, [articleCity])

    async function GetAllCities() {
        try {
            const response = await axios.get("https://browseclimate20231121101412.azurewebsites.net/api/City/GetAll")
            setCities(response.data)

            console.log(cities);
        } catch (error) {

            console.log(error);
        }
    }





    async function GetArticle() {

        console.log("Call Single article with id " + id);
        const res = await axios.get("https://browseclimate20231121101412.azurewebsites.net/api/Article/Get?id=" + id)
        setArticle(res.data)
    }


    async function GetArticleImage() {
        console.log("Fetching article image");
        const imageListRef = ref(storage, `/articles/` + id)

        const res = await listAll(imageListRef)

        if (res.items[0]) {
            const url = await getDownloadURL(res.items[0])
            console.log(url);
            setArticleImageURL(url)

        }


    }

    async function sendArticle() {

        let articleid = null
        //VALIDATION 
        if (title != "" && description != "" && data != "") {

            try {

                //SEND DATA TO DB 
                console.log("Sending  ");
                const token = GetToken()

                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                console.log(user);
                const res = await axios.post("https://browseclimate20231121101412.azurewebsites.net/api/Article/Create", {

                    "title": title,
                    "description": description,
                    "content": data,
                    "cityId": selectedCity,
                    "createdBy": user.UserId,
                    "ImageURL": "null"

                })

                console.log(res);
                articleid = res.data.id

            } catch (error) {
                console.log(error);
            }


        } else {
            setIncompleteArticleMessage(true)
        }



        // SEND IMAGE TO FIREBASE 
        if (imageUpload != null || articleid != null) {

            try {
                console.log("Uploading image ... for article with id :" + articleid);
                const imageRef = ref(storage, `/articles/${articleid}/${articleid}`);

                const res = await listAll(imageRef)
                console.log(res);


                uploadBytes(imageRef, imageUpload)

            } catch (error) {
                console.log(error);

            }
        }

        console.log("End add article");
        setSuccesMessage("Article ajouté !")

    }


    async function EditArticle() {

        console.log(title)
        console.log(description)
        console.log(data)
        console.log(selectedCity);
        const res = await axios.post("https://browseclimate20231121101412.azurewebsites.net/api/Article/Update", {
            "id": id,
            "title": title ? title : article.title,
            "description": description ?  description : article.description,
            "content": data ? data : article.content,
            "cityId": selectedCity ? selectedCity : article.cityId,
            "createdAt": "2023-11-08T09:08:50.568Z",
            "updatedAt": "2023-11-08T09:08:50.568Z",
            "createdBy": article.createdBy,
            "isAdminArticle": true,
            "likes": article.likes,
            "views": article.views,
            "imageURL": "string",
            "timestamp": article.timestamp
        })

        if (res.status == 200) {
            setSuccesMessage("L'article a bien été modifié !")

        }



        if (imageUpload != null || id != null) {

            try {
                console.log("Uploading image ...");
                const imageRef = ref(storage, `/articles/${id}`);

                const res = await listAll(imageRef)
                console.log(res);
                
                console.log(imageUpload);
                if(res.items[0] && imageUpload ){

                    deleteObject(ref(storage, `/articles/${id}/${id}`))
                        
                  const folder = ref(storage, `/articles/${id}/${id}`);

                uploadBytes(folder, imageUpload)
                }

        

            } catch (error) {
                console.log(error);

            }
        }

    }


    if (user == null) {
        return (
            <>
                <h1> Veuillez vous connecter avant d'explorer</h1>

                <Link to="/login"> Se connecter  </Link>
            </>
        )


    }


    return (
        <div className='write-article-container'>

            {successMessage && <div className='alert alert-success'>
                {successMessage}

                <Link to="/article"> Retour à la liste des articles </Link>
            </div>}

            {!successMessage && <>
                <img src={articleImageURL}></img>

                {article && <h5> Ville choisie : {articleCity}</h5>}
                <select className='admin-city-select' defaultValue={article ? article.cityId : "all"} onChange={(e) => setSelectedCIty(e.target.value)} name="" id="">Séléctionnez une ville
                    <option value="all" > Choisir une ville </option>

                    {cities && cities.map(city => (
                        <option value={city.id} key={city.id}> {city.name}</option>
                    ))}

                </select>


                <div className='form-group'>
                    <label htmlFor="">Choisissez l'image de l'article</label>
                    <input className='choose-file-input' type='file' onChange={e => setImageUpload(e.target.files[0])}></input>
                </div>





                <div className='form-group'>
                    <label htmlFor=""> Titre de l'article</label>
                    <input type='text' defaultValue={article ? article.title : ""} onChange={(e) => setTitle(e.target.value)} />
                </div>


                <div className='form-group'>
                    <label htmlFor=""> Description</label>
                    <input type='text' defaultValue={article ? article.description : ""} placeholder='Decrivez votre article en quelques lignes' onChange={(e) => setDescription(e.target.value)} />
                </div>



                <CKEditor editor={ClassicEditor}
                    onChange={(e, editor) => { handleChange(e, editor) }}
                    data={article ? article.content : ""}
                ></CKEditor>
 
                {incompleteArticleMessage &&
                    <div className='alert alert-danger'>Veuillez indiquer le titre, la description et le contenu de l'article. </div>
                }
                <button onClick={() => article ? EditArticle() : sendArticle()}> Envoyer  </button>
            </>}
        </div>

    )
}

export default WriteArticleComponent