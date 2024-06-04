import { Tryout } from "@/models/tryout";
import { FC } from "react";

interface TryoutDetailProps {
  tryout: Tryout;
}

const TryOutDetail: FC<TryoutDetailProps> = ({ tryout }) => {
  return (
    <div className="w-full min-h-screen px-8 flex flex-col gap-8">
      <section>
        <div>{tryout.title}</div>
      </section>
    </div>
  );
};

export default TryOutDetail;
