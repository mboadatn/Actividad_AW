
const nodeData = {
    body: { tag: "body", parent: "—", children: "header, nav, section, aside, footer", code: `document.body` },
    header: { tag: "header", parent: "body", children: "H1", code: `document.getElementsByTagName("header")[0]` },
    h1: { tag: "h1", parent: "header", children: "(texto)", code: `document.querySelector("h1")` },
    nav: { tag: "nav", parent: "body", children: "ul", code: `document.getElementsByTagName("nav")[0]` },
    ul: { tag: "ul", parent: "nav", children: "li", code: `document.getElementsByTagName("ul")[0]` },
    li: { tag: "li", parent: "ul", children: "a", code: `document.getElementById("miLI")` },
    a: { tag: "a", parent: "li", children: "(texto)", code: `document.getElementsByTagName("a")[0]` },
    section: { tag: "section", parent: "body", children: "article", code: `document.getElementsByTagName("section")[0]` },
    article: { tag: "article", parent: "section", children: "H2, p, div", code: `document.getElementsByTagName("article")[0]` },
    h2: { tag: "h2", parent: "article", children: "(texto)", code: `document.querySelector("h2")` },
    p1: { tag: "p", parent: "article", children: "(texto)", code: `document.getElementsByTagName("p")[0]` },
    div: { tag: "div", parent: "article", children: "img", code: `document.getElementsByTagName("div")[0]` },
    img: { tag: "img", parent: "div", children: "(ninguno)", code: `document.images[0]` },
    aside: { tag: "aside", parent: "body", children: "p", code: `document.getElementsByTagName("aside")[0]` },
    p2: { tag: "p", parent: "aside", children: "(texto)", code: `document.getElementsByTagName("p")[1]` },
    footer: { tag: "footer", parent: "body", children: "(ninguno)", code: `document.getElementsByTagName("footer")[0]` },
};

const treeButtons = document.querySelectorAll(".node");
const infoPanel = document.getElementById("nodeInfo");

treeButtons.forEach((btn) => {
    btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            btn.dispatchEvent(new Event("click"));
        }
    });

    btn.addEventListener("click", () => {
        treeButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        const key = btn.dataset.node;
        const data = nodeData[key];
        if (!data) return;

        infoPanel.innerHTML = `
      <h3 class="node-info__title">&lt;${data.tag}&gt;</h3>
      <div class="node-info__row"><span>parentNode</span><span>${data.parent}</span></div>
      <div class="node-info__row"><span>childNodes</span><span>${data.children}</span></div>
      <pre class="node-info__code"><code>${data.code}</code></pre>
    `;
    });
});


document.getElementById("btnPulsame").onclick = function () {
    document.getElementById("demo").innerHTML = "Hola Mundo";
};

const demoBox = document.getElementById("demoBox");

document.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
        const action = btn.dataset.action;

        if (action === "color") {
            demoBox.setAttribute("style", "background:#E8A33D; color:#101A23; font-weight:700;");
            demoBox.textContent = 'setAttribute("style", "background:#E8A33D...")';
        }

        if (action === "text") {
            demoBox.style.transform = "rotate(-2deg) scale(1.03)";
            demoBox.style.borderColor = "#6FA287";
            demoBox.textContent = "style.transform = \"rotate(-2deg) scale(1.03)\"";
        }

        if (action === "reset") {
            demoBox.removeAttribute("style");
            demoBox.textContent = "caja de ejemplo";
        }
    });
});