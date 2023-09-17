import Image from "next/image";
import Link from "next/link";
import pic from "../public/pic.jpg";

function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 overflow-hidden">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={pic}
            layout=""
            width={600}
            height={400}
            className="rounded"
          />
          <div>
            <h1 className="text-5xl font-bold">The Night Is Short</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href="/signup" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
