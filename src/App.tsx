import Layout from "./components/Layout/Layout";
import Swal from 'sweetalert2';
import {useRef, useEffect} from 'react'

function App() {
  // const loadRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   window?.addEventListener('load', () => {
  //     Swal.fire({
  //       icon: "error",
  //       title: "ごめん😕",
  //       text: "このページは開発中です",
  //       color: "#7765ff",
  //       background: "#102048",
  //     })
  //   });
  // }, []);
  return (
    <Layout/>
    );
}

export default App;
