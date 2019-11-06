// import $ from 'jquery'
export default {
  WebShowUniqueForm (ID) {
    console.log(ID)
    $('.normalBg').fadeIn()
    $('#' + ID).addClass('fadeInUp')
    $('body').css('overflow', 'hidden')
  }
}
