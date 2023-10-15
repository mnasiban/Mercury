import image from "../../public/imgtest.jpg"

function SingleCard({ item }) {
  console.log(item, "item");
  return (
    <div style={{background:item.color}} className=" flex justify-center items-center h-96 rounded-[24px] border border-black relative" >
      <img src={image} alt="image not loaded" className="h-16 w-16 rounded-full absolute top-3 left-3" />
      <div className=" top-3 absolute right-3 bg-yellow-200 rounded-full h-7 w-7 flex justify-center items-center">{item.id}</div>
      <div>{item.name}</div>
      <div></div>
    </div>
  );
}

export default SingleCard;
