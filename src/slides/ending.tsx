import { officialLink } from "@/lib/consts";
import { detailLink } from "@/lib/consts";

export default function Ending() {
  return (
    <section
      data-background-color="rgb(0, 0, 0)"
      className="!flex flex-col h-full items-center justify-center"
    >
      <h1>结束</h1>
      <h2>
        在
        <a href={detailLink} target="_blank">
          这里
        </a>
        查看对可组合 NFT 的详述文章
      </h2>
      <h2>
        在这里
        <a href={officialLink} target="_blank">
          了解
        </a>{" "}
        Lightm
      </h2>
    </section>
  );
}
