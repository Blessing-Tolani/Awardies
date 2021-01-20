import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import ModalForm from "../components/ModalForm";
import {useState} from "react";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

export default function IndexPage() {
  const [movie, setMovies] = useState([]);
  const [nomination, setNomination] = useState([]);
   const [modal, setModal] = useState(true);
 
  return (
    <div>
      <Head>
        <title>Awardies</title>
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Sofia&family=Bodoni+Moda&family=Old+Standard+TT&display=swap"
          rel="stylesheet"
        />
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div>
       
        <AlertProvider template={AlertTemplate} >
          <Header state={movie} handler={setMovies} visibility = {modal} handler2 = {setModal} />
          <Main topic={movie} handler = {setNomination}/>
        </AlertProvider>
        <ModalForm nominateList = {nomination} visibility = {modal} handler2 = {setModal} />
      </div>
    </div>
    

   
  )
}
