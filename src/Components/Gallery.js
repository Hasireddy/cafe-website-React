import { useState } from 'react';
import './Gallery.css';

const IMAGE_DATA = [
  'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/3742854/pexels-photo-3742854.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/704982/pexels-photo-704982.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/377903/pexels-photo-377903.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
];

const PictureElement = ({ picture }, alt = '...') => {
  return (
    <div className='col-md-4 col-sm-6 bg-image hover-zoom img-hover-zoom--colorize'>
      <img
        src={picture}
        height={250}
        style={{ objectFit: 'cover' }}
        className='d-block w-100 shadow-1-strong rounded mb-4 card-img hover-shadow'
        alt={alt}
      />
    </div>
  );
};

export default function Gallery() {
  const [pictures] = useState(IMAGE_DATA);

  return (
    <div className='container py-4 '>
      <div className='py-4'>
        <h1>Gallery</h1>
      </div>
      <div className={'row d-flex justify-content-around'}>
        {pictures.map((picture, i) => (
          <PictureElement key={`picture-${i}`} picture={picture} />
        ))}
      </div>
    </div>
  );
}

// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((err) => {
//   console.log(err);
// });

// fetch('https://coffee.alexflipnote.dev/random', { mode: 'no-cors' }).then(
//   (response) => response.blob().then((img) => console.log(img))
// );

// useEffect(() => {
//   const getCoffeImages = async () => {
//     for (let image of IMAGE_DATA) {
//       await fetch(image);
//     }
//   };
// }, []);
