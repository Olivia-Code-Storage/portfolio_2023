import { Layout } from './components/common'
import { Intro, About, Stacks, Projects } from './components'

const App = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Stacks />
      <Projects />
    </Layout>
  )
}

export default App
