import JSBI from 'jsbi'
import { encodeShortString } from 'starknet/utils/shortString'
import { StarknetChainId } from 'starknet/constants'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export { StarknetChainId as ChainId } from 'starknet/constants'

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9970)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const PAIR_CONTRACT_CLASS_HASH = '0x07b2dcbbf952e8668b4ab2afe40b99e6a023d5355f332f27644a0cac6537af48'

export const FACTORY_ADDRESSES: {
  [chainId in StarknetChainId]: string
} = {
  [StarknetChainId.MAINNET]: '0x01c0a36e26a8f822e0d81f20a5a562b16a8f8a3dfd99801367dd2aea8f1a87a2',
  [StarknetChainId.TESTNET]: '0x0017b7cdbd6dd86b4b9baf572e040e74bd44b419dcbb6f38a2e936aec9327b8e'
}

export const CONTRACT_ADDRESS_PREFIX = encodeShortString('STARKNET_CONTRACT_ADDRESS')
