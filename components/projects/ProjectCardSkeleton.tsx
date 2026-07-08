"use client";

import React from "react";

// Loading placeholder shaped like ProjectCard so the /explore grid has no
// layout shift once real campaign data resolves (#1).
export const ProjectCardSkeleton: React.FC = () => (
  <div
    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 animate-pulse"
    role="status"
    aria-label="Loading campaign"
  >
    <div className="h-56 bg-gradient-to-br from-neutral-100 to-neutral-200" />
    <div className="p-7">
      <div className="flex justify-between items-center mb-3">
        <div className="h-4 w-16 bg-neutral-200 rounded" />
        <div className="h-6 w-20 bg-neutral-200 rounded-md" />
      </div>
      <div className="h-6 bg-neutral-200 rounded mb-6" />
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <div className="h-4 w-12 bg-neutral-200 rounded" />
            <div className="h-4 w-8 bg-neutral-200 rounded" />
          </div>
          <div className="h-2 bg-neutral-200 rounded-full" />
        </div>
        <div className="flex justify-between items-center">
          <div className="h-5 w-24 bg-neutral-200 rounded" />
          <div className="h-10 w-20 bg-neutral-200 rounded-lg" />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCardSkeleton;
