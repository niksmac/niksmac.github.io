import 'tailwindcss/tailwind.css'

import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-900 w-screen h-screen">
      <Head>
        <title>@niksmac</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        html,
        body {
          font-family: 'Noto Sans JP', sans-serif;
        }
      `}</style>

      <main className="container mx-auto text-white">
        <div className="flex flex-row items-center h-screen">
          <div className="md:w-2/3 w-screen px-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-relaxed">
              Entrepreneur, Blockchain enthusiast, <br />
              co-founder of Lightrains
            </h1>
            <a
              className="mt-8 block hover:text-green-500"
              href="mailto:niksmac@pm.me">
              niksmac@pm.me
            </a>

            <div className="mt-2">
              <a
                className="inline-block mr-2 hover:text-green-500"
                href="https://twitter.com/niksmac_">
                twitter
              </a>
              <a
                className="inline-block mr-2 hover:text-green-500"
                href="https://github.com/niksmac">
                github
              </a>
              <a
                className="inline-block hover:text-green-500"
                href="https://linkedin.com/in/niksmac/">
                linkedin
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
