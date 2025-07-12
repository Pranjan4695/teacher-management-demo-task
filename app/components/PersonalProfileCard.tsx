"use client";
import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const PersonalProfileCard = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isExpanded1, setIsExpanded1] = useState(true);
  const [isExpanded2, setIsExpanded2] = useState(true);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-medium text-gray-700">
            Group Qualifications
          </h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-200 rounded">
            {isExpanded ? (
              <PlusIcon className="h-4 w-4 text-gray-600" />
            ) : (
              <MinusIcon className="h-4 w-4 text-gray-600" />
            )}
          </button>
        </div>

        {isExpanded && (
          <>
            <hr className="mb-2" />
            <p className="text-gray-800">
              <b> Work : AlyniaAllan@example.com </b>
            </p>
          </>
        )}
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-medium text-gray-700">Phone</h3>
          <button
            onClick={() => setIsExpanded1(!isExpanded1)}
            className="p-1 hover:bg-gray-200 rounded">
            {isExpanded1 ? (
              <PlusIcon className="h-4 w-4 text-gray-600" />
            ) : (
              <MinusIcon className="h-4 w-4 text-gray-600" />
            )}
          </button>
        </div>
        {isExpanded1 && (
          <>
            <hr className="mb-2" />
            <p className="text-gray-800"> Phone : (416) 548-8507</p>
          </>
        )}
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-medium text-gray-700">Address</h3>
          <button
            onClick={() => setIsExpanded2(!isExpanded2)}
            className="p-1 hover:bg-gray-200 rounded">
            {isExpanded2 ? (
              <PlusIcon className="h-4 w-4 text-gray-600" />
            ) : (
              <MinusIcon className="h-4 w-4 text-gray-600" />
            )}
          </button>
        </div>
        {isExpanded2 && (
          <>
            <hr className="mb-2" />
            <p className="text-gray-800">
              Name: 26 Opianto D: Sento Eir
              <br />
              Variaine : or tame
              <br />
              Canada
            </p>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default PersonalProfileCard;
