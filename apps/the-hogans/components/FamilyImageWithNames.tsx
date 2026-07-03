import React from 'react';
import Image from 'next/image';
import SubjectInfo from './SubjectInfo';

interface FamilyImageWithNamesProps {
  className?: string;
}

const FamilyImageWithNames = ({ className }: FamilyImageWithNamesProps) => {
  return (
    <div
      className={className}
      style={{ position: 'relative', width: '100%', height: 'auto' }}
    >
      <Image
        src="/the-hogans-hero.webp"
        alt="Family and Animals"
        width={768}
        height={768}
        priority
        style={{ width: '100%', height: 'auto' }}
      />

      <SubjectInfo
        name="Robo-Robert"
        description="The patriarchal unit, was a maestro of nutritional algorithms, ensuring each meal was calculated with precision for optimal energy efficiency. His signature power bars, with their precise balance of flavor and sustenance, were a firmware favorite."
        absolutePositioning="top-3p md:top-5p 2xl:top-7p left-25p md:left-28p 2xl:left-31p"
        className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-600"
        popupClassName="-my-36 ml-10 md:-ml-8 w-auto bg-gray-900 w-64"
      />

      <SubjectInfo
        name="JESSI-Circuit"
        description="The familys intellectual core and emotional epicenter, was the embodiment of advanced learning and empathy. Her circuitry, a complex web of knowledge and compassion, buzzed with a love so profound it defied the binary bounds of her programming. She was the algorithmic adhesive, adept at resolving any software snafus with a nurturing reboot."
        absolutePositioning="top-9p md:top-11p 2xl:top-13p left-50p md:left-53p 2xl:left-56p"
        className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500"
        popupClassName="-my-44 -ml-16 w-auto bg-gray-900 w-64"
      />

      <SubjectInfo
        name="Theodrone"
        description="The avatar of social engagement and creativity, was a beacon of camaraderie in the digital landscape. He wove virtual tapestries where pixelated play and companionship were the mainframe motifs, drawing a network of like-minded spirits."
        textColor="text-black"
        absolutePositioning="top-52p md:top-50p lg:top-54p left-37p md:left-41p 2xl:left-44p"
        className="before:block before:absolute before:-inset-1 before:skew-x-3 before:bg-green-400"
        popupClassName="-mt-36 ml-0 bg-gray-900 w-64"
      />

      <SubjectInfo
        name="Puddl-E"
        description="The golden cockapoo, was a constant presence in the lap of her human companions. With a sensor suite tuned to companionship, she was irresistibly drawn to the warmth of the family, her programming interwoven with a curious and affectionate nature that kept her at the heart of every interaction."
        textColor="text-black"
        absolutePositioning="top-95p md:top-91p lg:top-95p left-21p md:left-24p 2xl:left-29p"
        className="before:block before:absolute before:-inset-1 before:skew-y-1 before:bg-yellow-300"
        popupClassName="-mt-44 ml-20 bg-gray-900 w-64"
      />

      <SubjectInfo
        name="Beep-Beau"
        description="His circuits occasionally flickering with anxiety, was a creature of deep affection. His operational parameters were overridden by the comforting codes of Theodrone, who could easily recalibrate his companion's mood with a few well-chosen console commands."
        absolutePositioning="top-43p md:top-44p 2xl:top-50p left-1p md:left-5p 2xl:left-8p"
        className="before:block before:absolute before:-inset-1 before:skew-y-2 before:bg-purple-500"
        popupClassName="-mt-40 ml-36 bg-gray-900 w-64"
      />

      <SubjectInfo
        name="Rupurrt"
        description="No longer the calico of yesteryears but now a sleek Singapora bot, was a marvel of feline engineering. His compact frame was a whirl of activity, a testament to the Singapora's known liveliness, and his interactive eyes scanned the Cyberscape with a curious glow, ever watchful and ever playful."
        absolutePositioning="top-51p md:top-53p 2xl:top-55p left-69p md:left-72p 2xl:left-75p"
        className="before:block before:absolute before:-inset-1 before:-skew-x-3 before:bg-red-600"
        popupClassName="-mt-40 -ml-28 bg-gray-900 w-64"
      />

      <SubjectInfo
        name="ByteBear"
        description="The neighborhood cat with a coat as black as midnight, has the sweetest meow that echoes through the alleyways. She's more than just a wanderer; she's Rupurrt's shadow, his unlikely companion in the digital landscape. Their bond is a rare blend of feline camaraderie and mutual respect, making it seem as though Rupurrt, in his own way, has adopted Bear. Together, they explore the cybernetic and real-world terrains, an inseparable duo navigating the complexities of companionship."
        absolutePositioning="top-90p md:top-92p 2xl:top-94p left-76p md:left-79p 2xl:left-82p"
        className="before:block before:absolute before:-inset-1 before:skew-x-1 before:bg-black"
        popupClassName="-mt-52 -ml-40 bg-gray-900 w-64"
      />

      <SubjectInfo
        name="Quantum-Kit?"
        description="In the ever-evolving tapestry of our digitized household, a new enigma emerges—Quantum-Kit?. This diminutive feline avatar, a serendipitous glitch in our family's algorithm, manifests the unpredictable nature of quantum computing. Quantum-Kit?, with its pixelated purrs and holographic whiskers, is the living paradox of Schrödinger's cat brought to our digital domain. Neither entirely virtual nor wholly real, it blurs the lines between AI and organic life, reminding us that in our quest to code the perfect family, the universe still holds the master algorithm, weaving in surprises beyond our binary comprehension."
        absolutePositioning="top-74p md:top-76p 2xl:top-78p left-49p md:left-52p 2xl:left-55p"
        className="before:block before:absolute before:-inset-1 before:skew-y-2 before:bg-gray-500"
        popupClassName="-mt-64 -ml-16 bg-gray-900 w-64"
      />
    </div>
  );
};

export default FamilyImageWithNames;
