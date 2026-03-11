export function highlightCode(code, language) {
  if (!code) return [];
  
  const lines = code.split('\n');
  
  const keywords = {
    javascript: ['function', 'const', 'let', 'var', 'if', 'else', 'while', 'for', 'return', 'new', 'this', 'class', 'import', 'export', 'from', 'default', 'async', 'await'],
    python: ['def', 'class', 'if', 'elif', 'else', 'while', 'for', 'return', 'import', 'from', 'as', 'in', 'not', 'and', 'or', 'True', 'False', 'None'],
    cpp: ['int', 'void', 'char', 'float', 'double', 'bool', 'if', 'else', 'while', 'for', 'return', 'class', 'public', 'private', 'protected', 'namespace', 'using', 'include']
  };

  const types = {
    javascript: ['Array', 'Object', 'String', 'Number', 'Boolean', 'Map', 'Set'],
    python: ['int', 'str', 'list', 'dict', 'tuple', 'set', 'bool', 'float'],
    cpp: ['vector', 'string', 'map', 'set', 'pair', 'queue', 'stack']
  };

  const highlightLine = (line) => {
    const tokens = [];
    let currentPos = 0;
    
    // Match strings
    const stringRegex = /(['"`])((?:\\.|(?!\1).)*?)\1/g;
    let match;
    const stringMatches = [];
    while ((match = stringRegex.exec(line)) !== null) {
      stringMatches.push({ start: match.index, end: match.index + match[0].length, text: match[0] });
    }

    // Match numbers
    const numberRegex = /\b\d+\.?\d*\b/g;
    const numberMatches = [];
    while ((match = numberRegex.exec(line)) !== null) {
      numberMatches.push({ start: match.index, end: match.index + match[0].length, text: match[0] });
    }

    // Match comments
    const commentRegex = /(\/\/.*$|#.*$|\/\*[\s\S]*?\*\/)/;
    const commentMatch = line.match(commentRegex);
    const commentMatches = commentMatch ? [{ start: commentMatch.index, end: commentMatch.index + commentMatch[0].length, text: commentMatch[0] }] : [];

    // Match function calls
    const functionRegex = /\b([a-zA-Z_]\w*)\s*\(/g;
    const functionMatches = [];
    while ((match = functionRegex.exec(line)) !== null) {
      functionMatches.push({ start: match.index, end: match.index + match[1].length, text: match[1] });
    }

    // Combine all matches
    const allMatches = [...stringMatches, ...numberMatches, ...commentMatches, ...functionMatches]
      .sort((a, b) => a.start - b.start);

    // Build tokens
    let pos = 0;
    for (const match of allMatches) {
      // Add text before match
      if (pos < match.start) {
        const text = line.substring(pos, match.start);
        tokens.push(...tokenizeText(text, language, keywords, types));
      }
      
      // Add the match with appropriate color
      let color = 'text-gray-300';
      if (stringMatches.includes(match)) color = 'text-green-400';
      else if (numberMatches.includes(match)) color = 'text-orange-400';
      else if (commentMatches.includes(match)) color = 'text-gray-500 italic';
      else if (functionMatches.includes(match)) color = 'text-yellow-400';
      
      tokens.push({ text: match.text, color });
      pos = match.end;
    }

    // Add remaining text
    if (pos < line.length) {
      const text = line.substring(pos);
      tokens.push(...tokenizeText(text, language, keywords, types));
    }

    return tokens.length > 0 ? tokens : [{ text: line, color: 'text-gray-300' }];
  };

  const tokenizeText = (text, language, keywords, types) => {
    const tokens = [];
    const words = text.split(/(\s+|[{}()\[\];,.])/);
    
    for (const word of words) {
      if (!word) continue;
      
      let color = 'text-gray-300';
      if (keywords[language]?.includes(word)) {
        color = 'text-purple-400 font-semibold';
      } else if (types[language]?.includes(word)) {
        color = 'text-blue-400';
      } else if (/^[A-Z]/.test(word)) {
        color = 'text-cyan-400';
      } else if (word.match(/^[{}()\[\];,.]/)) {
        color = 'text-gray-500';
      }
      
      tokens.push({ text: word, color });
    }
    
    return tokens;
  };

  return lines.map(line => highlightLine(line));
}
