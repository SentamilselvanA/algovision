import { Lightbulb } from 'lucide-react';

export default function WhyThisStep({ explanation }) {
  if (!explanation) return null;

  return (
    <div className="bg-dark-card border border-dark-border rounded-lg p-4">
      <div className="flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-semibold text-yellow-400 mb-2">Why this step?</h4>
          <p className="text-sm text-gray-300 leading-relaxed">{explanation}</p>
        </div>
      </div>
    </div>
  );
}
