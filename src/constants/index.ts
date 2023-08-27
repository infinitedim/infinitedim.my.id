import {
  ButtonTypeInterface,
  HeadingTypeInterface,
} from "@/interfaces/constants";

export const ButtonType: ButtonTypeInterface = {
  button: "button",
  submit: "submit",
  reset: "reset",
} as const;

export const HeadingType: HeadingTypeInterface = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

export const myStory: string =
  "Hello, I'm Dimas Saputra, I'm a ReactionJS specialised frontend developer based in Bekasi, Indonesia.I am now a software developer at PT Voltras International, a little story of how i got to know programming, at that time i was in grade 10 high school and i was told about html by my teacher, and i started learning htmlcss and a little javascript and php, a few weeks later my teacher was interested in taking me to a competition called ITNSA Web Technology, it was a district level competition, at that time the competition required to use Laravel, while i had only studied php for 2 weeks, as a result i did not win but i was happy to be able to add new knowledge. After that I also started learning self-taught until grade 12, when I was learning I experienced many difficulties like unqualified devices and slow internet networks, I think that's all I can say thank you." as const;
