
import galleryData from '../data/harvardArt';
import GalleryIndexItem from './GalleryIndexItem';

const GalleryIndex = props => {
  const galleries = Object.values(galleryData.records);
  console.log('galleries', galleries);

  return (
    <div className='gallery-index'>
      {galleries.map((gallery, i) => (
        <GalleryIndexItem key={i} gallery={gallery} />
      ))}
    </div>
  )
};

export default GalleryIndex;