import { CardProps } from "@/interfaces";

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <img src={image} alt={title} className="w-full h-auto rounded-lg" />
    </div>
  );
}