
import type { Plan, Session } from '../types';

const plans: Plan[] = [
  {
    id: 'basic_30',
    name: 'Quick Surf',
    price: 1.99,
    duration: 30 * 60, // 30 minutes
    description: 'Perfect for checking emails and social media on the go.',
    speed: 'Up to 10 Mbps',
  },
  {
    id: 'standard_1hr',
    name: 'Power Hour',
    price: 3.49,
    duration: 60 * 60, // 1 hour
    description: 'Ideal for an hour of focused work or streaming.',
    speed: 'Up to 25 Mbps',
  },
  {
    id: 'premium_day',
    name: 'All Day Pass',
    price: 9.99,
    duration: 24 * 60 * 60, // 24 hours
    description: 'Unlimited access for a full day. Best value for heavy users.',
    speed: 'Up to 50 Mbps',
  },
];

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const fetchPlans = async (): Promise<Plan[]> => {
  console.log("API: Fetching plans...");
  await delay(1000); // Simulate network latency
  console.log("API: Plans fetched successfully.");
  return plans;
};

export const purchasePlan = async (planId: string, macAddress: string): Promise<Session> => {
  console.log(`API: Attempting to purchase plan ${planId} for MAC ${macAddress}`);
  await delay(2500); // Simulate payment processing and router communication

  const selectedPlan = plans.find(p => p.id === planId);

  if (!selectedPlan) {
    console.error("API: Purchase failed. Plan not found.");
    throw new Error("Plan not found");
  }

  // Simulate a random failure for demonstration
  if (Math.random() < 0.1) {
    console.error("API: Purchase failed. Simulated random error.");
    throw new Error("A random error occurred during purchase.");
  }
  
  console.log("API: Purchase successful. Device authorized.");
  
  const session: Session = {
    planName: selectedPlan.name,
    remainingTime: selectedPlan.duration,
  };

  return session;
};
