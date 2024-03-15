// import Image from 'next/image';
// import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

// const content = [
//   {
//     title: 'Sign Up',
//     text: 'When the game opens, create an account by visiting our sign in page.',
//     image: '/images/football-1.jpg',
//   },
//   {
//     title: 'Make Picks',
//     text: 'Pick one NFL team to win each week, no points spread. Easy, right?',
//     image: '/images/football-2.jpg',
//   },
//   {
//     title: 'Advance',
//     text: "Get it right and advance to the next week. Get it wrong and you're out.",
//     image: '/images/football-3.jpg',
//   },
// ];

// const Cards = () => {
//   return (
//     <div className="py-20">
//       <h2 className="text-3xl font-bold text-center">Three Step Process</h2>
//       <div className="flex flex-row gap-10 max-w-[1200px] mx-auto py-10">
//         {content.map((item, i) => (
//           <div className="w-1/3">
//             <ThreeDCardDemo
//               key={i}
//               title={item.title}
//               text={item.text}
//               image={item.image}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export function ThreeDCardDemo({ title, text, image }) {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           {title}
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           {text}
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="/images/obj.webp"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl brightness-75"
//             alt="thumbnail"
//           />
//         </CardItem>
//       </CardBody>
//     </CardContainer>
//   );
// }

// export default Cards;
