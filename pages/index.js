// @todo: add darkmode, add :), add music tab, moodboard
// update card with product icon
export default function Home() {
  // const postDirectory = path.join(process.cwd(), "pages/blog");
  // const postFilenames = fs
  //   .readdirSync(postDirectory)
  //   .filter((path) => /\.mdx?$/.test(path));
  // const postModules = await Promise.all(
  //   postFilenames.map(async (slug) => import(`./${slug}`))
  // );
  // const postMetadata = postModules.map((m) => m.metadata);
  return (
    <>
      <section className="max-w-screen-sm py-36 mb-14">
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          julien.thibeaut[at]gmail.com
        </p>
        <p>
          Hello! 👋 I’m Julien, a passionate JavaScript developer with a focus
          on front-end development.
        </p>{" "}
        {/* <p>
            I love creating beautiful, interactive user interfaces and designing
            scalable, performant and accessible products.
          </p>{" "} */}
        <p className="mt-4">
          Specialities: JavaScript, React, React Native, Next.js, TypeScript
        </p>
      </section>
      <section className="max-w-screen-sm mb-20" id="work">
        <h3 className="mb-4 font-semibold text-gradient bg-gradient-to-r from-green-400 to-red-500">
          Last work →
        </h3>
        <div className="flex flex-col">
          <a
            href="https://nextjs.org/docs"
            className="shadow-md hover:shadow-lg transition rounded mb-4 p-4 border border-gray-50 dark:border-gray-800 dark:hover:border-gray-400"
          >
            <div className="flex mb-2">
              <h3 className="font-medium">La Fourche</h3>
              <span className="mx-1">-</span>
              <p className="text-gray-900 dark:text-gray-100">
                Online organic store up to 50% cheaper
              </p>
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              I helped them with the exit of shopify by migrating the frontend
              to Next.js. I worked on the front end architecture, design tokens
              and system. I led the work on frontend during the product
              redesign.
            </p>
          </a>
          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="shadow-md hover:shadow-lg transition rounded mb-4 p-4 border border-gray-50 dark:border-gray-800 dark:hover:border-gray-400"
          >
            <div className="flex mb-2">
              <h3 className="font-medium">uxcademy</h3>
              <span className="mx-1">-</span>
              <p className="text-gray-900 dark:text-gray-100">
                Learn UI/UX design with interactive courses
              </p>
            </div>
            <p className="text-gray-800 dark:text-gray-200">
              I developed the platform with Next.js and firebase. I'm working
              with @maximebeneteau on the product and we're trying to grow the
              community. For the moment +1000 users, regular design challenges,
              new courses soon.
            </p>
          </a>
        </div>
      </section>
      <section className="max-w-screen-sm w-full text-left mb-20" id="me">
        <h3 className="mb-4 font-semibold text-gradient bg-gradient-to-r from-yellow-500 to-yellow-800">
          About me →
        </h3>
        <p className="mb-2">
          My name is Julien Thibeaut and I currently live in Paris. I code for a
          living, I'm a freelance front-end developer and I love build
          websites/apps with React, React Native and Next.js.
        </p>
        <p className="mb-2">
          I love creating beautiful, interactive user interfaces and designing
          scalable, performant and accessible products.
        </p>
        <p className="mb-2">
          In addition to the frontend, I like to be part of the design process.
          I love design in the broad sense, for my job I'm interested in user
          interfaces, experiences and design systems.
        </p>
        {/* ethical tech */}
        {/* Willing to work with socially and environmentally responsible organisations 🌎 */}
      </section>
    </>
  );
}
