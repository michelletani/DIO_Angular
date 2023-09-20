class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const compomentRoot = document.createElement("div");
        compomentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left")

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anomymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url") || "#";

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right")

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/gato.jpg";
        newsImage.alt = "Foto notícia"
        cardRight.appendChild(newsImage);

        compomentRoot.appendChild(cardLeft);
        compomentRoot.appendChild(cardRight);

        return compomentRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                margin: 15px;
                width: 80%;
                border: 1px solid gray;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: 9px 9px 19px 1px rgba(0,0,0,0.52);
                -webkit-box-shadow: 9px 9px 19px 1px rgba(0,0,0,0.52);
                -moz-box-shadow: 9px 9px 19px 1px rgba(0,0,0,0.52);
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card_left > span {
                font-weight: 400;
            }
            
            
            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: 400;
            }
            .card_left > a:hover {
                opacity: 0.5;
                text-decoration: underline;
            }
            
            .card_left > p {
                color: rgb(70, 70, 70);
            }
            
            .card_right > img{
                max-height: 150px;
            }
        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);