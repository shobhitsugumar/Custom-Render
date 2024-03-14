function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  document.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
  },
  children: "click here for google",
};

const MainContainer = document.getElementById("root");

customRender(reactElement, MainContainer);
