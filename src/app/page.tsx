import Header from "@/components/Header"
import Main from "@/components/Main"

const Home = () => {
  return (
    <>
      <Header>
        <h1 className="text-4xl">
          &quot;...endowed by their <strong className="text-amber-400">Creator</strong>
          <br />
          with certain unalianable Rights...&quot;
        </h1>
      </Header>
      <Main>
        <section className="flex items-center justify-center py-16">
          <video width="720" height="480" controls>
            <source src="https://thomasjeffersonrecites.s3.amazonaws.com/video.mp4" type="video/mp4" />
          </video>
        </section>
      </Main>
    </>
  )
}

export default Home