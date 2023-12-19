import resi from "./resim/resim1.jpg";
import hansel from "./resim/resim1.jpg";
import Button from "react-bootstrap/Button";
import Buton from "./buton.jsx";

function App() {
  return (
    <div>
      <h3>
        Bu amk resmini koymak neden bu kadar uzun sürdü.. götünden uydurma
        kodlar sallama
      </h3>
      <img src={hansel} alt="hansel" />
      <h1>Resim Ekleme - İmport Yöntemi</h1>
      <hr />
      <img src={resi} alt="resim 1" />
      <Button variant="info">Info</Button>
       <Buton />
    </div>
  );
}
export default App;

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <button>BAS</button>
//       <Button variant="outlined">Outlined</Button>
//       <Button variant="outline-danger">Danger</Button> <App />
//       <Message />
//     </div>
//   );
// }
