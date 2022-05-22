class Slider {

  get container() {
    return this.section.find(".slides");
  }

  constructor(id, slides, is_even) {

    $(document).ready(
      () => {
        this.section = $("#" + id);
        this.section.addClass('slider');

        let slides_html = "";

        for (let [i, {title, img, text, price}] of Object.entries(slides)) {
          let prev_id = "prev-" + Math.round(Math.random() * 10000);
          let next_id = "next-" + Math.round(Math.random() * 10000);

          let image_block = `<div class="collection-image collection-entry-block">
            <div class="img-frame">

              <div class="img-container">
                <img src="${img}">
                <div class="img-price-tag">
                  <span>$${price}</span>
                </div>
              </div>

              <div class="flex flex-center">
                <a class="btn" onclick="open_modal('modal-order', {img: '${img}',  item: '${title}'})">Buy Now</a>
              </div>

            </div>
          </div>`

          let info_block = `<div class="collection-info collection-entry-block">
            <div class="collection-title">
              <h3>
                ${title}
              </h3>

              <div>
                <i id="${prev_id}" class="fa-solid fa-arrow-left-long"></i>
                <i id="${next_id}" class="fa-solid fa-arrow-right-long"></i>
              </div>
            </div>

            <p class="collection-text">
              ${text}
            </p>
            <div class="colection-actions">
              <a class="btn">See All Collection</a>
              <a class="btn light" href="/about">Learn More</a>
            </div>
          </div>`

          slides_html += `
          <div class="slide">
            <div class="section-collection ${is_even ? 'right-gradient flex-wrap-reverse': 'left-gradient flex-wrap'} p-1">

              ${is_even ? image_block + info_block : info_block + image_block}

            </div>
          </div>
          `
          console.log("add handler for ", prev_id, "and", next_id);
          const _this = this;
          $('body').on("click", "#" + prev_id, ()=>_this.move_slide(-1));
          $('body').on("click", "#" + next_id, ()=>_this.move_slide(1));
        }

        this.section.html(`
          <div class="slides">
            ${slides_html}
          </div>
        `)
      }
    )
  }

  set_slide(i) {
    let slides = this.container.find('.slide');
    let width = parseFloat(slides.width());
    let style = (i * width)  + "px";
    slides.css("right", style);
    this.container.data("current_slide", i);
  }

  move_slide(dx) {
    let current_slide = this.container.data("current_slide") || 0;
    let slides = this.container.find('.slide');

    let new_slide = current_slide + dx;

    if (new_slide < 0) {
      return
    }

    if (new_slide >= slides.length) {
      return
    }

    return this.set_slide(new_slide);
  }
}

const slider1 = new Slider(
  "slider1",
  [
    {
      title: 'Grafted Ficus Bonsai',
      text: 'Are you looking for a small desk plant sure to spark conversation? Ficus microcarpa “Ginseng” definitely very distinctive look to it. These plants are extremely forgiving, easily tolerating',
      img: "static/images/collection1.png",
      price: 123,
    },
    {
      title: 'Grafted Ficus Bonsai',
      text: 'Are you looking for a small desk plant sure to spark conversation? Ficus microcarpa “Ginseng” definitely very distinctive look to it. These plants are extremely forgiving, easily tolerating',
      img: "static/images/collection1.png",
      price: 123,
    }
  ],
  true
);

const slider2 = new Slider(
  "slider2",
  [
    {
      title: 'Grafted Ficus Bonsai',
      text: 'Are you looking for a small desk plant sure to spark conversation? Ficus microcarpa “Ginseng” definitely very distinctive look to it. These plants are extremely forgiving, easily tolerating',
      img: "static/images/collection1.png",
      price: 123,
    },
    {
      title: 'Chinese Money Plant',
      text: 'Pilea peperomioides, commonly known as the Chinese money plant, has such a distinctive look with its round coinlike leaves and straight stems – they look gorgeous in short pots like the one pictured.',
      img: "static/images/collection2.png",
      price: 32,
    }
  ]
);
