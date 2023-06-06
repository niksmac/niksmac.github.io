import 'tailwindcss/tailwind.css'

import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-900 w-screen h-screen">
      <Head>
        <title>@niksmac</title>
        <meta
          name="description"
          content="Co-Founder of Lightrains. I spend time by reading about code, design, startups and open source projects."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        html,
        body {
          font-family: 'Josefin Sans', sans-serif;
        }
      `}</style>

      <main className="container mx-auto text-white">
        <div className="flex flex-row items-center h-screen">
          <div className="md:w-2/3 w-screen px-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-relaxed">
              Entrepreneur, Blockchain enthusiast, <br />
              co-founder of MeshMonk and Lightrains
            </h1>
            <a
              className="mt-12 inline-block hover:text-green-500"
              href="mailto:nik@niksmac.me">
              nik@niksmac.me
            </a>

            <div className="mt-2">
              <a
                className="inline-block mr-2 hover:text-green-500"
                href="https://twitter.com/niksmac_">
                Twitter
              </a>
              <a
                className="inline-block mr-2 hover:text-green-500"
                href="https://github.com/niksmac">
                GitHub
              </a>
              <a
                className="inline-block mr-2 hover:text-green-500"
                href="https://linkedin.com/in/niksmac/">
                LinkedIn
              </a>
              <a
                className="inline-block hover:text-green-500"
                href="https://stackexchange.com/users/438934/niksmac?tab=accounts">
                StackOverflow
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
