
import { 
  Beef, 
  Leaf, 
  Wheat, 
  Droplets, 
  GaugeCircle, 
  Apple, 
  HeartPulse,
  Dumbbell,
  Baby
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export type NutritionClaim = 
  | 'High Protein' 
  | 'High Fiber' 
  | 'Low Sugar' 
  | 'Low Carb' 
  | 'Vegan Friendly' 
  | 'Zero Sugar'
  | 'Gluten Free'
  | 'Heart Healthy'
  | 'Omega-3 Rich'
  | 'Vitamin Rich'
  | 'Kid Friendly';

// Map claims to corresponding icons
export const getClaimIcon = (claim: NutritionClaim) => {
  switch (claim) {
    case 'High Protein':
      return <Dumbbell className="h-3 w-3 mr-1" />;
    case 'High Fiber':
      return <Wheat className="h-3 w-3 mr-1" />;
    case 'Low Sugar':
      return <Droplets className="h-3 w-3 mr-1" />;
    case 'Low Carb':
      return <GaugeCircle className="h-3 w-3 mr-1" />;
    case 'Vegan Friendly':
      return <Leaf className="h-3 w-3 mr-1" />;
    case 'Zero Sugar':
      return <Droplets className="h-3 w-3 mr-1" />;
    case 'Gluten Free':
      return <Wheat className="h-3 w-3 mr-1 text-destructive" />;
    case 'Heart Healthy':
      return <HeartPulse className="h-3 w-3 mr-1" />;
    case 'Omega-3 Rich':
      return <HeartPulse className="h-3 w-3 mr-1" />;
    case 'Vitamin Rich':
      return <Apple className="h-3 w-3 mr-1" />;
    case 'Kid Friendly':
      return <Baby className="h-3 w-3 mr-1" />;
    default:
      return null;
  }
};

// A component to display nutrition claims as badges
export const NutritionClaimBadge = ({ claim }: { claim: NutritionClaim }) => {
  const icon = getClaimIcon(claim);
  
  return (
    <Badge
      variant="outline"
      className="inline-flex items-center text-xs bg-primary/5 text-primary border-primary/10 px-2 py-1 rounded"
    >
      {icon} {claim}
    </Badge>
  );
};
