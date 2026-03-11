import { codeMetadata } from '../data/codeMetadata';

export function addCodeLineToSteps(algorithmId, steps) {
  const metadata = codeMetadata[algorithmId];
  if (!metadata) return steps;

  const lineMapping = metadata.lineMapping;
  
  return steps.map((step, index) => {
    let codeLine = null;
    
    // Map step to code line based on explanation keywords
    const explanation = step.explanation.toLowerCase();
    
    if (explanation.includes('starting') || explanation.includes('initialize')) {
      codeLine = lineMapping.init;
    } else if (explanation.includes('while') && explanation.includes('loop')) {
      codeLine = lineMapping.whileLoop;
    } else if (explanation.includes('for') && explanation.includes('loop')) {
      codeLine = lineMapping.forLoop || lineMapping.outerLoop;
    } else if (explanation.includes('calculate mid') || explanation.includes('mid =')) {
      codeLine = lineMapping.calculateMid;
    } else if (explanation.includes('equals') || explanation.includes('found!')) {
      codeLine = lineMapping.checkEqual || lineMapping.returnFound;
    } else if (explanation.includes('less than') || explanation.includes('< ')) {
      codeLine = lineMapping.checkLess;
    } else if (explanation.includes('greater than') || explanation.includes('> ')) {
      codeLine = lineMapping.checkGreater;
    } else if (explanation.includes('swap')) {
      codeLine = lineMapping.swap;
    } else if (explanation.includes('comparing') || explanation.includes('compare')) {
      codeLine = lineMapping.compare || lineMapping.comparing;
    } else if (explanation.includes('pivot')) {
      codeLine = lineMapping.choosePivot || lineMapping.partition;
    } else if (explanation.includes('minimum') || explanation.includes('min')) {
      codeLine = lineMapping.findMin || lineMapping.setMin;
    } else if (explanation.includes('insert')) {
      codeLine = lineMapping.insert;
    } else if (explanation.includes('shift')) {
      codeLine = lineMapping.shift;
    } else if (explanation.includes('divide') || explanation.includes('split')) {
      codeLine = lineMapping.divide;
    } else if (explanation.includes('merge')) {
      codeLine = lineMapping.merge;
    } else if (explanation.includes('dequeue')) {
      codeLine = lineMapping.dequeue;
    } else if (explanation.includes('pop')) {
      codeLine = lineMapping.pop;
    } else if (explanation.includes('visit') || explanation.includes('mark')) {
      codeLine = lineMapping.visit;
    } else if (explanation.includes('neighbor')) {
      codeLine = lineMapping.checkNeighbors || lineMapping.addNeighbor;
    } else if (explanation.includes('slide') || explanation.includes('window')) {
      codeLine = lineMapping.slideWindow || lineMapping.slideLoop;
    } else if (explanation.includes('distance')) {
      codeLine = lineMapping.relax || lineMapping.initDistances;
    } else if (explanation.includes('complete')) {
      codeLine = lineMapping.complete || lineMapping.returnNotFound;
    }
    
    return {
      ...step,
      codeLine,
      whyExplanation: codeLine ? metadata.whyExplanations[codeLine] : null
    };
  });
}
