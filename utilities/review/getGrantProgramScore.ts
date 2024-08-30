import { readContract } from "viem/actions";
import { createPublicClient, http } from "viem";
import { arbitrum } from "viem/chains";
import { RESOLVER_TRUSTFUL, SCORER_DECIMALS } from "./constants/constants";
import { RESOLVER_TRUSTFUL_ABI } from "./constants/abi";

const publicClient = createPublicClient({
  chain: arbitrum,
  transport: http(),
});

/// See {TrustfulResolver-getGrantProgramScore} in the contract.
/// Gets the average score of a grant program.
///
/// Requirement:
/// - The grant program must exist
/// - The grant program must have at least one review.
///
/// NOTE: The result will be multiplied by the decimals in the Scorer.
/// Solidity can't handle floating points, so you can get the decimals by
/// calling {ITrustfulScorer.getScorerDecimals} and dividing the result.
export async function getGrantProgramScore(grantUID: number): Promise<number> {
  try {
    const grantProgramScore = await readContract(publicClient, {
      address: RESOLVER_TRUSTFUL,
      functionName: "getGrantProgramScore",
      abi: RESOLVER_TRUSTFUL_ABI,
      args: [grantUID],
    });

    try {
      const grantStoryAsANumber = Number(grantProgramScore);

      if (Number.isNaN(grantStoryAsANumber)) {
        throw new Error("The result can't be NaN: getGrantProgramScore");
      }
    } catch (error) {
      throw new Error("Error when converting the result to a number: getGrantProgramScore");
    }

    // format big number to floated point number
    const floatedNumber = (Number(grantProgramScore) / 10 ** SCORER_DECIMALS).toFixed(1);

    return Number(floatedNumber);
  } catch (error) {
    throw new Error("Error when reading the contract");
  }
}
