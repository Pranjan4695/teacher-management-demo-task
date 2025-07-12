"use client";
import React, { useState } from "react";
import {
  PlusIcon,
  MinusIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

const ProfileCard = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isExpanded1, setIsExpanded1] = useState(true);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow p-4">
        {/* Header with Edit Icon */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-medium text-gray-700">Details</h3>
          <button className="p-1 hover:bg-gray-200 rounded">
            <PencilSquareIcon className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        <hr className="mb-2" />

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-800">
              <b>Name:</b> Alynia Allan
            </p>
            <p className="text-gray-800">
              <b>Date:</b> Theties
            </p>
            <p className="text-gray-800">
              <b>Birth Date:</b>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        {/* Header with toggle icon */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-medium text-gray-700">
            Private Qualifications
          </h3>
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
        {/* Conditionally render table */}
        {isExpanded1 && (
          <div className="overflow-x-auto">
            <hr className="mb-2" />
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="py-1">Name</th>
                  <th className="py-1">Rate (5 INR)</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr>
                  <td className="py-1">Vocal Contemporary</td>
                  <td className="py-1">$40.00</td>
                </tr>
                <tr>
                  <td className="py-1">Vocal Attacemr</td>
                  <td className="py-1">$60.00</td>
                </tr>
                <tr>
                  <td className="py-1">Vocal Por 0:</td>
                  <td className="py-1">$00.00</td>
                </tr>
                <tr>
                  <td className="py-1">Vocal Eoo</td>
                  <td className="py-1">$20.00</td>
                </tr>
                <tr>
                  <td className="py-1">Vocal Ettle</td>
                  <td className="py-1">$20.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

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
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="py-1">Name</th>
                  <th className="py-1">Rate ($/hr)</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr>
                  <td className="py-1">-</td>
                  <td className="py-1">-</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
