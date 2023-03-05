import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {}

export interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  discountedPrice?: number;
  label: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  price,
  discountedPrice,
  label,
  onClick,
}) => {
  return (
    <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl border border-red-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <img className="w-full rounded" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium text-gray-800">
            {discountedPrice && (
              <div className="flex items-center">
                <span className="text-red-500 mr-1 line-through">${price}</span>
                <span className="text-green-500">${discountedPrice}</span>
              </div>
            )}
            {!discountedPrice && <span>${price}</span>}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
            onClick={onClick}
          >
            {label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
