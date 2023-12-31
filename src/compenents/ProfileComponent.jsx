import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetToken } from './LoginComponent';



const ProfileComponent = () => {


  const [user, setUser] = useState(null)
  const [tab, setTab] = useState(false)
  const [userArticles, setUserArticles] = useState([])
  const [inputName, setName] = useState("")
  const [inputFirstName, setFirstname] = useState("")
  const [inputEmail, setEmail] = useState("")
  const [inputPassword, setPassword] = useState("")
  const [inputavoriteCity, setFavoriteCity] = useState(null)






  const params = useParams()
  const { id } = params


  console.log("Init component");

  useEffect(() => {
    GetProfile()
    FetchUserArticles()
    console.log(userArticles);

  }, [tab])

  async function GetProfile() {

    try {
      console.log("Fetching User ... ");
      const token = GetToken()

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const res = await axios.get("https://localhost:7226/api/User/Get?id=" + id)

      setUser(res.data)
      setName(user.name)
      setFirstname(user.firstName)
      setEmail(user.email)
      setFavoriteCity(user.favoriteCity)
    } catch (err) {
      console.log(err);
    }

  }

  async function UpdateUser() {

    //Updating informations





    try {
      console.log("Updating User ... ");
      const token = GetToken()
      
      user.name = inputName
      user.firstName = inputFirstName
      user.email = inputEmail 
      user.password = inputPassword
      user.favoriteCity = inputavoriteCity


      console.log(user)       
      
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const res = await axios.post("https://localhost:7226/api/User/Get?id=" + id, {

        "id": user.id,
        "name": user.name,
        "firstName": user.firstName,
        "email": user.email,
        "pseudo": user.pseudo,
        "password": user.password,
        "role": user.role,
        "createdAt": "2023-10-06T12:31:43.456Z",
        "favoriteCity": 0

      })

      setUser(res.data)
    } catch (err) {
      console.log(err);
    }




  }


  async function FetchUserArticles() {

    try {
      console.log("Fetching Articles for User ... ");
      const token = GetToken()

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const res = await axios.get("https://localhost:7226/api/Article/GetUserArticle?id=" + id)
      setUserArticles(res.data)

    } catch (error) {
      console.log(error);
    }

  }

  if (user == null)
    return null

  return (
    <>

      <h1>Profil de {user.name} {user.firstName}</h1>


      <div className='profile-page'>

        <div className='profile-page-menu'>
          <ul className='profile-page-menulist'>

            <li>
              <button className='btn btn-primary' onClick={() => { setTab(false); console.log(tab); }}>Informations du profil</button>
            </li>


            <li>
              <button className='btn btn-primary' onClick={() => { setTab(true); console.log(tab); }}>

                Articles et commentaires
              </button>
            </li>

            <li>
              <button className='btn btn-danger' onClick={() => { setTab(3); console.log(tab); }}>
                Se deconnecter
              </button>
            </li>

          </ul>
        </div>

        <div className='profile-page-display'>

          {tab == false && <div>

            <form method='POST' action='https://localhost:7226/api/User/Update'>

              <div className='form-group'>

                <label >Nom</label>
                <input className="form-control" type='text' defaultValue={user.name.trim()} onChange={(e) => setName(e.target.value)}  />
              </div>

              <div className='form-group'>

                <label>Prénom</label>
                <input className="form-control" type='text' defaultValue={user.firstName.trim()} onChange={(event) => setFirstname(event.target.value)}  />
              </div>

              <div className='form-group'>

                <label>Email</label>
                <input className="form-control" type='text' defaultValue={user.email.trim()} onChange={(e) => setEmail(e.target.value)}  />
              </div>

              <div className='form-group'>

                <label>Mot de passe</label>
                <input className="form-control" type='text' defaultValue={user.password.trim()} onChange={(e) => setPassword(e.target.value)}  />
              </div>

              <div className='form-group'>

                <label>Ville préférée </label>
                <input className="form-control" type='text' defaultValue={user.favoriteCity} value={user.favoriteCity} />
              </div>




              <button className='btn btn-primary' type='submit' onClick={(e) => {
                e.preventDefault()
                UpdateUser()

              }}> Mettre à jour les Informations </button>


            </form>


            <div>Mes articles et commentaires

              {userArticles && userArticles.map((article) => <div key={article.id}> {article.title} </div>)}


            </div>





          </div>}












        </div>

      </div>
    </>
  )
}

export default ProfileComponent