import { CutCornerButton } from "../components/CutCornerButton";

export const HeroSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Into the unknown
        </p>
        <h1 className="font-heading font-black text-5xl text-center mt-4">
          The Future of Blockchain is Here
        </h1>
        <p className="text-center text-xl mt-4 text-zinc-400">
          BlockForge is pioneering smart contract integrity with cutting-edge
          data solution.
        </p>
        <CutCornerButton>Get Started</CutCornerButton>
        <img src="/assets/images/icosahedron.png" alt="hero" />
      </div>
    </section>
  );
};
