class PageContent extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById("page-content");
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );
  }

  connectedCallback() {
    console.log('added to the page');
  }
}

export default PageContent;