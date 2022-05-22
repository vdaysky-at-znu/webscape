function registerSidebar(trigger, container) {
  this.trigger = trigger;
  this.container = container;
  $("body").on('click', this.trigger, ()=>{
    $(this.container).toggleClass('open');
    $(".menu-btn").toggleClass('close')
  });
}

registerSidebar('.menu-btn', '.sidebar');
