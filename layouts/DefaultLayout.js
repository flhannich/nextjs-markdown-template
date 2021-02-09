import Head from 'next/head'
import { Header, Footer, Accessibility } from '../components'

const DefaultLayout = ({
    children,
    siteContacts,
    pageTitle,
    pageDescription,
    pageImage,
    pageType,
    ...props }) => {

  return (
    <>
      <Head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="Description" content={pageDescription}></meta>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content={pageType} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:locale" content="de-DE" />

      </Head>
      
      <Accessibility 
        anchor={'mainContent'}
      />
      
      <Header />

      <main id="mainContent">{children}</main>

      <Footer siteContacts = {siteContacts} />

    </>
  )
}

export default DefaultLayout;