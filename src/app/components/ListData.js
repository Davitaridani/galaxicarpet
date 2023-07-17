import Card from "./Card";

const ListData = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </>
  );
};

export default ListData;
