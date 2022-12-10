import { NavLink } from 'react-router-dom';
// import './JobIndexItem.css';

const GalleryIndexItem = ({ gallery }) => {
  return (
      <ul className="gallery-item">
        <li>
          <nav>
           <NavLink to={`/galleries/${gallery.id}`}>Name: {gallery.name}</NavLink>
          </nav>
        </li>
      </ul>
  )
};

export default GalleryIndexItem;