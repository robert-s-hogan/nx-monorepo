import { AiOutlineCheck } from 'react-icons/ai';

const ListItem = ({ text }) => (
  <li className="flex items-start">
    <AiOutlineCheck
      className="fill-secondary-color font-semibold mt-1 mr-2"
      size={20}
    />
    <span>{text}</span>
  </li>
);

export default ListItem;
