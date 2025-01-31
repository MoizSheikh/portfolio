import { Cert } from "@/app/_lib/_types/genericTypes";
import { certs } from "@/app/_lib/assets/staticData";
import React from "react";
import { SingleDotSvg } from "@/app/_lib/assets/HomepageSVG";
import Image from "next/image";

const Certification = () => {
  return (
    <div className="py-16 w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto px-3 md:px-0">
      <h2 className="flex items-baseline text-5xl font-bold text-heading mb-12 text-left">
        
        Certifications{" "}
        <span className="ml-2 text-indigo-300">
          <SingleDotSvg />
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert: Cert) => (
          <div
            key={cert.id}
            className="relative flex-1 rounded-xl border border-card-border bg-card-bg flex flex-col p-6 hover:border-indigo-300/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg text-heading">
                  {cert.name}
                </h2>
                {cert.logo && (
                  <div className="relative w-8 h-8">
                    <Image
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-indigo-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-sm">{cert.issuer}</span>
              </div>

              <div className="flex items-center gap-2 mt-1 text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-indigo-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">{cert.issueDate}</span>
              </div>

              <div className="w-full h-[1px] bg-zinc-600 my-4"></div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded bg-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* {cert.credentialId && (
                <div className="mt-4 text-right">
                  <div className="tooltip" data-tip="Credential ID">
                    <div className="text-xs text-muted font-mono">
                      {cert.credentialId}
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
