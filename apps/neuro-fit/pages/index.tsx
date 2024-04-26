import styles from './index.module.css'; // Ensure you import your CSS module
import Image from 'next/image';
import Carousel from '../components/Carousel';

export function Index() {
  const slides = [
    {
      src: 'https://placekitten.com/200/300',
      alt: 'Kitten 1',
      title: 'Kitten One',
      description: 'This is a cute kitten.',
    },
    {
      src: 'https://placekitten.com/200/300',
      alt: 'Kitten 2',
      title: 'Kitten Two',
      description: 'This is another cute kitten.',
    },
    {
      src: 'https://placekitten.com/200/300',
      alt: 'Kitten 3',
      title: 'Kitten Three',
      description: 'Yet another cute kitten.',
    },
  ];

  return (
    <div className="container mx-auto my-32">
      <div className={styles.wrapper}>
        <Carousel>
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <Image src={slide.src} alt={slide.alt} width={200} height={300} />
              <div className={styles.textBlock}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Index;
