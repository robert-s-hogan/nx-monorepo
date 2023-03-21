// import Image from 'next/image';
import useSWR from 'swr';
import Hero from '/public/images/hero_pooh.png';
import DaoismLayout from '../components/layout/DaoismLayout';

// import {
//   useKeenSlider,
//   KeenSliderPlugin,
//   KeenSliderInstance,
// } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
  fetch(...args).then((res) => res.json());
// function ThumbnailPlugin(
//   mainRef: MutableRefObject<KeenSliderInstance | null>
// ): KeenSliderPlugin {
//   return (slider) => {
//     function removeActive() {
//       slider.slides.forEach((slide) => {
//         slide.classList.remove('active');
//       });
//     }
//     function addActive(idx: number) {
//       slider.slides[idx].classList.add('active');
//     }

//     function addClickEvents() {
//       slider.slides.forEach((slide, idx) => {
//         slide.addEventListener('click', () => {
//           if (mainRef.current) mainRef.current.moveToIdx(idx);
//         });
//       });
//     }

//     slider.on('created', () => {
//       if (!mainRef.current) return;
//       addActive(slider.track.details.rel);
//       addClickEvents();
//       mainRef.current.on('animationStarted', (main) => {
//         removeActive();
//         const next = main.animator.targetIdx || 0;
//         addActive(main.track.absToRel(next));
//         slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
//       });
//     });
//   };
// }

export function Index() {
  const { data, error } = useSWR('/api/chapters', fetcher);

  // const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
  //   initial: 0,
  // });
  // const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
  //   {
  //     initial: 0,
  //     slides: {
  //       perView: 4,
  //       spacing: 15,
  //     },
  //     breakpoints: {
  //       '(min-width: 481px)': {
  //         slides: {
  //           perView: 4,
  //           spacing: 15,
  //         },
  //       },
  //       '(min-width: 768px)': {
  //         slides: {
  //           perView: 6,
  //           spacing: 15,
  //         },
  //       },
  //       '(min-width: 992px)': {
  //         slides: {
  //           perView: 8,
  //           spacing: 15,
  //         },
  //       },
  //       '(min-width: 1024px)': {
  //         slides: { perView: 10, spacing: 15 },
  //       },
  //       '(min-width: 1280px)': {
  //         slides: { perView: 12, spacing: 15 },
  //       },
  //     },
  //   },
  //   [ThumbnailPlugin(instanceRef)]
  // );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <DaoismLayout>
      <div className="w-full bg-brand-black h-full py-32">
        <div className="max-w-5xl mx-auto px-5">
          {/* <nav className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="text-white font-bold text-2xl">道教 (Daoism)</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-white font-bold text-xl">Home</div>
            <div className="text-white font-bold text-xl">About</div>
            <div className="text-white font-bold text-xl">Contact</div>
          </div>
        </nav> */}
          {/* 
        <div ref={sliderRef} className="keen-slider text-white">
          {data.map((chapter, index) => (
            <div
              className={`keen-slider__slide number-slide${index} w-full shadow-2xl`}
              style={{ height: 'calc(100vh - 15rem)' }}
              key={chapter.chapter}
            >
              <Image src={chapter.image} alt="Hero" layout="fill" />
            </div>
          ))}
        </div>

        <div
          ref={thumbnailRef}
          className="keen-slider thumbnail pl-3 lg:px-2 -mt-10"
        >
          {data.map((chapter, index) => (
            <div
              className={`keen-slider__slide number-slide${index} h-16 w-8`}
              key={chapter.chapter}
            >
              <Image src={chapter.image} alt="Hero" layout="fill" />
            </div>
          ))}
        </div> */}

          {/* <div className="relative w-auto h-auto md:w-full">
          <Image src={Hero} alt="daoism" className="rounded-lg" />
        </div>
        <div className="space-x-2 mx-4 flex relative flex-wrap -mt-12">
          {data.map((chapter, index) => {
            if (index < 5) {
              return (
                <div key={index} className="w-16 h-16 shadow-2xl">
                  <Image src={Hero} alt={chapter.title} />
                </div>
              );
            }
          })}
        </div> */}
        </div>
      </div>
    </DaoismLayout>
  );
}

export default Index;
