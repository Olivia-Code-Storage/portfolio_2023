import { Layout } from './components/common'
import { Intro, About, Stacks, Projects, Contact } from './components'

const App = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Stacks />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
