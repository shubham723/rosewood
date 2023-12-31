import { Inter } from 'next/font/google'
import './globals.css'
import './assets/css/bootstrap.min.css'
import './assets/css/animate.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/aos.css'
import './assets/css/bootstrap-datepicker.css'
import './assets/css/jquery.timepicker.css'
import './assets/css/fancybox.min.css'
import './assets/css/style.css'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rosewood Hotel',
  description: 'Hotel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=|Roboto+Sans:400,700|Playfair+Display:400,700">

      <link rel="stylesheet" href="fonts/ionicons/css/ionicons.min.css">
  <link rel="stylesheet" href="fonts/fontawesome/css/font-awesome.min.css"> */}

      <body className={inter.className}>{children}</body>
      <Script src="./assets/js/jquery-3.3.1.min.js"></Script>
      <Script src="./assets/js/jquery-migrate-3.0.1.min.js"></Script>
      <Script src="./assets/js/popper.min.js"></Script>
      <Script src="./assets/js/bootstrap.min.js"></Script>
      <Script src="./assets/js/owl.carousel.min.js"></Script>
      <Script src="./assets/js/jquery.stellar.min.js"></Script>
      <Script src="./assets/js/jquery.fancybox.min.js"></Script>
      <Script src="./assets/js/aos.js"></Script>
      <Script src="./assets/js/bootstrap-datepicker.js"></Script> 
      <Script src="./assets/js/jquery.timepicker.min.js"></Script> 
      <Script src="./assets/js/main.js"></Script>
    </html>
  )
}
