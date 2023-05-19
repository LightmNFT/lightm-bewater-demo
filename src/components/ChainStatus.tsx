import useChainCorrect from "@/hooks/useChainCorrect";
import { Button } from "./ui/button";
import { useNetwork } from "wagmi";

export default function ChainStatus({ className }: { className?: string }) {
  const { chains } = useNetwork();
  const { chainStatus, chainCorrect } = useChainCorrect();

  return (
    <div
      className={`${className ? `${className} ` : ""}${
        chainStatus === null ? "mix-blend-difference text-white" : ""
      } flex items-center gap-2`}
    >
      {chainStatus === null ? (
        "未连接"
      ) : chainStatus ? (
        <div className="p-1 rounded-lg bg-green-400" />
      ) : (
        <>
          <div className="p-1 rounded-lg bg-red-500" />
          <Button variant="destructive" onClick={chainCorrect}>
            切换到{chains[0].name}
          </Button>
        </>
      )}
    </div>
  );
}
