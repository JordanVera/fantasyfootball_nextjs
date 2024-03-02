import { useState } from 'react';
import { Inter } from 'next/font/google';
import { Hero } from '@/components/heros/Hero';
import { WavyHero } from '@/components/heros/WavyHero';
import TeamSlider from '@/components/homepage/TeamSlider';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-center ${inter.className} `}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-black dark:text-white font-bold inter-var text-center">
          Welcome to NFL Last Longer
        </h1>
        <p className="text-base md:text-lg mt-4 text-black dark:text-white font-normal inter-var text-center">
          Leverage the power of canvas to create a beautiful hero section
        </p>
      </div>

      <TeamSlider direction="left" />
      <TeamSlider direction="right" />

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
        dolorum et odit ea delectus consequuntur maxime numquam fugiat cumque?
        Sunt, consectetur quam? Nam unde, libero sequi reprehenderit ad dicta in
        magni voluptate fugit provident vitae beatae nemo cumque consequatur
        enim praesentium nobis officiis reiciendis voluptates incidunt quasi
        doloribus! Perferendis nisi cupiditate voluptatibus doloremque quae nemo
        placeat iusto commodi nihil? Ex, optio quaerat? Eligendi autem
        voluptatem nam reiciendis iure numquam quia, illum laudantium? Non
        laudantium quibusdam velit totam, assumenda consequatur, distinctio ea
        qui doloremque mollitia rerum? Temporibus vero, ut modi ratione
        consequuntur ducimus, sequi labore impedit aliquam incidunt veniam
        corporis esse reiciendis voluptatem totam rem, sit eum tempora magni
        ullam enim laboriosam! Veniam adipisci commodi sequi, alias vero eos
        dicta consectetur numquam et laborum labore doloremque quia natus
        tenetur fuga, aperiam in ipsam sed voluptates itaque quo vel amet
        minima. Illum sint cumque praesentium vitae! Commodi, optio accusamus.
        Natus minima, veritatis excepturi corporis officia, quia ut, unde esse
        nam repellendus sapiente ex qui. Voluptas obcaecati veniam delectus,
        itaque sapiente perspiciatis sed mollitia repellendus quod enim
        dignissimos? Autem sunt odio error cum tempore delectus sit ratione
        consectetur porro assumenda. Animi id facilis ducimus aliquam obcaecati,
        itaque, commodi dignissimos eaque, tenetur nemo quod maxime. Minus,
        molestias dolores. Obcaecati ullam nulla incidunt quam laborum nihil
        suscipit deleniti odit sunt quidem velit at temporibus, fugit ipsam
        voluptates? Quibusdam eligendi aperiam nihil sit perspiciatis temporibus
        accusamus numquam qui accusantium totam obcaecati, amet tenetur magnam
        repellat eum ut illum. Voluptas, quo dolorum. Rem aut corrupti
        voluptatibus dolore facere voluptas laborum recusandae blanditiis
        doloremque itaque maxime numquam similique consequatur, quam aperiam
        fugiat enim fuga laboriosam quasi, eaque praesentium. Natus nostrum
        error consequatur, ducimus doloremque sunt at inventore ex veritatis.
        Incidunt quod itaque modi architecto, aspernatur, repudiandae soluta
        numquam possimus suscipit harum sed. Eveniet, exercitationem laboriosam
        cupiditate quae odit sint ab veniam autem necessitatibus illo ipsum hic,
        accusantium aspernatur corrupti cumque maiores ex, atque veritatis alias
        tempore cum? Animi hic, minus eligendi quibusdam vitae eius error
        expedita sint tenetur tempora sit fugit temporibus, molestiae quis sed
        laborum nihil odio dolores velit officia voluptatum! Assumenda molestias
        cupiditate aspernatur eius vero distinctio non? Nobis repellat quaerat,
        eum eius obcaecati quia aperiam vel facilis quas ab modi quam rerum
        commodi temporibus in at nisi quod perferendis numquam provident
        corporis exercitationem? Fuga, assumenda eligendi soluta nam non ut?
        Modi, natus, vitae repellendus animi possimus a itaque quia laboriosam
        in deserunt, enim ullam accusantium nesciunt beatae illo. Provident
        suscipit minus, corporis tempora, deleniti laboriosam perspiciatis
        recusandae voluptate eius architecto placeat. Sequi sit, repudiandae
        praesentium deserunt delectus similique? Saepe, harum? Temporibus itaque
        consectetur fuga voluptatum, vel dolorum! Illum voluptas laborum vitae
        est totam? Beatae accusamus, tenetur nihil cupiditate rem cumque porro
        qui nesciunt, dolorum doloribus dolore fugiat animi doloremque enim
        facilis corporis ducimus unde aliquid quidem repellendus voluptatem
        ipsum assumenda? Voluptas unde totam eos harum quaerat officiis quos,
        suscipit enim cum maxime eligendi dolores praesentium sit nemo facere
        minus esse vero, hic, numquam velit nesciunt! Molestias corporis tempore
        fuga impedit aliquid voluptatibus quod ducimus?
      </div>
    </main>
  );
}
