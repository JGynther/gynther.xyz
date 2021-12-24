import { useState } from "react";
import { Layout } from "./xa7d9j";
import { Text, Heading } from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(97);
  return (
    <Layout value={value}>
      <Text>
        Jos olet viel hengissä, lähetä Joonalle sähköpostina salainen koodi:
      </Text>
      <Heading>007510x</Heading>
    </Layout>
  );
}
