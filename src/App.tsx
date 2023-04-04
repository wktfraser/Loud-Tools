import * as React from "react"
import {ChakraProvider, Container, Flex, Spacer, theme} from "@chakra-ui/react"
import Header from "./components/Header";
import HECSTool from "./components/HECSTool";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
        >
            <Header/>
            <Container
                w={"lg"}
            >
                <HECSTool />
            </Container>
        </Flex>
    </ChakraProvider>
)
