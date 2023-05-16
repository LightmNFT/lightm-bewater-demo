import { clsx, type ClassValue } from "clsx";
import { Interface } from "ethers/lib/utils.js";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isIpfs(link: string) {
  return link.startsWith("ipfs://");
}

export function getCIDFromIpfsLink(link: string) {
  return link.replace("ipfs://", "");
}

/**
 * @desc refer https://docs.ipfs.tech/concepts/ipfs-gateway/#subdomain
 */
export function getLinkWithGateway(
  cidAndPath: string,
  gateway = "ipfs.io",
  isSubdomain = false
) {
  const firstSeperatorIdx = cidAndPath.indexOf("/");
  const cid = cidAndPath.slice(0, firstSeperatorIdx);
  const path =
    firstSeperatorIdx > -1 ? cidAndPath.slice(firstSeperatorIdx) : "";

  return isSubdomain
    ? `https://${cid}.ipfs.${gateway}${path}`
    : `https://${gateway}/ipfs/${cidAndPath}`;
}

export function convertIpfs(ipfsLike: string, gateway?: string) {
  return isIpfs(ipfsLike)
    ? getLinkWithGateway(getCIDFromIpfsLink(ipfsLike), gateway)
    : ipfsLike;
}

export function getEllipsis(str: string, count = 4) {
  return str.length > 2 * count + 3
    ? `${str.slice(0, count)}...${str.slice(-count)}`
    : str;
}

interface WalletError {
  reason?: string;
  code: number;
  data: {
    code: number;
    message: string;
    data: string;
  };
  message: string;
  stack: string;
}

export function parseInterfaceError(
  contractInterface: Interface | undefined,
  error: WalletError
) {
  if ("reason" in error) {
    return error.reason as string;
  } else {
    if (contractInterface) {
      try {
        const errorResult = contractInterface.parseError(error.data.data);

        return ["Lightm: ", errorResult.signature, errorResult.args] as const;
      } catch (e) {
        return "Lightm: Unrecognized error";
      }
    } else {
      return "Lightm: Unrecognized error";
    }
  }
}
