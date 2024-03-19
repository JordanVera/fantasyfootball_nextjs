import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <div className="mx-auto max-w-[900px] flex flex-col gap-5 my-10">
      <h2 className="font-bold text-3xl text-center">
        What Is NFL Last Longer
      </h2>

      <div className="flex flex-row gap-10">
        <div className="w-1/3">
          <img
            src="/images/logo.png"
            // height={200}
            // width={200}
            alt="odell beckham jr"
          />
        </div>
        <div className="w-2/3 flex flex-col gap-5">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            expedita reprehenderit officiis exercitationem maxime nam ex
            repudiandae sapiente magni eius ut fuga nobis tempora nulla ipsam
            est commodi sequi, eveniet qui sed, odit et quidem? Officia corporis
            quas obcaecati ex?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatibus provident et nesciunt nostrum in pariatur eligendi
            quam. Saepe, nemo?
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;
