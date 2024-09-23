import { ArrowUpRightIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <>
      <header className="text-3xl font-semibold">
      <h1 className="flex-1">Continue in Safari or Chrome</h1>
      </header>
      <section className="inline-flex flex-1 flex-col gap-4">
        <p>
        For security reasons, we do not support Facebook&apos;s in-app browser to connect your health plan to this application.
        </p>
        <p>Long press the link below to continue in your default browser.</p>
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
          href="intent:https://www.flexpa.com#Intent;end" 
          target="_blank"
        >Open in default</a>
        </div>
      </section>
    </>
  );
}
