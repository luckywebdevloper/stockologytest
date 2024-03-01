import React, { useState } from "react";
import {
  Container,
  Wrap,
  Stack,
  Text,
  Box,
  Button,
  Radio,
  RadioGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import StockDetailItem from "./StockDetailItem";
import DatePicker from "react-datepicker";
import StrategyCard from "./StrategyCard";
import LotQty from "./LotQty";
import SelectOptions from "./SelectOptions";
import _ from "lodash";
import OptionChainTable from "./OptionChainTable";

const colors = [
  "#76c7db",
  "#ffe0b2",
  "#dcedc8",
  "#f0f4c3",
  "#cb9adf",
  "#cfd8dc",
  "#f06292",
];

const stockOptions = [
  "Nifty",
  "Nasdaq",
  "Nifty1",
  "Nifty2",
  "Nifty3",
  "Nifty4",
  "Nifty5",
];

const strategyInfo = [
  { name: "bullish", id: "bullish" },
  { name: "bearish", id: "bearish" },
  { name: "non-directional", id: "non_directional" },
];

const strategies = {
  [strategyInfo[0].id]: [
    "Long Call",
    "Short Put",
    "Bull Call Spread",
    "Bull Put Spread",
    "Call Ratio Back Spread",
    "Long Synthetic Future",
    "Range Forward",
    "Bullish Butterfly",
    "Bullish Condor",
  ],
  [strategyInfo[1].id]: [
    "Bull Call Spread",
    "Bull Put Spread",
    "Call Ratio Back Spread",
    "Long Synthetic Future",
    "Range Forward",
    "Bullish Butterfly",
  ],
  [strategyInfo[2].id]: [
    "Bull Call Spread",
    "Bull Put Spread",
    "Call Ratio Back Spread",
    "Long Synthetic Future",
    "Range Forward",
  ],
};

const positionDetails = [
  ["Prob. of Profit", "34.07%"],
  ["Max. Profit ₹ +25,935", "(14.12%)"],
  ["Max. Loss", "₹ Undefined"],
  ["Max. RR Ratio", "NA"],
  ["Breakevens", "10953.0"],
  ["Total PNL", "₹ -414.92 (-0.23%)"],
  ["Net Credit", "₹ 0"],
  ["Estimated Margin/Premium", "₹ +183,689"],
];

const StrategyBuilder = () => {
  const [chosenStock, setChosenStock] = useState("Nifty");
  const [date, setDate] = useState(new Date());
  const [strategiesMode, setStrategiesMode] = useState(strategyInfo[0].id);
  const [transactionType, setTransactionType] = useState("buy");
  const [segment, setSegment] = useState("futures");
  const [positions, setPositions] = useState([]);
  const [lotQty, setLotQty] = useState(1);

  const [tickers, setTickers] = useState([]);

  const addPosition = (transactionType, segment, price, lotQty) => {
    const position = { transactionType, segment, price, lotQty };
    setPositions((prev) => [...prev, position]);
  };

  const changeTransactionType = (event) => {
    console.log("event:>> ", event);
    setTransactionType(event);
  };

  return (
    <Container minWidth={"80vw"} color={"black"}>
      {/* <StrategyModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
      <Stack gap={10}>
        <Stack w={"full"} gap={8} alignItems={"flex-start"} py={8}>
          <SelectOptions
            options={tickers}
            bottomText={"Select Index/Stock"}
            handleSelectChange={setChosenStock}
          />
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <Wrap width={""} display={"flex"} alignItems={"center"}>
              {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <StockDetailItem
                  key={item}
                  item={"item"}
                  value={item}
                  color={colors[index % 7]}
                />
              ))}
            </Wrap>
            <Stack direction={"column"}>
              <Text fontSize={"md"} fontWeight={"500"} color="#0000008a">
                Date
              </Text>
              <Box
                fontWeight={"bold"}
                fontSize={"20px"}
                borderBottom={"1px solid #c4c9d0"}
                pb={-25}
              >
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                />
              </Box>
              <Text fontSize={"md"} fontWeight={"500"} color="#0000008a">
                Select Pay-off Date
              </Text>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <Stack gap={1}>
              <Button
                colorScheme="green"
                variant={
                  strategiesMode === strategyInfo[0].id ? "solid" : "outline"
                }
                textTransform={"uppercase"}
                onClick={() => {
                  setStrategiesMode(strategyInfo[0].id);
                }}
              >
                {strategyInfo[0].name}
              </Button>
              <Button
                colorScheme="orange"
                variant={
                  strategiesMode === strategyInfo[1].id ? "solid" : "outline"
                }
                textTransform={"uppercase"}
                onClick={() => {
                  setStrategiesMode(strategyInfo[1].id);
                }}
              >
                {strategyInfo[1].name}
              </Button>
              <Button
                variant={
                  strategiesMode === strategyInfo[2].id ? "solid" : "outline"
                }
                colorScheme="blackAlpha"
                textTransform={"uppercase"}
                onClick={() => {
                  setStrategiesMode(strategyInfo[2].id);
                }}
              >
                {strategyInfo[2].name}
              </Button>
            </Stack>
            <Wrap alignItems={"center"} display={"flex"}>
              {strategies[strategiesMode].map((item, index) => (
                <StrategyCard key={index} title={item} />
              ))}
            </Wrap>
          </Stack>
          <Stack direction={"row"} alignItems={"end"}>
            <Wrap display={"flex"} spacing={12}>
              <SelectOptions
                handleSelectChange={setSegment}
                options={["futures", "options"]}
                bottomText={"Select Segment"}
              />
              <SelectOptions
                options={["29FEB2024", "31MAR2024", "30AD2024", " 28APR2024"]}
                bottomText={"Select Expiry"}
              />
              {segment === "options" && (
                <>
                  <SelectOptions
                    options={["100850", "100850", "100850", " 100850"]}
                    bottomText={"Select Option Strike"}
                    handleSelectChange={setSegment}
                  />
                  <SelectOptions
                    options={["CE", "PE"]}
                    bottomText={"Select Option Type"}
                    handleSelectChange={setSegment}
                  />
                </>
              )}
            </Wrap>
          </Stack>
          <Stack
            width={"100%"}
            direction={"row"}
            gap={8}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <RadioGroup defaultValue="buy" onChange={changeTransactionType}>
              <Stack direction={"row"} spacing={8}>
                <Radio colorScheme="green" size={"lg"} value="buy">
                  Buy
                </Radio>
                <Radio colorScheme="red" size={"lg"} value="sell">
                  Sell
                </Radio>
              </Stack>
            </RadioGroup>

            <LotQty lotQty={lotQty} setLotQty={setLotQty} maxQty={5} />

            <StockDetailItem
              onClick={() => {
                console.log("open input");
              }}
              item={"Future prices"}
              value={"35334.44"}
              color={"#d8d8d8"}
            />

            <Button
              textTransform={"uppercase"}
              colorScheme="teal"
              onClick={() => {
                addPosition(transactionType, segment, 2345, lotQty);
              }}
            >
              Add position
            </Button>
          </Stack>
        </Stack>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Text
                fontSize={"2xl"}
                as="span"
                flex="1"
                textAlign="center"
                fontWeight={"bold"}
              >
                Option Chain
              </Text>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <OptionChainTable />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {positions?.length > 0 && (
          <Stack
            direction={"column"}
            py={4}
            className="rounded-xl border border-slate-300"
          >
            <Text fontSize={"2xl"} textAlign={"center"}>
              Payoff Chart
            </Text>
            <Stack p={4} direction={"row"}>
              <Stack
                p={4}
                border={"1px solid red"}
                direction={"column"}
                gap={5}
                width={"35%"}
              >
                <Text fontSize={"xl"}>Strategy Positions</Text>
                <Stack direction={"column"} alignItems={"flex-start"}>
                  {positions?.map((position, idx) => (
                    <Stack key={idx} direction={"row"} alignItems={"center"}>
                      <Text
                        className={`border rounded text-bold ${
                          position.transactionType === "buy"
                            ? `bg-green-300 border-green-400`
                            : `bg-red-400 border-red-500`
                        } py-1 px-3`}
                      >
                        {position.transactionType.slice(0, 1).toUpperCase()}
                      </Text>
                      <Text>{_.capitalize(position.segment)}</Text>
                      <Text>₹ {position.price}</Text>
                      <Text>Qty:{position.lotQty}</Text>
                    </Stack>
                  ))}
                </Stack>
                <Stack direction={"column"} border={"1px solid red"}>
                  {positionDetails.map(([key, value]) => (
                    <Stack key={key} direction={"row"}>
                      <Text fontWeight={"bold"}>{key} :</Text>{" "}
                      <Text>{value}</Text>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Stack border={"1px solid red"} width={"65%"} p={4}>
                <Text textAlign={"center"} fontSize={"xl"}>
                  {chosenStock}
                </Text>
                <Stack height={"75%"} border={"1px solid red"}>
                  <Text>Chart</Text>
                </Stack>
                <Stack height={"25%"} border={"1px solid red"}>
                  <Text>Silders</Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default StrategyBuilder;
