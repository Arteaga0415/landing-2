import Image from 'next/image';
import Link from 'next/link';
import ChooseUsCard from './card';
import chooseUsData from './chooseUsData';

const WhyChooseUs = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Why Choose Us?
        </h2>

        {/* Main content: Two columns */}
        <div className="flex flex-wrap">
          {/* Left Side: Image */}
          <div className="flex justify-center w-1/2">
            <Image
              src="/images/couple.png" // Add the correct image path here
              alt="Why Choose Us Image"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right Side: Cards */}
          <div className="space-y-6 w-1/2">
            {chooseUsData.map(reason => (
                <ChooseUsCard key={reason.id} reason={reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
