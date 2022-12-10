import { NavLink } from "react-router-dom"

function GalleryNavigation ( {galleries} ) {
    console.log(galleries)
    return( 
      <nav>
        <h1>Galleries</h1>
        <NavLink exact to="/">
           Home Page
        </NavLink>
      </nav>
    )
}

export default GalleryNavigation