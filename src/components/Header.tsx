import {Box, Button, Flex, Image, Spacer} from "@chakra-ui/react";
import {TimeIcon} from "@chakra-ui/icons";
import * as React from "react";

const Header = () =>
    <Flex
        bg={'teal.50'}
        position={'sticky'}
        h={'5.5rem'}
        borderBottomWidth={'0.5rem'}
        borderBottomColor={'teal.300'}
        alignItems={'center'}
    >
        <Box h={'full'} ml={20}>
            <Image src={'/Logo_Teal.png'} alt={'Loud Loans Logo'} p={'0.5rem'} boxSize={'full'} objectFit={'contain'}/>
        </Box>
        <Spacer/>
        <Button
            bg={'teal.300'} color={'white'}
            h={'55px'} w={'185px'}
            borderRadius={'50px'}
            mr={20}
            alignItems={'center'}
            rightIcon={<TimeIcon/>}
            iconSpacing={3}
            onClick={() => window.location.href = 'https://calendly.com/loud_loans/meeting'}
        >
            Book Meeting
        </Button>
    </Flex>

export default Header