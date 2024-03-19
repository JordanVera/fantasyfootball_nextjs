import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <div className="mx-auto max-w-[900px] flex flex-col gap-16 mb-10">
      <div className="flex flex-row items-center gap-10">
        <div className="w-1/3">
          <Image
            src="/players/obj.png"
            height={300}
            width={300}
            alt="odell beckham jr"
          />
        </div>
        <div className="w-2/3 flex flex-col gap-5">
          <h2 className="font-bold text-3xl text-left">
            What Is NFL Last Longer
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            temporibus deserunt? Debitis quibusdam voluptatibus dolore, delectus
            quo, quia totam cum adipisci aperiam commodi nulla ea necessitatibus
            dignissimos. Eligendi tenetur eius suscipit perspiciatis iste optio
            reprehenderit itaque quod cum amet? Temporibus odio velit
            perspiciatis libero impedit autem distinctio accusantium perferendis
            accusamus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatibus provident et nesciunt nostrum in pariatur eligendi
            quam. Saepe, nemo?
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-10">
        <div className="w-2/3 flex flex-col gap-5">
          <h2 className="font-bold text-3xl text-left">How to Play</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            temporibus deserunt? Debitis quibusdam voluptatibus dolore, delectus
            quo, quia totam cum adipisci aperiam commodi nulla ea necessitatibus
            dignissimos. Eligendi tenetur eius suscipit perspiciatis iste optio
            reprehenderit itaque quod cum amet? Temporibus odio velit
            perspiciatis libero impedit autem distinctio accusantium perferendis
            accusamus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatibus provident et nesciunt nostrum in pariatur eligendi
            quam. Saepe, nemo?
          </p>
        </div>

        <div className="w-1/3">
          <Image
            className="scale-x-[-1]"
            src="/players/cheetah.png"
            height={300}
            width={300}
            alt="odell beckham jr"
          />
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;
