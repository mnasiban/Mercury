import image from "../../public/imgtest.jpg";
import SolidCard from "../commons/solidcard/SolidCard";

function SingleCard({ item }) {
  console.log(item, "item");
  return (
    <SolidCard
      top="-22%"
      solidColor="#8291FF"
      circleColor="#437ED6"
      backgroundColor={item.color}
      rightSolidClasses="!bottom-[0%] !right-[-59%]"
      leftSolidClasses="!bottom-[0%] !left-[-59%]"
      width={160}
      height={130}
      containerClassNames="flex flex-col items-center justify-center h-full gap-2"
      // icon={
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     viewBox="0 0 24 24"
      //     fill="currentColor"
      //     className="w-6 h-6 text-white"
      //   >
      //     <path
      //       fillRule="evenodd"
      //       d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      //       clipRule="evenodd"
      //     />
      //   </svg>
      // }
      icon={<img className="w-8 h-8 rounded-full" src={image} alt="" />}
    >
      <h3 className="text-primary-500 text-16px w-[187px] font-iransansBold text-center">
        {item.name}
      </h3>
      <p className="text-12px text-primary-400">{item.id}</p>
    </SolidCard>
  );
}

export default SingleCard;
