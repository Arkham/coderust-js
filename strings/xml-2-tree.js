// Given a valid XML document, read it in a tree structure.

const XmlElementType = {
  ELEMENT_UNKNOWN: 1,
  ELEMENT_OPENING_TAG: 2,
  ELEMENT_CLOSING_TAG: 3,
  ELEMENT_TEXT: 4
};

class XmlElement {
  constructor(elementType) {
    this.elementType = elementType || XmlElementType.ELEMENT_UNKNOWN;
    this.nodeName = '';
  }
}

class XmlTokenizer {
  constructor(xmlString) {
    this.xmlString = xmlString;
    this.offset = 0;
  }

  getNextElement(element) {
    let startIndex = this.xmlString.indexOf('<', this.offset);

    if (startIndex === -1) {
      return false;
    }

    // check if we're in the middle of a tag
    let temp = this.xmlString.substring(this.offset, startIndex).trim();

    if (temp.length) {
      element.elementType = XmlElementType.ELEMENT_TEXT;
      element.nodeName = temp;

      this.offset = startIndex;
      return true;
    }

    let endIndex = this.xmlString.indexOf('>', startIndex);

    if (endIndex === -1) {
      return false;
    }

    if (this.xmlString[startIndex + 1] === '/') {
      element.elementType = XmlElementType.ELEMENT_CLOSING_TAG;
      element.nodeName = this.xmlString.substring(startIndex + 2, endIndex);
    } else {
      element.elementType = XmlElementType.ELEMENT_OPENING_TAG;
      element.nodeName = this.xmlString.substring(startIndex + 1, endIndex);
    }

    this.offset = endIndex + 1;
    return true;
  }
}

class XmlNode {
  constructor(nodeName) {
    this.nodeName = nodeName;
    this.children = [];
  }

  visit(visit_fn, depth = 0) {
    visit_fn(this, depth);
    this.children.forEach(function(child) {
      child.visit(visit_fn, depth + 1);
    });
  }
}

class XmlTokenizerStack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  last() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    return this.stack.pop();
  }
}

class XmlParsingError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'Xml Parsing Error';
  }
}

let parseXmlString = function(xmlString) {
  let tokenizer = new XmlTokenizer(xmlString);
  let element = new XmlElement();

  if (!tokenizer.getNextElement(element)) {
    return null;
  }

  let stack = new XmlTokenizerStack();
  let root = new XmlNode(element.nodeName);
  stack.push(root)

  while ((element = new XmlElement()) && tokenizer.getNextElement(element)) {
    console.log(tokenizer.offset, element.nodeName, element.elementType);

    let newNode;

    if (element.elementType === XmlElementType.ELEMENT_OPENING_TAG ||
      element.elementType === XmlElementType.ELEMENT_TEXT) {
      newNode = new XmlNode(element.nodeName);
      stack.last().children.push(newNode);
    }

    if (element.elementType === XmlElementType.ELEMENT_OPENING_TAG) {
      stack.push(newNode);
    } else if (element.elementType === XmlElementType.ELEMENT_CLOSING_TAG) {
      let result = stack.pop();
      if (result.nodeName !== element.nodeName) {
        throw new XmlParsingError(`Encountered closing tag ${element.nodeName}, but ${result.nodeName} expected`);
      }
    }
  }

  return root;
}

const string = `
<html>
  <body>
    <div>
      <h1>CodeRust</h1>
      <a>http://coderust.com</a> 
    </div>
    <div>
        <h2>Chapter 1</h2>
    </div>
    <div>
        <h3>Chapter 2</h3>
        <h4>Chapter 2.1</h4>
    </div>
  </body>
</html>
`;

let xom = parseXmlString(string);

const { assert } = require('../helpers');

assert(xom.nodeName, 'html')
assert(xom.children.length, 1);
assert(xom.children[0].nodeName, 'body');

let result = '';
let toString = function(node, depth) {
  result += Array(depth + 1).join('  ') + node.nodeName + '\n';
};
xom.visit(toString);

assert(result.trim(), `
html
  body
    div
      h1
        CodeRust
      a
        http://coderust.com
    div
      h2
        Chapter 1
    div
      h3
        Chapter 2
      h4
        Chapter 2.1`.trim());
