
import React from 'react';
import type { Plan } from '../types';
import { ClockIcon, WifiIcon } from './Icons';

interface PlanCardProps {
  plan: Plan;
  onSelect: (plan: Plan) => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 flex flex-col transform hover:scale-105 hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-red-500/10">
        <div className="flex-grow">
            <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
            <p className="text-4xl font-extrabold text-red-500 my-4">${plan.price.toFixed(2)}</p>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-red-400" />
                    <span>Duration: {plan.duration / 60} minutes</span>
                </div>
                <div className="flex items-center gap-3">
                    <WifiIcon className="h-5 w-5 text-red-400" />
                    <span>Speed: {plan.speed}</span>
                </div>
            </div>
        </div>
      <button
        onClick={() => onSelect(plan)}
        className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
      >
        Choose Plan
      </button>
    </div>
  );
};
