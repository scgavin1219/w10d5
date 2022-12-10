import { NavLink } from "react-router-dom"
import GalleryIndex from "../GalleryIndex"


function GalleryNavigation ( {galleries} ) {
    console.log(galleries)
    return( 
      <nav>
        <h1>Galleries</h1>
        <NavLink exact to="/">
           Home Page
        </NavLink>
        <GalleryIndex/>
      </nav>
    )
}

export default GalleryNavigation