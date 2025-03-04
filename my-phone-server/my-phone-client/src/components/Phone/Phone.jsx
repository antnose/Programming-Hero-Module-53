import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phones = useLoaderData();
  const { name, image, price } = phones;
  return (
    <div>
      <img src={image} alt="" />
      <h1>Price is : {price} </h1>
      <p>Phone Model : {name} </p>
      <p>Price is : {price} </p>
    </div>
  );
};

export default Phone;
