import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <>
      <section data-auto-animate className="h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="flex gap-2 justify-center items-center">
            <img src="/Lightm_logo.svg" width={256} height={256} />
          </div>
          <div className="animate-bounce flex items-center flex-wrap gap-2">
            使用键盘的
            <ArrowLeft width={32} height={32} />
            <ArrowRight width={32} height={32} />
            导航，触摸屏可左右划动切换
          </div>
        </div>
      </section>
      <section data-auto-animate className="h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="flex gap-2 flex-wrap justify-center items-center">
            <img src="/Lightm_logo.svg" width={256} height={256} />
            <div
              data-id="project-name"
              className="scroll-m-20 font-extrabold tracking-tight text-8xl"
            >
              Lightm
            </div>
          </div>
        </div>
      </section>
      <section data-auto-animate className="h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="flex gap-2 flex-wrap justify-center items-center">
            <img src="/Lightm_logo.svg" width={256} height={256} />
            <div
              data-id="project-name"
              className="scroll-m-20 font-extrabold tracking-tight text-8xl"
            >
              Lightm
            </div>
          </div>
          <p className="scroll-m-20 text-4xl font-semibold tracking-tight">
            构建下一代 NFT 平台
          </p>
        </div>
      </section>

      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        data-background-color="rgb(0, 0, 0)"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>为什么我们需要下一代NFT？</h1>
        <h1 className="fragment">“当下的NFT无法肩负Mass Adoption的职责”</h1>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        data-background-color="rgb(0, 0, 0)"
        className="!flex h-full items-center justify-center"
      >
        <div data-id="erc721" className="w-full">
          <h1>ERC721的问题</h1>
          <div>
            <h2>静态的</h2>
            <p>用户无法和NFT进行任何互动</p>
          </div>
        </div>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        data-background-color="rgb(0, 0, 0)"
        className="!flex h-full items-center justify-center"
      >
        <div data-id="erc721" className="w-full">
          <h1>ERC721的问题</h1>
          <div>
            <h2>离散的</h2>
            <p>在应用场景中有联系的NFT，在链上是彻底分离的</p>
          </div>
        </div>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        data-background-color="rgb(0, 0, 0)"
        className="!flex h-full items-center justify-center"
      >
        <div data-id="erc721" className="w-full">
          <h1>ERC721的问题</h1>
          <div>
            <h2>单调的</h2>
            <p>开图后，用户后续无法进行个性化的定制</p>
          </div>
        </div>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        data-background-color="rgb(0, 0, 0)"
        className="!flex h-full items-center justify-center"
      >
        <div data-id="erc721" className="w-full">
          <h1>ERC721的问题</h1>
          <h2>静态的</h2>
          <h2>离散的</h2>
          <h2>单调的</h2>
        </div>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        className="!flex h-full items-center justify-center"
      >
        <div data-id="erc721" className="w-[50%] blur-[3px]">
          <h1>ERC721</h1>
          <h2 className="!text-gray-300">静态的</h2>
          <h2 className="!text-gray-300">离散的</h2>
          <h2 className="!text-gray-300">单调的</h2>
        </div>
        <div data-id="next-gen" className="w-[50%]">
          <h1>下一代 NFT</h1>
          <h2 className="fragment">可交互的</h2>
          <h2 className="fragment">可组合的</h2>
          <h2 className="fragment">个性化的</h2>
        </div>
      </section>
    </>
  );
}
