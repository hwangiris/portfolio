// const buttons = document.querySelectorAll('.btn');
// buttons.forEach((button) => {
//   button.onclick = function (e) {
//     let x = e.layerX;
//     let y = e.layerY;
//     let ripple = document.createElement('span');
//     ripple.style.left = `${x}px`;
//     ripple.style.top = `${y}px`;
//     this.appendChild(ripple);
//     setTimeout(function () {
//       ripple.remove();
//     }, 1000); // 1second = 1000ms
//   };
// });

$('.btn-change').on('click', function () {
  const id = $(this).attr('data-id');
  const src = $(this).attr('data-src');
  $(this).removeClass('btn-outlined').addClass('btn-contained');
  $(this).parent().siblings().children().addClass('btn-outlined').removeClass('btn-contained');
  $(`#${id}`).attr('src', src)
});
