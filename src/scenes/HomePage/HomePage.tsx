import { lazy } from "react";
import { Section, SectionList, Hero, Container } from "./components";
const Form = lazy(() => import("./components/Form"));


const sections = Array(10)
  .fill(null)
  .map((_, i) => i);

export default () => {
  return (
    <>
      <Hero />
      <Container>
        <SectionList>
          {sections.map((section) => (
            <Section key={section}></Section>
          ))}
        </SectionList>
        <Form />
      </Container>
    </>
  );
};
