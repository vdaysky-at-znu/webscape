function open_modal(id, {img, item}) {
  let form = $('#' + id);
  form.removeClass('hidden');
  form.find('.modal-header p').text(item);
  console.log("", form.find('.modal-header .image'), img);
  form.find('.modal-header .image').html(`<img src="${img}">`);

  $('body').addClass('modal-open');
}

function close_modal(id) {
  $('#' + id).addClass('hidden');
  $('body').removeClass('modal-open');
}
