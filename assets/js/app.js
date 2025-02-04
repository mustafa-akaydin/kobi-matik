//popup trigger
document.addEventListener('DOMContentLoaded', function () {
  // 3 saniye sonra modalı aç
  setTimeout(function () {
    const modal = new bootstrap.Modal(
      document.getElementById('businessStageModal')
    )
    modal.show()
  }, 3000)
})

window.onscroll = function () {
  var header = document.getElementById('header')
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('border-bottom', 'shadow')
  } else {
    header.classList.remove('border-bottom', 'shadow')
  }
}
