import { createBrowserRouter } from "react-router-dom"
// import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from './pages/HomePage.jsx'

import M1 from "./pages/Materi/M1";
import M2 from "./pages/Materi/M2";
import M3 from "./pages/Materi/M3";
import M4 from "./pages/Materi/M4";
import M5 from "./pages/Materi/M5";
import M6 from "./pages/Materi/M6";
import M7 from "./pages/Materi/M7";

import MenuKuis from "./pages/Kuis/MenuKuis.jsx";
import T1 from "./pages/Kuis/T1.jsx";
import T2 from "./pages/Kuis/T2.jsx";
import T3 from "./pages/Kuis/T3.jsx";
import T4 from "./pages/Kuis/T4.jsx";

import MenuLatihan from "./pages/Latihan/MenuLatihan.jsx";
import TL1 from "./pages/Latihan/TL1.jsx";
import TL2 from "./pages/Latihan/TL2.jsx";
import TL3 from "./pages/Latihan/TL3.jsx";
import TL4 from "./pages/Latihan/TL4.jsx";
import Pembahasan1 from "./pages/Latihan/Pembahasan1.jsx";
import Pembahasan2 from "./pages/Latihan/Pembahasan2.jsx";
import Pembahasan3 from "./pages/Latihan/Pembahasan3.jsx";
import Pembahasan4 from "./pages/Latihan/Pembahasan4.jsx";

import ScrollToTop from './components/ScrollToTop'
import NotFound from "./pages/NotFound.jsx";


// export const router = createBrowserRouter(
//   [
//     {path: "/", element: <HomePage/>},
    
//     {path:"/materi/sequence-diagram", element:<M1 />},
//     {path:"/materi/notasi-sequence-diagram", element:<M2 />},
//     {path:"/materi/lifeline-notation", element:<M3 />},
//     {path:"/materi/message-arrow", element:<M4 />},
//     {path:"/materi/activation-bar", element:<M5 />}, 
//     {path:"/materi/cara-membuat-sequence-diagram", element:<M6 />}, 
//     {path:"/materi/contoh-sequence-diagram", element:<M7 />}, 

//     {path: "/kuis", element: <MenuKuis />},
//     {path: "/kuis/T1", element: <T1 />},
//     {path: "/kuis/T2", element: <T2 />},
//     {path: "/kuis/T3", element: <T3 />},
//     {path: "/kuis/T4", element: <T4 />},
    
//     {path: "/latihan", element: <MenuLatihan/>},
//     {path: "/latihan/T1", element: <TL1/>},
//     {path: "/latihan/T2", element: <TL2/>},
//     {path: "/latihan/T3", element: <TL3/>},
//     {path: "/latihan/T4", element: <TL4/>},
//     {path: "/latihanT1/pembahasanT1", element: <Pembahasan1/>},
//     {path: "/latihanT2/pembahasanT2", element: <Pembahasan2/>},
//     {path: "/latihanT3/pembahasanT3", element: <Pembahasan3/>},
//     {path: "/latihanT4/pembahasanT4", element: <Pembahasan4/>},
//     {path: "/testing", element: <Testing/>},
//   ]
// )

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop /> {/* Tambahkan ScrollToTop di sini */}
        <HomePage />
      </>
    ),
   errorElement: <NotFound />,
  },
  {
    path: "/materi/sequence-diagram",
    element: (
      <>
        <ScrollToTop />
        <M1 />
      </>
    ),
  },
  {
    path: "/materi/notasi-sequence-diagram",
    element: (
      <>
        <ScrollToTop />
        <M2 />
      </>
    ),
  },
  {
    path: "/materi/lifeline-notation",
    element: (
      <>
        <ScrollToTop />
        <M3 />
      </>
    ),
  },
  {
    path: "/materi/message-arrow",
    element: (
      <>
        <ScrollToTop />
        <M4 />
      </>
    ),
  },
  {
    path: "/materi/activation-bar",
    element: (
      <>
        <ScrollToTop />
        <M5 />
      </>
    ),
  },
  {
    path: "/materi/cara-membuat-sequence-diagram",
    element: (
      <>
        <ScrollToTop />
        <M6 />
      </>
    ),
  },
  {
    path: "/materi/contoh-sequence-diagram",
    element: (
      <>
        <ScrollToTop />
        <M7 />
      </>
    ),
  },
  {
    path: "/kuis",
    element: (
      <>
        <ScrollToTop />
        <MenuKuis />
      </>
    ),
  },
  {
    path: "/kuis/T1",
    element: (
      <>
        <ScrollToTop />
        <T1 />
      </>
    ),
  },
  {
    path: "/kuis/T2",
    element: (
      <>
        <ScrollToTop />
        <T2 />
      </>
    ),
  },
  {
    path: "/kuis/T3",
    element: (
      <>
        <ScrollToTop />
        <T3 />
      </>
    ),
  },
  {
    path: "/kuis/T4",
    element: (
      <>
        <ScrollToTop />
        <T4 />
      </>
    ),
  },
  {
    path: "/latihan",
    element: (
      <>
        <ScrollToTop />
        <MenuLatihan />
      </>
    ),
  },
  {
    path: "/latihan/T1",
    element: (
      <>
        <ScrollToTop />
        <TL1 />
      </>
    ),
  },
  {
    path: "/latihan/T2",
    element: (
      <>
        <ScrollToTop />
        <TL2 />
      </>
    ),
  },
  {
    path: "/latihan/T3",
    element: (
      <>
        <ScrollToTop />
        <TL3 />
      </>
    ),
  },
  {
    path: "/latihan/T4",
    element: (
      <>
        <ScrollToTop />
        <TL4 />
      </>
    ),
  },
  {
    path: "/latihanT1/pembahasanT1",
    element: (
      <>
        <ScrollToTop />
        <Pembahasan1 />
      </>
    ),
  },
  {
    path: "/latihanT2/pembahasanT2",
    element: (
      <>
        <ScrollToTop />
        <Pembahasan2 />
      </>
    ),
  },
  {
    path: "/latihanT3/pembahasanT3",
    element: (
      <>
        <ScrollToTop />
        <Pembahasan3 />
      </>
    ),
  },
  {
    path: "/latihanT4/pembahasanT4",
    element: (
      <>
        <ScrollToTop />
        <Pembahasan4 />
      </>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);