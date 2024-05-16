const networks = [
  "Aleo",
  "Aleph Zero",
  "Bitcoin",
  "Cardano",
  "Cosmos/IBC",
  "EVM",
  "Farcaster",
  "NEAR",
  "Nouns",
  "Polkadot",
  "Ripple",
  "Solana",
  "Stellar",
  "TON",
  "Tezos",
  "Tron",
  "zCash",
];

const networkImages: Record<
  string,
  {
    light: string;
    dark: string;
  }
> = {
  aleo: {
    light: "/images/networks/aleo-light.svg",
    dark: "/images/networks/aleo-dark.svg",
  },
  "aleph zero": {
    light: "/images/networks/aleph-zero-light.svg",
    dark: "/images/networks/aleph-zero-dark.svg",
  },
  bitcoin: {
    light: "/images/networks/bitcoin.svg",
    dark: "/images/networks/bitcoin.svg",
  },
  cardano: {
    light: "/images/networks/cardano.svg",
    dark: "/images/networks/cardano.svg",
  },
  "cosmos/ibc": {
    light: "/images/networks/cosmos.svg",
    dark: "/images/networks/cosmos.svg",
  },
  evm: {
    light: "/images/networks/ethereum.svg",
    dark: "/images/networks/ethereum.svg",
  },
  farcaster: {
    light: "/images/networks/farcaster.svg",
    dark: "/images/networks/farcaster.svg",
  },
  near: {
    light: "/images/networks/near.svg",
    dark: "/images/networks/near.svg",
  },
  nouns: {
    light: "/images/networks/nouns.jpeg",
    dark: "/images/networks/nouns.jpeg",
  },
  polkadot: {
    light: "/images/networks/polkadot.svg",
    dark: "/images/networks/polkadot.svg",
  },
  ripple: {
    light: "/images/networks/ripple.svg",
    dark: "/images/networks/ripple.svg",
  },
  solana: {
    light: "/images/networks/solana.svg",
    dark: "/images/networks/solana.svg",
  },
  stellar: {
    light: "/images/networks/stellar-light.svg",
    dark: "/images/networks/stellar-dark.svg",
  },
  ton: { light: "/images/networks/ton.svg", dark: "/images/networks/ton.svg" },
  tezos: {
    light: "/images/networks/tezos.svg",
    dark: "/images/networks/tezos.svg",
  },
  tron: {
    light: "/images/networks/tron.svg",
    dark: "/images/networks/tron.svg",
  },
  zcash: {
    light: "/images/networks/zcash.svg",
    dark: "/images/networks/zcash.svg",
  },
};

const organizations = [
  "4EVERLAND",
  "88mph",
  "3327",
  "Aave",
  "Aavegotchi",
  "Abracadabra.money",
  "Acala",
  "ACryptoS",
  "Ajna",
  "Akash",
  "Alchemix",
  "Alchemy",
  "Aleo",
  "Aleph Zero",
  "Alien Worlds",
  "Alpaca Finance",
  "AngelBlock",
  "ApeCoin DAO",
  "Arcana",
  "Archway",
  "ARKEN Finance",
  "Arweave",
  "Astar",
  "ATOM Accelerator",
  "Aura Finance",
  "Aurora",
  "Avalanche",
  "Axelar",
  "Axie Infinity",
  "Aztec",
  "Balancer",
  "Base",
  "Beefy Finance",
  "Beethoven X",
  "BNB Chain",
  "Boba Network",
  "Bountycaster",
  "Callisto Network",
  "Casper",
  "Celo",
  "Chainlink",
  "Circle",
  "Climate Collective",
  "clr.fund",
  "CoinEx Smart Chain",
  "Combo",
  "Compound",
  "Conflux",
  "Consensys",
  "Covalent",
  "CoW Protocol",
  "Creatives DAO (NEAR)",
  "Cronos ",
  "Crust Network",
  "Cult DAO",
  "Curve",
  "Cypherpunk Guild (NEAR)",
  "Darwinia Grants",
  "Dash",
  "Decentraland",
  "Dfinity (ICP)",
  "DIMO",
  "Dora Factory",
  "dYdX",
  "ENS",
  "EOS",
  "Ergo",
  "Flare",
  "Frax Finance",
  "Fuel",
  "Fuse",
  "Game7",
  "Gearbox",
  "Gitcoin",
  "Giveth",
  "GMX",
  "Gnosis DAO",
  "Grant for the Web(Interledger)",
  "Grantshares",
  "Graph",
  "Hashgraph",
  "Hedera",
  "Helium",
  "HOP Protocol",
  "Human Guild (NEAR)",
  "Hxro",
  "HydraDX",
  "Icon",
  "Idle DAO",
  "Immutable X",
  "Interlay",
  "IoTeX",
  "Kadena",
  "Kava",
  "KORIS",
  "KuCoin Community Chain",
  "Kyber Network",
  "Lens Protocol",
  "Lido (LEGO)",
  "Liquity",
  "Lisk",
  "Lit Protocol",
  "Livepeer",
  "Loopring",
  "Lyra",
  "MakerDAO",
  "Mantle",
  "MAP Protocol",
  "Metamask Grants DAO",
  "Meter",
  "Metis",
  "Milkomedia",
  "MilkRoad",
  "Mint Fund",
  "MintBase (NEAR)",
  "MolochDAO",
  "Moonbeam",
  "Moonwell",
  "NEO",
  "Nervos Network",
  "Neutron",
  "Notional",
  "Nouns DAO",
  "OAK Network",
  "Oasis Network",
  "OAX",
  "Obyte",
  "OKC",
  "Ontology",
  "OpenLeverage",
  "Osmosis",
  "Paladin",
  "PBS Foundation Grants",
  "peaq",
  "Perpetual Protocol",
  "PIVX",
  "Pollen",
  "Polymesh",
  "PoolTogether",
  "PowerPool",
  "Prisma Finance",
  "Project Catalyst",
  "Provenance",
  "Proximity Labs (NEAR)",
  "Push Protocol",
  "Questbook",
  "QuickSwap",
  "Radicle",
  "Radix",
  "Rarible",
  "Redbelly",
  "REI Network",
  "Request Network",
  "Reserve",
  "Ripple",
  "RocketPool",
  "Rootstock",
  "Safe",
  "Secret Network",
  "Sei",
  "Sevens Foundation",
  "SKALE",
  "Social Alpha Foundation",
  "SpaceID",
  "Spiral",
  "Starknet",
  "Streamr Network",
  "Strike Finance",
  "Superfluid",
  "SuperRare",
  "Superteam",
  "Swarm Foundation",
  "Synthetix",
  "Syscoin",
  "Taiko",
  "Tea Protocol",
  "Thundercore",
  "TON",
  "Toucan",
  "Tron",
  "Tulip",
  "UMA",
  "Uniswap Foundation",
  "Unlock Protocol",
  "Unstoppable Domains",
  "Vechain",
  "Venus",
  "Web3 Foundation",
  "Wormhole xGrants",
  "XPR Network",
  "XRPL Grants",
  "zCash",
  "ZetaChain",
  "Zilliqa",
  "zkDAO",
];

const ecosystems = [
  "Aave",
  "Akash",
  "Alchemy",
  "Algorand",
  "Aptos",
  "Aragon",
  "Arbitrum",
  "Arcana",
  "Astar",
  "Aurora",
  "Avalanche",
  "Base",
  "Berachain",
  "Binance Smart Chain",
  "Bitcoin",
  "Boba Network",
  "Callisto Network",
  "Canto",
  "Cardano",
  "Casper",
  "Celo",
  "Chainlink",
  "CoinEx Smart Chain",
  "Compound",
  "Conflux",
  "Coreum",
  "Cosmos",
  "Cronos",
  "Dash",
  "Decentraland",
  "Decred",
  "Dfinity",
  "Edgeware",
  "EOSIO",
  "Ethereum",
  "Fantom",
  "Farcaster",
  "Findora",
  "Flare",
  "Flow",
  "Fuel",
  "Gnosis Chain",
  "Harmony",
  "Hedera",
  "Helium",
  "Horizen",
  "Interlay",
  "IoTeX",
  "Kava",
  "Klaytn",
  "KuCoin",
  "Lisk",
  "Lit Protocol",
  "Metis",
  "Mina",
  "Moonbeam",
  "Moonriver",
  "Near",
  "NEO",
  "Neon",
  "Nervos Network",
  "OAK Network",
  "Oasis Network",
  "Obyte",
  "OKC",
  "Optimism",
  "PIVX",
  "Polkadot",
  "Polygon",
  "Radix",
  "Ravencoin",
  "REI Network",
  "Ripple",
  "Ronin",
  "Solana",
  "Sovryn",
  "Stacks",
  "StarCoin",
  "Stellar",
  "Sui",
  "Syscoin",
  "Telos",
  "Tezos",
  "Thundercore",
  "TON",
  "Tron",
  "Uniswap",
  "Vechain",
  "Velas",
  "Waves",
  "XPR Network",
  "zCash",
  "ZetaChain",
  "Zilliqa",
];
const categories = [
  "DEX",
  "DeFi",
  "GameFi",
  "NFT",
  "Lend/Borrow",
  "Communities",
  "Research",
  "Yield Farming",
  "Infrastructure",
];
const grantTypes = ["Retroactive", "Proactive", "Bounty"];

const grantSizes = [0, 250000];

export const registryHelper = {
  networks,
  organizations,
  ecosystems,
  categories,
  grantTypes,
  grantSizes,
  networkImages,
};
