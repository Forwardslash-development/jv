import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            I'm a Senior Software something or other at cool company. I enjoy
            working with Next.js and crafting beautiful front-end experiences.
          </h1>
          <p>This app is built with Next.js and a library called next-mdx.</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/Bash.jpg"
          alt="Bash is a good dog"
          width={1503 / 2}
          height={1503 / 2}
        />
      </div>
    </>
  )
}

export default HomePage
