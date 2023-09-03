import { Heading, Paragraph } from "@/components";
import "@total-typescript/ts-reset";

export default function Page() {
  return (
    <div>
      <Heading
        as="h1"
        className="text-3xl mb-5 font-bold tracking-tight"
      >
        Project
      </Heading>
      <Paragraph className="text-lg font-medium text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatum
        error culpa? Ab, dolorum! Id neque laborum laudantium doloremque
        provident aut inventore eveniet, quam, tempore impedit dolorum beatae
        velit in similique quo voluptatibus voluptatem, doloribus eum voluptatum
        eligendi totam suscipit tempora! Rerum veniam quam eveniet vitae vel
        doloribus
      </Paragraph>

      <div>
        <div className="mt-5 bg-red rounded-lg">
          <Heading as="h1">Miolica</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            alias veritatis aliquam necessitatibus. Sint unde maiores illum
            facere est, animi a possimus, quo nulla officia eligendi porro
            reiciendis vel eos architecto obcaecati, accusantium ullam impedit
            veniam sequi! Quas doloremque at, quam nulla eum sequi tenetur.
            Odit, impedit deleniti laborum placeat id vitae alias ducimus unde
            repellat facere necessitatibus dolores eligendi. Numquam, veniam
            nostrum? Qui, quasi aspernatur nihil soluta ad magnam blanditiis
            delectus, adipisci est, cupiditate reprehenderit inventore. Quod
            enim perspiciatis natus deserunt doloremque officia iusto quae
            temporibus numquam similique tenetur, necessitatibus atque deleniti.
            Labore deserunt, iure veniam doloremque aut natus!
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
