import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";



export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>The Shoppies</title>
        <link
          href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Bodoni+Moda&family=Old+Standard+TT&display=swap"
          rel="stylesheet"
        />
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div>
        <Header />
        <div>
        <Main />
      </div>
      </div>
     
    </div>
  )
}
