import P from './P'

export default function App() {
  const texts2 = ['hello', 'world'].map((text, index) => (
    <P key={index} children={text} />
  ))
  return <div children={texts2} />
}
