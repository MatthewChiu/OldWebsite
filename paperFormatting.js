class PaperItem extends HTMLElement {
    constructor() {
      super();
  
      this.conference = "";
      this.year = "";
      this.paperTitle = "";
      this.articleOrVideo1 = "";
    }
  
    connectedCallback() {
      this.conference = this.getAttribute("conference");
      this.year = this.getAttribute("year");
      this.paperTitle = this.getAttribute("paperTitle");
      this.articleOrVideo1 =this.getAttribute("articleOrVideo1"); 
  
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="lineItem">
            <div class="acronymn">
                <div class="paperItem__year">${this.year}</div>
                <div class="paperItem__conference">${this.conference}</div>
            </div>

            <div class="conferenceInformation">
                <h2>${this.paperTitle}</h2>
                <h3>&#9737 ${this.articleOrVideo1}</h3>
            </div>
        </div>
        `;
    }
  }

class PaperItem2 extends HTMLElement {
  constructor() {
    super();

    this.conference = "";
    this.year = "";
    this.paperTitle = "";
    this.articleOrVideo1 = "";
    this.articleOrVideo2 = "";
  }

  connectedCallback() {
    this.conference = this.getAttribute("conference");
    this.year = this.getAttribute("year");
    this.paperTitle = this.getAttribute("paperTitle");
    this.articleOrVideo1 =this.getAttribute("articleOrVideo1"); 
    this.articleOrVideo2 =this.getAttribute("articleOrVideo2"); 

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="lineItem">
          <div class="acronymn">
              <div class="paperItem__year">${this.year}</div>
              <div class="paperItem__conference">${this.conference}</div>
          </div>

          <div class="conferenceInformation">
              <h2>${this.paperTitle}</h2>
              <h3>&#9737 ${this.articleOrVideo1}</h3>
              <h3>&#9737 ${this.articleOrVideo2}</h3>
          </div>
      </div>
      `;
  }
}


class PaperItem3 extends HTMLElement {
  constructor() {
    super();

    this.conference = "";
    this.year = "";
    this.paperTitle = "";
    this.articleOrVideo1 = "";
    this.articleOrVideo2 = "";
    this.articleOrVideo3 = "";
  }

  connectedCallback() {
    this.conference = this.getAttribute("conference");
    this.year = this.getAttribute("year");
    this.paperTitle = this.getAttribute("paperTitle");
    this.articleOrVideo1 =this.getAttribute("articleOrVideo1"); 
    this.articleOrVideo2 =this.getAttribute("articleOrVideo2"); 
    this.articleOrVideo3 =this.getAttribute("articleOrVideo3"); 

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="lineItem">
          <div class="acronymn">
              <div class="paperItem__year">${this.year}</div>
              <div class="paperItem__conference">${this.conference}</div>
          </div>

          <div class="conferenceInformation">
              <h2>${this.paperTitle}</h2>
              <h3>&#9737 ${this.articleOrVideo1}</h3>
              <h3>&#9737 ${this.articleOrVideo2}</h3>
              <h3>&#9737 ${this.articleOrVideo3}</h3>
          </div>
      </div>
      `;
  }
}

class PaperItem4 extends HTMLElement {
  constructor() {
    super();

    this.conference = "";
    this.year = "";
    this.paperTitle = "";
    this.articleOrVideo1 = "";
    this.articleOrVideo2 = "";
    this.articleOrVideo3 = "";
    this.articleOrVideo4 = "";
  }

  connectedCallback() {
    this.conference = this.getAttribute("conference");
    this.year = this.getAttribute("year");
    this.paperTitle = this.getAttribute("paperTitle");
    this.articleOrVideo1 =this.getAttribute("articleOrVideo1"); 
    this.articleOrVideo2 =this.getAttribute("articleOrVideo2"); 
    this.articleOrVideo3 =this.getAttribute("articleOrVideo3"); 
    this.articleOrVideo4 =this.getAttribute("articleOrVideo4"); 

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="lineItem">
          <div class="acronymn">
              <div class="paperItem__year">${this.year}</div>
              <div class="paperItem__conference">${this.conference}</div>
          </div>

          <div class="conferenceInformation">
              <h2>${this.paperTitle}</h2>
              <h3>&#9737 ${this.articleOrVideo1}</h3>
              <h3>&#9737 ${this.articleOrVideo2}</h3>
              <h3>&#9737 ${this.articleOrVideo3}</h3>
              <h3>&#9737 ${this.articleOrVideo4}</h3>
          </div>
      </div>
      `;
  }
}

customElements.define("paper_item-component", PaperItem);
customElements.define("paper_item-component2", PaperItem2);
customElements.define("paper_item-component3", PaperItem3);
customElements.define("paper_item-component4", PaperItem4);
