import Link from "next/link";
import { Button, Heading, Paragraph } from "@/components/atoms";

export default function Page() {
  return (
    <section className="container max-w-5xl mx-auto body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-mood-gray rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="map absolute inset-0 bg-custom-white-900"
            src="https://www.google.com/maps/embed?width=100%&height=600&pb=!1m14!1m12!1m3!1d3966.117591762508!2d107.05738060000002!3d-6.248231899999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1684254468298!5m2!1sen!2sid"
          />
          <div className="relative flex flex-wrap py-6 rounded shadow-md bg-custom-white-900">
            <div className="lg:w-1/2 px-6">
              <Heading
                className="title-font font-semibold tracking-widest text-xs"
                title="Address"
              >
                ADDRESS
              </Heading>
              <Paragraph
                className="mt-1"
                title="Jl. Pendidikan Gg. KPD 2, Mangunjaya, Bekasi Regency, West Java. Indonesia"
              >
                Jl. Pendidikan Gg. KPD 2, Mangunjaya, Bekasi Regency, West Java.
                Indonesia
              </Paragraph>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <Heading
                className="title-font font-semibold tracking-widest text-xs"
                title="Email"
              >
                EMAIL
              </Heading>
              <Link
                className="text-sky-500 leading-relaxed"
                href="mailto:dragdimas9@gmail.com"
                title="dragdimas9@gmail.com"
              >
                dragdimas9@gmail.com
              </Link>
              <Heading
                className="title-font font-semibold tracking-widest text-xs mt-4"
                title="Phone"
              >
                PHONE
              </Heading>
              <Paragraph
                className="leading-relaxed"
                title="+62 821-1405-4905"
              >
                +62 821-1405-4905
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <Heading
            className="text-lg mb-1 font-medium title-font"
            title="feedback"
          >
            Feedback
          </Heading>
          <Paragraph className="leading-relaxed mb-5">
            give me feedback and suggestions through the form below.
          </Paragraph>
          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-sm"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-mood-gray focus:border-mood-gray focus:ring-2 focus:ring-mood-gray text-base outline-none` text-mood-gray py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Fullname"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-700 focus:border-mood-gray focus:ring-2 focus:ring-mood-gray text-base outline-none text-mood-gray py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Email"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded border border-gray-700 focus:border-mood-gray focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-mood-gray py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              placeholder="Hii, i'm interest to connect with you, your work is very awesome"
            />
          </div>
          <Button className="text-white bg-mood-gray border-0 py-2 px-6 focus:outline-none hover:bg-custom-black-900 rounded-lg text-lg">
            Send to me
          </Button>
          <Paragraph className="text-xs text-gray-400 text-opacity-90 mt-3">
            Your feedback and suggestion automatically send to my email
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
