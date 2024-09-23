import { ArrowUpRightIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <>
      <header className="text-3xl font-semibold">
      <h1 className="flex-1">Talking about work</h1>
      </header>
      <section className="inline-flex flex-1 flex-col gap-4">
        <p>
          At Flexpa, we are revolutionizing the healthcare data landscape by empowering patients and businesses alike. As a B2B SaaS company, we have developed a groundbreaking platform that provides secure access to identified health claims, bridging the gap between healthcare information and innovative applications. Our unique approach puts patients at the center, ensuring that data sharing is always consent-driven and transparent. By facilitating this seamless, patient-approved flow of information, we are enabling businesses, applications, and organizations to develop more personalized, efficient healthcare solutions. From streamlining insurance processes to enhancing medical research, Flexpa is paving the way for a more connected and patient-centric healthcare ecosystem. We are not just handling data; we are transforming how healthcare information is utilized, all while maintaining the highest standards of privacy and security.
        </p>
        <p>You can see more about my work here:</p>
        <div>
            <a
              href={'https://www.flexpa.com'}
              className="text-teal-700 hover:cursor-pointer hover:text-teal-900"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-1">
                Press and hold to open
                <ArrowUpRightIcon className="size-3" />
              </div>
            </a>
        </div>
        <div>
        <a 
          href="x-safari-https://www.flexpa.com" 
          target="_blank"
        >Open in Safari</a>
        </div>
        <div>
        <a 
          href="googlechromes://flexpa.com" 
          target="_blank"
        >Open in Chrome</a>
        </div>
      </section>
    </>
  );
}
