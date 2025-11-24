interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
