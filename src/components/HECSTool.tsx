import {Flex, Heading, NumberInput, NumberInputField, Text, useControllableState} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";

interface Threshold {
    lowerBound: number,
    rate: number
}

const Rates: Threshold[] = [
    { lowerBound: 0, rate: 0},
    { lowerBound: 48361, rate: 0.01},
    { lowerBound: 55837, rate: 0.02},
    { lowerBound: 59187, rate: 0.025},
    { lowerBound: 62739, rate: 0.03},
    { lowerBound: 66503, rate: 0.035},
    { lowerBound: 70493, rate: 0.04},
    { lowerBound: 74723, rate: 0.045},
    { lowerBound: 79207, rate: 0.05},
    { lowerBound: 83959, rate: 0.055},
    { lowerBound: 88997, rate: 0.06},
    { lowerBound: 94337, rate: 0.065},
    { lowerBound: 99997, rate: 0.07},
    { lowerBound: 105997, rate: 0.075},
    { lowerBound: 112356, rate: 0.08},
    { lowerBound: 119098, rate: 0.085},
    { lowerBound: 126244, rate: 0.09},
    { lowerBound: 133819, rate: 0.095},
    { lowerBound: 141848, rate: 0.1}
]
const HECSTool = () => {
    const [annualIncome, setAnnualIncome] = useState<number>(0)
    const [monthlyRepayment, setMonthlyRepayment] = useState<number>(0)
    const [annualRepayment, setAnnualRepayment] = useState<number>(0)

    useEffect(() => {
        if (annualIncome && !isNaN(annualIncome)) {
            const threshold = [...Rates].reverse().find(threshold => annualIncome > threshold.lowerBound) as Threshold
            setAnnualRepayment(annualIncome * threshold.rate)
            setMonthlyRepayment(annualIncome * threshold.rate / 12)
        } else {
            setAnnualRepayment(0)
            setMonthlyRepayment(0)
        }
    }, [annualIncome])

    return <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
    >
        <Heading>HECS Impact Calculator</Heading>
        <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={10}
        >
            <Text><b>What is your annual income?</b></Text>
            <NumberInput
                min={0} mt={4}
                value={annualIncome ? annualIncome : ''}
                onChange={(valueAsString, valueAsNumber) => setAnnualIncome(valueAsNumber)}
            >
                <NumberInputField textAlign={"center"}/>
            </NumberInput>
            <Text mt={4}>You repay ${monthlyRepayment.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} per month</Text>
            <Text mt={4}>for a total of ${annualRepayment.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} this financial year.</Text>

            <Text mt={4}><b>What rate do you expect to be borrowing at?</b></Text>
            <NumberInput
                min={0} mt={4}
                value={annualIncome ? annualIncome : ''}
                onChange={(valueAsString, valueAsNumber) => setAnnualIncome(valueAsNumber)}
            >
                <NumberInputField textAlign={"center"}/>
            </NumberInput>
        </Flex>
    </Flex>
}

export default HECSTool