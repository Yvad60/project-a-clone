import Image from "next/image";
import { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import PulsedLink from "../ui/PulsedLink";
import CenterContent from "../wrappers/CenterContent";
import Johannes from "/public/images/Group_5.png";
import david from "/public/images/Group_8.jpeg";

register();

export default function SuccessStories() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (initialRenderComplete) {
    return (
      <section className="mt-[180px] bg-black text-white">
        <CenterContent>
          <p className="mb-8">Johannes Schildt | CEO, KRY</p>
          <div className="flex gap-[30px]">
            <div className="max-w-[476px] space-y-8">
              <p className="text-[32px] leading-[44px] tracking-[-0.86px]">
                &quot;Having the expertise of Project A helped us take the next
                step from startup to scale up.&quot;
              </p>
              <p className="leading-6">
                Kry has taken telemedicine to the next level enabling people
                across Europe to see a doctor without actually having to go to
                one. We first invested in Kry’s seed round. Since then Kry has
                become a European unicorn in the digital healthcare market.
              </p>
              <PulsedLink>Read the case study</PulsedLink>
            </div>
            <swiper-container pagination="true">
              <swiper-slide>
                <Image
                  src={david}
                  className="h-[340px] object-cover flex-shrink-0"
                  alt=""
                />
              </swiper-slide>
              <swiper-slide>
                <Image src={Johannes} alt="" />
              </swiper-slide>
              <swiper-slide>
                <Image src={david} alt="" />
              </swiper-slide>
            </swiper-container>
          </div>
          <div></div>
        </CenterContent>
      </section>
    );
  }
}
