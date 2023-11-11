import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TFeatureCard } from "@/lib/types";
import { headingGradient } from "./Hero";

const FeatureCard = ({ icon, characteristic, description }: TFeatureCard) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center scroll-m-20 text-2xl font-semibold tracking-tight">
          <span className="text-xl">{icon}</span>
          <span className={headingGradient}>{characteristic}</span>
        </CardTitle>
        <CardDescription className="leading-7">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
