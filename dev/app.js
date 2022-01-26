"use strict";

var swiperProekt = new Swiper('.proekt__swiper', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  pagination: {
    el: '.proekt__pagination',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: ".proekt__link"
  }
});
var swiperStaff = new Swiper('.staff__swiper', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  autoHeight: true,
  pagination: {
    el: '.staff__pagination',
    clickable: true
  },
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: ".staff__link"
  }
});
var swiperOffers = new Swiper('.offers__swiper', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: ".offers__link"
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzd2lwZXJQcm9la3QgPSBuZXcgU3dpcGVyKCcucHJvZWt0X19zd2lwZXInLCB7XG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBsb29wOiB0cnVlLFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcucHJvZWt0X19wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDUwMDBcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIucHJvZWt0X19saW5rXCJcbiAgfVxufSk7XG52YXIgc3dpcGVyU3RhZmYgPSBuZXcgU3dpcGVyKCcuc3RhZmZfX3N3aXBlcicsIHtcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxvb3A6IHRydWUsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5zdGFmZl9fcGFnaW5hdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDUwMDBcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuc3RhZmZfX2xpbmtcIlxuICB9XG59KTtcbnZhciBzd2lwZXJPZmZlcnMgPSBuZXcgU3dpcGVyKCcub2ZmZXJzX19zd2lwZXInLCB7XG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBsb29wOiB0cnVlLFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiA1MDAwXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLm9mZmVyc19fbGlua1wiXG4gIH1cbn0pOyJdLCJmaWxlIjoiYXBwLmpzIn0=
