import slack from "../../public/slackIcon.svg";
import Image from "next/image";
import Link from "next/link";
import slackWorld from "../../public/slackWorld.webp";

export default function SignIn() {
  return (
    <section className="bg-slack min-h-screen flex justify-between items-center text-white font-Inter">
      <div className="flex flex-col justify-center gap-28 pt-16 pl-32">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <Image src={slack} alt="slack" width={50} height={50} />
              <h1 className="text-5xl font-semibold">slack</h1>
            </div>{" "}
            <p className="text-6xl font-semibold">
              Slack brigns the
              <br />
              team together
              <br />
              wherever you are
            </p>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <button className="bg-green-800 text-xl w-3/5 h-12 rounded-lg">
              Sign In to Slack
            </button>
            <p className="text-stone-300 f text-md">
              Well take you to your web browser to sign and then <br />
              bring you back here.
            </p>
          </div>
        </div>
        <p className="text-gray-300">
          Is your team new to Slack?{" "}
          <Link href={"http://google.com"} className="underline">
            Create a new workplace
          </Link>
        </p>
      </div>
      <div className="">
        <Image src={slackWorld} alt="slack world" width={700} height={700} />
      </div>
    </section>
  );
}
