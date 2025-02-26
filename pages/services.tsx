import {
  DesktopIcon,
  LaptopIcon,
  MobileIcon,
  Component2Icon,
  CheckIcon,
} from "@radix-ui/react-icons";
import { CardSpotlightEffect } from "components/lab/SpotlightEffect";
import SectionContact from "components/SectionContact";
import Link from "next/link";
import Button from "components/Button";
import { NextSeo } from "next-seo";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: number;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
}) => {
  const pricing = price.toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  return (
    <CardSpotlightEffect>
      <div className="relative rounded-md border border-slate-300 bg-slate-300/5 p-6 dark:border-slate-700">
        <div className="mb-3 flex items-center">
          <div className="rounded-md border border-slate-200 p-1 dark:border-slate-800 dark:bg-black">
            {icon}
          </div>
          <h2 className="ml-2 mr-3 text-lg">{title}</h2>
          <div className="rounded-md border border-slate-200 bg-neutral-100 p-1 text-xs font-light dark:border-slate-800 dark:bg-neutral-900">
            {pricing}+
          </div>
        </div>
        <p className="mb-4 max-w-xl text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <Button
          onClick={() => {
            return window.open("mailto:julien.thibeaut@gmail.com");
          }}
        >
          Discuss your project
        </Button>
      </div>
    </CardSpotlightEffect>
  );
};

type ValueCardProps = {
  title: string;
  description: string;
};

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div>
      <div className="mb-1 flex items-center">
        <CheckIcon />
        <span className="pl-2">{title}</span>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const HireMePage = () => {
  return (
    <>
      <NextSeo title="Services" />
      <div>
        <h1 className="mb-6 text-xl font-medium">Services</h1>
        <p className="mb-8">
          Hi, I'm Julien, a freelance front-end developer with years of
          experience. I love building and improving digital projects. Whether
          you're starting a new project or need to enhance an existing one, I'm
          here to help. Check out some of my work on my{" "}
          <Link href="/" className="font-medium underline">
            homepage.
          </Link>
        </p>
        <h3 className="mb-1 font-medium">My tech stack</h3>
        <ul className="flex flex-wrap gap-x-6 text-gray-700 dark:text-gray-300">
          <li>React</li>
          <li>React Native</li>
          <li>Next.js</li>
          <li>Typescript</li>
          <li>GraphQL</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>And more...</li>
        </ul>
        <h3 className="mb-4 mt-12 font-medium">What I can do for you</h3>
        <div className="flex flex-col gap-8">
          <ServiceCard
            icon={<LaptopIcon />}
            title="Website Development"
            description="Crafting high-quality, responsive websites tailored to your business needs. Leveraging modern technologies like React and Next.js, I build sites that are fast, SEO-friendly, and provide an exceptional user experience."
            price={6000}
          />
          <ServiceCard
            icon={<DesktopIcon />}
            title="Web Application Development"
            description="Building robust and scalable web applications using the latest front-end technologies. With a strong focus on performance and usability, I use React, TypeScript, and other modern tools to create applications that meet your specific requirements and deliver value to your users."
            price={10000}
          />
          <ServiceCard
            icon={<MobileIcon />}
            title="Mobile Application Development"
            description="Creating engaging mobile applications using React Native or ionic. Whether you need a standalone app or want to extend your web application to mobile, I can deliver a solution that provides a seamless user experience across devices."
            price={15000}
          />
          <ServiceCard
            icon={<Component2Icon />}
            title="Design System Creation"
            description="Developing comprehensive design systems that ensure consistency across your digital products. This includes defining reusable components, styles, and UX patterns, making it easier to maintain and evolve your applications over time."
            price={5000}
          />
          <p>
            I can also help you with:{" "}
            <strong className="font-medium">landing page</strong>,{" "}
            <strong className="font-medium">e-commerce website</strong>,{" "}
            <strong className="font-medium">desktop application</strong>,{" "}
            <strong className="font-medium">performance optimization</strong>,{" "}
            <strong className="font-medium">code review</strong>,{" "}
            <strong className="font-medium">refactoring</strong>, and more. ✌️{" "}
          </p>
        </div>
        <div className="my-20">
          <h3 className="mb-4 font-medium">What I value</h3>
          <div className="grid grid-cols-1 gap-x-20 gap-y-8  md:grid-cols-2">
            <ValueCard
              title="Asynchronous Work"
              description="I believe in the power of focused, uninterrupted work. I prefer to communicate asynchronously to maintain productivity and efficiency."
            />
            <ValueCard
              title="Minimal Meetings"
              description="I value time and efficiency, so I aim to keep meetings to a minimum. When they are necessary, I ensure they are focused and productive."
            />
            <ValueCard
              title="Clear and Honest Communication"
              description="I believe in transparency and open dialogue. I'll always keep you informed about project progress and any challenges that arise."
            />
            <ValueCard
              title="High-Quality Work"
              description="I prioritize on delivering work of the highest quality. I believe that thoughtful, well-executed projects are key to achieving the best results."
            />
            <ValueCard
              title="Fast Delivery"
              description="I understand the importance of timelines and strive to deliver projects promptly without compromising on quality"
            />
            <ValueCard
              title="Sustainability"
              description="I aim to write efficient and maintainable code to ensure the long-term viability of the projects I work on."
            />
          </div>
        </div>
        <SectionContact title="Contact" />
      </div>
    </>
  );
};

export default HireMePage;
