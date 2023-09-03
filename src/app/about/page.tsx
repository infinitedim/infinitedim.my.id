import { Heading, Paragraph } from "@/components";
import "@total-typescript/ts-reset";

export default function Page() {
  return (
    <div className="container">
      <Heading
        as="h1"
        className="text-5xl font-bold mb-10"
      >
        About me
      </Heading>
      <Paragraph className="text-xl font-medium tracking-tight mb-5">
        {/* Hello there, my name is Dimas Saputra, i am a software developer at
        voltras international, i was born in Jakarta, Indonesia in second July
        2004 and i start coding when i was 10th grade in vocational highscool
        named smk boedi luhur. */}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        necessitatibus alias natus beatae asperiores enim ex doloribus facere id
        eligendi tenetur laudantium labore, earum dicta quod voluptatem incidunt
        nisi. Et!
      </Paragraph>
      <Paragraph className="text-xl font-medium tracking-tight mb-5">
        {/* when i first write code i was create a hello world, yeah it&#8216;s very
        common for every programmer to write the first code with hello world,
        and when i first learn to code, i was use html for the language */}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        deserunt ea ab odit in aliquid, hic quia amet autem sit unde at eveniet
        doloribus dolore. Quidem aliquid dolorem facere atque?
      </Paragraph>
      <Paragraph className="text-xl font-medium tracking-tight mb-5">
        {/* and after that i falling in love with code and learn without mentor,
        teacher or lecturer to teach me about code */}
      </Paragraph>
      {/* <Paragraph>so its about me, maybe i will update this later</Paragraph> */}
    </div>
  );
}
