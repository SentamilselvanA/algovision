import { FileText, ArrowRight } from 'lucide-react';

export default function ProblemSection({ problem }) {
  if (!problem) return null;

  return (
    <div className="bg-dark-card border border-dark-border rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Sample Problem</h3>
      </div>

      <div className="space-y-4">
        {/* Problem Statement */}
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Problem</h4>
          <p className="text-sm text-gray-300">{problem.statement}</p>
        </div>

        {/* Example */}
        <div className="bg-dark-bg p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Example</h4>
          <div className="space-y-2 text-sm font-mono">
            <div>
              <span className="text-gray-500">Input:</span>
              <span className="text-green-400 ml-2">{problem.input}</span>
            </div>
            <div>
              <span className="text-gray-500">Output:</span>
              <span className="text-blue-400 ml-2">{problem.output}</span>
            </div>
          </div>
        </div>

        {/* Connection to Visualization */}
        <div className="flex items-start gap-3 bg-primary/10 border border-primary/30 rounded-lg p-4">
          <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-primary mb-1">How it connects</h4>
            <p className="text-sm text-gray-300">{problem.connection}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
