import HarvardArt from './data/harvardArt'
import GalleryNavigation from './components/GalleryNavigation';


const App = () => { 
  return ( 
    <>
      <GalleryNavigation galleries={HarvardArt.records} />
    </>
  );
};


export default App;










// function App() {
//   return (
//       <GalleryNavigation />
//     //<h1>Hello from App</h1>
//   );
// }


// const MyComponent = props => {
// 	return (
// 		<div className="quotes"> 
// 			<h1 id="title">I love JavaScript</h1>
// 		</div>
// 	);
// };
