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
 
  return (
    <div>
      <Head>
        <title>The Smatron</title>
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
        <Header state={movie} handler={setMovies} />
        <AlertProvider template={AlertTemplate} >
          <Main topic={movie} handler = {setNomination}/>
        </AlertProvider>
        <ModalForm nominateList = {nomination} />
      </div>
    </div>
    

   
  )
}
