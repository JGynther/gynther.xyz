import { useState } from "react";
import { Layout } from "./xa7d9j";
import { Field } from "./689fahdlh";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(7.5);
  return (
    <>
      <Layout value={value}>
        <Box mb={10}>
          <Heading>Tehtävä 4.</Heading>
          <Text>
            Ratkaise oheinen, vähemmän yksinkertainen lasku. Vinkki: potenssi
            x^n tai xⁿ
          </Text>
        </Box>
        <Field
          label="(a + b)² = ?"
          answer={[
            "a²+2ab+b²",
            "a^2+2ab+b^2",
            "a² + 2ab + b²",
            "a^2 + 2ab + b^2",
          ]}
          href="/salainen/h9ga70gs"
          type="text"
          placeholder="Vastaus tähän . . ."
        />
      </Layout>
    </>
  );
}
