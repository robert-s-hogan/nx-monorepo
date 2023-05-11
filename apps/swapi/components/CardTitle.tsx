interface Props {
  name: string;
  className?: string;
}

const CardTitle = ({ name, className }: Props) => {
  return (
    <h3 className={`z-10 absolute p-2 right-2 m-0 ${className} z-20`}>
      {name}
    </h3>
  );
};

export default CardTitle;
