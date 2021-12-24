import { useState } from "react";
import { Layout } from "./xa7d9j";
import { Field } from "./689fahdlh";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Page() {
  const [value, setValue] = useState(47);
  return (
    <>
      <Layout value={value}>
        <Box mb={10}>
          <Heading>Tehtävä 24.</Heading>
          <Text>
            Ratkaise oheinen, helpohko lasku. Vinkki: D(x^n) = nx^(n-1)
          </Text>
        </Box>
        <Field
          label="Derivoi x"
          answer="1"
          href="/salainen/bfuiasfa"
          type="number"
          placeholder="Vastaus tähän . . ."
        />
      </Layout>
    </>
  );
}
