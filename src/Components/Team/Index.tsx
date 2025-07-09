"use client";
import ProfileCard from './ProfileCard';
import Coo from './Coo';
import ChromaGrid from './Team';

const Newteam = () => {
    return (
        <section className="mt-40">
            <div className='mb-40'>
                <div
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
                            Meet the Visionaries Behind Our Mission
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        Get to know the passionate leaders shaping the future of our company.
                    </p>
                </div>


                <div className="flex sm:flex-nowrap flex-wrap justify-center gap-20">
                    <ProfileCard
                        avatarUrl="/apceo.png"
                        miniAvatarUrl="/person.png"
                        title="Founder & CEO"
                        handle="johndoe"
                        status="Leading the Vision"
                        contactText="Message"
                        iconUrl="https://example.com/shine-pattern.svg"
                        grainUrl="https://example.com/grain-texture.png"
                    />
                    <Coo
                        avatarUrl="/COOZeeshan.png"
                        miniAvatarUrl="/person-Copy.png"
                        name="M Zeeshan"
                        title="Co-Founder & COO"
                        handle="janesmith"
                        status="Executing the Vision"
                        contactText="Message"
                        iconUrl="https://example.com/shine-pattern.svg"
                        grainUrl="https://example.com/grain-texture.png"
                    />
                </div>
            </div>
            <div>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
                            Meet the Experts Driving Our Success
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        Meet the Nexomark specialists dedicated to delivering excellence every day.
                    </p>
                </div>
                <ChromaGrid />
            </div>
        </section>
    )
}

export default Newteam;