import useSWR from "swr";
import { convertIpfs } from "../lib/utils";

type ExtendedError = Error & { info?: string; status?: number };

/**
 * The metadata interface follow RMRK-Spec
 * https://github.com/rmrk-team/rmrk-spec/blob/master/standards/abstract/entities/metadata.md
 */
export interface IMetadata {
  name: string;
  description?: string;
  type?: string;
  locale?: string;
  license?: string;
  licenseUri?: string;
  mediaUri?: string;
  thumbnailUri?: string;
  externalUri?: string;
  properties?: {
    [k: string]: {
      type: string;
      value: any;
    };
  };
  image?: string; // Deprecated
  external_url?: string; // Deprecated
}

const fetcher = async (url: URL) => {
  const res = await fetch(url);

  if (!res.ok) {
    let errorStr = "An error occurred while fetching the data.";

    if (res.status === 404 || res.status === 400) {
      errorStr = "Invalid URL, please check";
    }

    const error: ExtendedError = new Error(errorStr);

    error.status = res.status;

    throw error;
  }

  return res.json();
};

export default function useGetMetdataHook<E extends IMetadata = IMetadata>(
  ipfsLikeLink: string
) {
  const { data, error } = useSWR<Partial<E>>(
    convertIpfs(ipfsLikeLink),
    fetcher,
    {
      onErrorRetry: (error, _key, _config, _revalidate, { retryCount }) => {
        if (error.status === 404 || error.status === 400) return;
        if (retryCount >= 3) return;
      },
    }
  );

  return {
    metadata: data,
    isLoading: ipfsLikeLink !== "" && !error && !data,
    error,
  };
}
