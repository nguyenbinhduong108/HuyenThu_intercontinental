<template>
  <header id="header">
    <a href="#content" id="skip-to-content">Skip to Content (Press Enter)</a>
    <a class="logo" href="/">
      <img src="../../public/assets/86-Photoroom (2) (1).png" alt="InterContinental Hanoi Westlake Logo" width="225"
        height="87" title="InterContinental Hanoi Westlake" class="white-logo"
        style="object-fit: cover; width: 70px;" />

    </a>
    <button class="booking-trigger button" @click="handleShowList">
      Danh sách phòng
    </button>
    <button class="booking-trigger button" @click="handleShowBooking">
      Đặt phòng ngay
    </button>

    <button class="booking-trigger button" @click="handleRegister">
      {{ user.code == 1000 ? user.result?.userName : 'Đăng ký | Đăng nhập' }}
    </button>
    <div id="mobile-navigation" class="scrolling-wrapper" role="dialog" aria-modal="true"
      aria-label="Popup Corporate Menu">
      <div class="main-menu-wrapper">
        <nav class="top-menu" aria-label="Side Top Menu">
          <ul></ul>
        </nav>
        <nav class="main-menu" aria-label="Side Main Menu">
          <ul class="menu level-1">
            <li class="parent">
              <a href="/vn/accommodation">Phòng nghỉ</a>
              <div class="plus">
                <div class="horizontal"></div>
                <div class="vertical"></div>
              </div>
              <ul class="menu level-2 submenu">
                <li><a href="/vn/accommodation/rooms">Phòng nghỉ</a></li>
                <li><a href="/vn/accommodation/suites">Phòng Suite</a></li>
                <li>
                  <a href="/vn/accommodation/residences">Phòng Residence</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/vn/club-intercontinental">Club InterContinental</a>
            </li>
            <li class="parent">
              <a href="/vn/dining">Ẩm thực</a>
              <div class="plus">
                <div class="horizontal"></div>
                <div class="vertical"></div>
              </div>
              <ul class="menu level-2 submenu">
                <li><a href="/vn/dining/sunset-bar">Sunset Bar</a></li>
                <li>
                  <a href="/vn/dining/cafe-du-lac">Nhà hàng Café du Lac</a>
                </li>
                <li>
                  <a href="/vn/dining/milan-restaurant">Nhà hàng Milan</a>
                </li>
                <li>
                  <a href="/vn/dining/saigon-restaurant">Nhà hàng Saigon</a>
                </li>
                <li>
                  <a href="/vn/dining/penfolds-lounge">Penfolds Lounge</a>
                </li>
                <li>
                  <a href="/vn/dining/diplomat-lounge">Diplomat Lounge</a>
                </li>
                <li>
                  <a href="/vn/dining/ihg-dining-program">IHG One Rewards Dining Privileges</a>
                </li>
              </ul>
            </li>
            <li class="parent">
              <a href="/vn/meetings-events">Hội nghị &amp; Sự kiện</a>
              <div class="plus">
                <div class="horizontal"></div>
                <div class="vertical"></div>
              </div>
              <ul class="menu level-2 submenu">
                <li><a href="/vn/meetings-events/rfp">Đăng ký Sự kiện</a></li>
                <li>
                  <a href="/vn/meetings-events/journey-to-tomorrow">Journey To Tomorrow</a>
                </li>
                <li>
                  <a href="/vn/meetings-events/incredible-proposals-package">Gói Cầu Hôn “Say Yes at Sunset”!</a>
                </li>
                <li>
                  <a href="/vn/meetings-events/incredible-first-birthdays-package">Gói Tiệc Sinh Nhật Một Tuổi</a>
                </li>
                <li>
                  <a href="/vn/meetings-events/incredible-longevity-celebrations-package">Gói Tiệc Mừng Thọ</a>
                </li>
              </ul>
            </li>
            <li class="parent">
              <a href="/vn/weddings">Tiệc cưới</a>
              <div class="plus">
                <div class="horizontal"></div>
                <div class="vertical"></div>
              </div>
              <ul class="menu level-2 submenu">
                <li>
                  <a href="/vn/weddings/wedding-enquiry">Đăng ký Tiệc cưới</a>
                </li>
                <li>
                  <a href="/vn/weddings/crystal-package">Gói Crystal</a>
                </li>
                <li><a href="/vn/weddings/pearl-package">Gói Pearl</a></li>
                <li>
                  <a href="/vn/weddings/diamond-package">Gói Diamond</a>
                </li>
              </ul>
            </li>
            <li><a href="/vn/services">Dịch vụ Nghỉ dưỡng</a></li>
            <li><a href="/vn/special-offers">Ưu đãi đặc biệt</a></li>
            <li><a href="/vn/destination">Địa điểm du lịch</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <div id="photos" role="region" aria-roledescription="carousel" aria-label="Top Image Slideshow">
    <div class="slideshow">
      <div class="slideshow-wrapper">
        <figure class="slide">
          <picture>
            <source type="image/webp" media="(max-width: 420px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/420x830/fit/80/a60b7dd5c0b3bc895cebb471fcdfe8a7.webp
              " />
            <source type="image/webp" media="(max-width: 767px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/767x600/fit/80/af6bc0471d195b97bbe6d1b682c5a484.webp
              " />
            <source type="image/webp" media="(max-width: 1280px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/1280x768/fit/80/3379e1cc56efd8b98b833901133bf604.webp
              " />
            <source type="image/webp" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/1920x1080/fit/80/2d25496641e30753045c483a288c0b89.webp
              " />
            <source type="image/jpeg" media="(max-width: 420px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/420x830/fit/80/357f25353d602dd5d1ca38c631a77cb7.jpg
              " />
            <source type="image/jpeg" media="(max-width: 767px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/767x600/fit/80/04d1016e002a9832bdc5eaefd296cf39.jpg
              " />
            <source type="image/jpeg" media="(max-width: 1280px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/1280x768/fit/80/244bd16d7ec53c033d7d0252689722ce.jpg
              " />
            <source type="image/jpeg" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/1920x1080/fit/80/393f8b151ff2281dbaa043b4f529f36d.jpg
              " />
            <img class="slide-image"
              src="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/1920x1080/fit/80/393f8b151ff2281dbaa043b4f529f36d.jpg"
              style="object-position: 50% 50%" alt="Shape" height="1080" width="1920" />
          </picture>
          <video class="video muted vimeo-video-tag video-background"
            src="https://player.vimeo.com/progressive_redirect/download/856698772/rendition/1080p/0821%281%29%20%281080p%29.mp4?loc=external&amp;signature=ca9ee00df1a0ea61ac3dd31072eaca589a4afee208eb7a1afd9f155091c0931e"
            type="video/mp4" autoplay loop muted playsinline></video>
        </figure>
      </div>
    </div>
    <div class="booking-trigger button" @click="handleShowBooking">
      Đặt phòng ngay
    </div>
  </div>
  <article id="booking" tabindex="-1">
    <div class="center-column">
      <form>
        <div class="booking-close-button close"><span></span></div>
        <fieldset>
          <legend>Đặt phòng</legend>
          <div class="column dates">
            <label>Checkin:</label>
            <input type="date" v-model="checkin" @change="selectCheckin" />
            <label>Checkout:</label>
            <input type="date" v-model="checkout" @change="selectCheckout" </div>
            <button @click="handleBooking" class="button" style="width: 100%; margin-top: 20px">
              Kiểm tra tình trạng phòng
            </button>
        </fieldset>
      </form>
    </div>
  </article>
  <!-- <article id="booking-home">
    <div class="center-column">
      <form action="/booking" method="post" target="_blank">
        <fieldset>
          <legend></legend>
          <div class="booking-inputs">
            <div class="column dates">
              <label for="booking-dates-home">Dates:</label>
              <div class="input-column checkin">
                <div class="booking-date" id="booking-checkin-field">
                  Aug 10, 2024 -
                </div>
                <input
                  type="hidden"
                  id="booking-checkin-home"
                  name="checkin"
                  value="08/10/2024"
                />
              </div>
              <div class="input-column checkout">
                <div class="booking-date" id="booking-checkout-field">
                  Aug 12, 2024
                </div>
                <input
                  type="hidden"
                  id="booking-checkout-home"
                  name="checkout"
                  value="08/12/2024"
                />
              </div>
              <button id="dates-trigger">Please Select Dates</button>
              <div id="booking-datepicker-home" class="hasDatepicker">
                <button
                  type="button"
                  class="reset"
                  role="button"
                  aria-pressed="false"
                >
                  Reset
                </button>
                <div
                  class="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi ui-datepicker-multi-2"
                  style="display: block; width: 34em"
                >
                  <div class="ui-datepicker-group ui-datepicker-group-first">
                    <div
                      class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-left"
                    >
                      <a
                        class="ui-datepicker-prev ui-corner-all ui-state-disabled"
                        title="Prev"
                        role="button"
                        aria-pressed="false"
                        aria-disabled="true"
                        ><span class="ui-icon ui-icon-circle-triangle-w"
                          >Prev</span
                        ></a
                      >
                      <div class="ui-datepicker-title">
                        <span class="ui-datepicker-month">August</span
                        >&nbsp;<span class="ui-datepicker-year">2024</span>
                      </div>
                    </div>
                    <table class="ui-datepicker-calendar">
                      <thead>
                        <tr>
                          <th scope="col" class="ui-datepicker-week-end">
                            <span title="Sunday">Su</span>
                          </th>
                          <th scope="col"><span title="Monday">Mo</span></th>
                          <th scope="col"><span title="Tuesday">Tu</span></th>
                          <th scope="col">
                            <span title="Wednesday">We</span>
                          </th>
                          <th scope="col">
                            <span title="Thursday">Th</span>
                          </th>
                          <th scope="col"><span title="Friday">Fr</span></th>
                          <th scope="col" class="ui-datepicker-week-end">
                            <span title="Saturday">Sa</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            class="ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">28</span>
                          </td>
                          <td
                            class="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">29</span>
                          </td>
                          <td
                            class="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">30</span>
                          </td>
                          <td
                            class="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">31</span>
                          </td>
                          <td
                            class="ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">1</span>
                          </td>
                          <td
                            class="ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">2</span>
                          </td>
                          <td
                            class="ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">3</span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">4</span>
                          </td>
                          <td
                            class="ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">5</span>
                          </td>
                          <td
                            class="ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">6</span>
                          </td>
                          <td
                            class="ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">7</span>
                          </td>
                          <td
                            class="ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">8</span>
                          </td>
                          <td
                            class="ui-datepicker-today"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default ui-state-highlight"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Friday, August 9th, 2024"
                              >9</a
                            >
                          </td>
                          <td
                            class="ui-datepicker-week-end ui-datepicker-highlight checkin-date ui-datepicker-current-day"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default ui-state-active"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Saturday, August 10th, 2024"
                              >10</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="ui-datepicker-week-end ui-datepicker-highlight"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Sunday, August 11th, 2024"
                              >11</a
                            >
                          </td>
                          <td
                            class="ui-datepicker-highlight checkout-date"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Monday, August 12th, 2024"
                              >12</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Tuesday, August 13th, 2024"
                              >13</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Wednesday, August 14th, 2024"
                              >14</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Thursday, August 15th, 2024"
                              >15</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Friday, August 16th, 2024"
                              >16</a
                            >
                          </td>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Saturday, August 17th, 2024"
                              >17</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Sunday, August 18th, 2024"
                              >18</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Monday, August 19th, 2024"
                              >19</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Tuesday, August 20th, 2024"
                              >20</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Wednesday, August 21st, 2024"
                              >21</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Thursday, August 22nd, 2024"
                              >22</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Friday, August 23rd, 2024"
                              >23</a
                            >
                          </td>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Saturday, August 24th, 2024"
                              >24</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Sunday, August 25th, 2024"
                              >25</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Monday, August 26th, 2024"
                              >26</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Tuesday, August 27th, 2024"
                              >27</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Wednesday, August 28th, 2024"
                              >28</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Thursday, August 29th, 2024"
                              >29</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Friday, August 30th, 2024"
                              >30</a
                            >
                          </td>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="7"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Saturday, August 31st, 2024"
                              >31</a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="ui-datepicker-group ui-datepicker-group-last">
                    <div
                      class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-right"
                    >
                      <a
                        class="ui-datepicker-next ui-corner-all"
                        data-handler="next"
                        data-event="click"
                        title="Next"
                        role="button"
                        aria-pressed="false"
                        ><span class="ui-icon ui-icon-circle-triangle-e"
                          >Next</span
                        ></a
                      >
                      <div class="ui-datepicker-title">
                        <span class="ui-datepicker-month">September</span
                        >&nbsp;<span class="ui-datepicker-year">2024</span>
                      </div>
                    </div>
                    <table class="ui-datepicker-calendar">
                      <thead>
                        <tr>
                          <th scope="col" class="ui-datepicker-week-end">
                            <span title="Sunday">Su</span>
                          </th>
                          <th scope="col"><span title="Monday">Mo</span></th>
                          <th scope="col"><span title="Tuesday">Tu</span></th>
                          <th scope="col">
                            <span title="Wednesday">We</span>
                          </th>
                          <th scope="col">
                            <span title="Thursday">Th</span>
                          </th>
                          <th scope="col"><span title="Friday">Fr</span></th>
                          <th scope="col" class="ui-datepicker-week-end">
                            <span title="Saturday">Sa</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Sunday, September 1st, 2024"
                              >1</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Monday, September 2nd, 2024"
                              >2</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Tuesday, September 3rd, 2024"
                              >3</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Wednesday, September 4th, 2024"
                              >4</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Thursday, September 5th, 2024"
                              >5</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Friday, September 6th, 2024"
                              >6</a
                            >
                          </td>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Saturday, September 7th, 2024"
                              >7</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Sunday, September 8th, 2024"
                              >8</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Monday, September 9th, 2024"
                              >9</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Tuesday, September 10th, 2024"
                              >10</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Wednesday, September 11th, 2024"
                              >11</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Thursday, September 12th, 2024"
                              >12</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Friday, September 13th, 2024"
                              >13</a
                            >
                          </td>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Saturday, September 14th, 2024"
                              >14</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Sunday, September 15th, 2024"
                              >15</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Monday, September 16th, 2024"
                              >16</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Tuesday, September 17th, 2024"
                              >17</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Wednesday, September 18th, 2024"
                              >18</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Thursday, September 19th, 2024"
                              >19</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Friday, September 20th, 2024"
                              >20</a
                            >
                          </td>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Saturday, September 21st, 2024"
                              >21</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Sunday, September 22nd, 2024"
                              >22</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Monday, September 23rd, 2024"
                              >23</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Tuesday, September 24th, 2024"
                              >24</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Wednesday, September 25th, 2024"
                              >25</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Thursday, September 26th, 2024"
                              >26</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Friday, September 27th, 2024"
                              >27</a
                            >
                          </td>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Saturday, September 28th, 2024"
                              >28</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="ui-datepicker-week-end"
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Sunday, September 29th, 2024"
                              >29</a
                            >
                          </td>
                          <td
                            class=" "
                            data-handler="selectDay"
                            data-event="click"
                            data-month="8"
                            data-year="2024"
                          >
                            <a
                              class="ui-state-default"
                              href="#"
                              role="button"
                              aria-pressed="false"
                              aria-label="Check In, Monday, September 30th, 2024"
                              >30</a
                            >
                          </td>
                          <td
                            class="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">1</span>
                          </td>
                          <td
                            class="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">2</span>
                          </td>
                          <td
                            class="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">3</span>
                          </td>
                          <td
                            class="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">4</span>
                          </td>
                          <td
                            class="ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
                          >
                            <span class="ui-state-default">5</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="ui-datepicker-row-break"></div>
                </div>
              </div>
            </div>
            <div class="column options">
              <label for="booking-home options">Rooms &amp; Guests</label>
              <div class="select-wrapper fake-select">
                <button
                  type="button"
                  class="booking-element booking-options"
                  id="horizontal-booking-options"
                >
                  <span class="rooms-selected"
                    ><span class="number">1</span> Phòng nghỉ</span
                  >
                  <span class="adults-selected"
                    >, <span class="number">1</span> Người lớn</span
                  >
                  <span class="children-selected"
                    >, <span class="number">0</span> Trẻ em</span
                  >
                </button>
              </div>
              <button id="guests-trigger">
                Please Select Additional Information
              </button>
              <div class="options-dropdown">
                <div
                  class="option rooms-selector"
                  data-controls="rooms-selected"
                  data-minimum="1"
                  data-maximum="5"
                >
                  <span><span class="number">1</span> Phòng nghỉ</span>
                  <button type="button" class="minus">Giảm</button>
                  <button type="button" class="plus">Tăng</button>
                  <input type="hidden" name="rooms" value="1" />
                </div>
                <div
                  class="option adults-selector"
                  data-controls="adults-selected"
                  data-minimum="1"
                  data-maximum="5"
                >
                  <span><span class="number">1</span> Người lớn</span>
                  <button type="button" class="minus">Giảm</button>
                  <button type="button" class="plus">Tăng</button>
                  <input type="hidden" name="adults" value="1" />
                </div>
                <div
                  class="option children-selector"
                  data-controls="children-selected"
                  data-minimum="0"
                  data-maximum="5"
                >
                  <span><span class="number">0</span> Trẻ em</span>
                  <button type="button" class="minus">Giảm</button>
                  <button type="button" class="plus">Tăng</button>
                  <input type="hidden" name="children" value="0" />
                </div>
              </div>
            </div>
            <div class="column controls">
              <input
                type="submit"
                value="Kiểm tra tình trạng phòng"
                id="home-booking-submit"
                class="button"
                data-dtm-event="check-availability"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </article> -->

  //
  <section id="content" class="fade-on-scroll visible" role="main" tabindex="-1">
    <div id="main-content" class="center-column has-thumb">
      <div class="home-wrapper">
        <div class="home-thumbnail">
          <picture>
            <source type="image/webp" media="(max-width: 420px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e37821208ab.JPG/400x200/fit/80/728fc6b645c8bda4661cc993ed4faef0.webp
              " />
            <source type="image/webp" media="(max-width: 767px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e37821208ab.JPG/750x400/fit/80/ff62097d346868ecbbacbd6e62601118.webp
              " />
            <source type="image/webp" media="(max-width: 1280px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e37821208ab.JPG/700x1100/fit/80/c718db9cbf4f4e65af575ab7482c0852.webp
              " />
            <source type="image/webp" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e37821208ab.JPG/800x1200/fit/80/96f79d0c12e19b211075023beb706b01.webp
              " />
            <source type="image/jpeg" media="(max-width: 420px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e37821208ab.JPG/400x200/fit/80/bb0c65abed9b5f90bc5172be7b47e818.jpg
              " />
            <source type="image/jpeg" media="(max-width: 767px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e37821208ab.JPG/750x400/fit/80/adf26866faa7b03ef230e040a3555f5f.jpg
              " />
            <source type="image/jpeg" media="(max-width: 1280px)" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e37821208ab.JPG/700x1100/fit/80/f9ae149104f21d66b5c5ae1086a5c08f.jpg
              " />
            <source type="image/jpeg" srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e37821208ab.JPG/800x1200/fit/80/c76804088e07eec0e36b86779534a340.jpg
              " />
            <img class="object-fit lazy-load"
              data-src="https://d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/imagepool/63e37821208ab.JPG"
              alt="InterContinental Hanoi Westlake Main-content Section Image 520"
              src="https://d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/imagepool/63e37821208ab.JPG"
              data-loaded="true" />
          </picture>
        </div>
        <div class="home-content-wrapper">
          <div class="page-content">
            <h1>KHÁCH SẠN ĐỘC ĐÁO NỔI TRÊN MẶT HỒ</h1>
            <p style="text-align: justify">
              Tọa lạc trên mặt nước hồ Tây yên bình và gần di tích chùa Kim Liên
              với lịch sử hơn 800 năm tuổi, Huyền Thu Hanoi Westlake hứa
              hẹn sẽ mang lại một trải nghiệm nghỉ dưỡng vô cùng bình yên giữa
              lòng thành phố sôi động, tấp nập.&nbsp;<br />
              Huyền Thu Hanoi Westlake là nơi các du khách sẽ được tận
              hưởng không gian nghỉ dưỡng sang trọng cùng những đặc quyền độc
              đáo chỉ dành riêng cho quý khách tại Club Huyền Thu. Cùng
              thưởng thức ẩm thực thượng hạng và ghi lại những khoảnh khắc hoàng
              hôn tuyệt đẹp tại quán bar nổi hoàn toàn trên mặt nước, duy nhất
              tại Hà Nội - Sunset Bar. Sở hữu vị trí lý tưởng, chỉ cách trung
              tâm thành phố vài phút, khách sạn Huyền Thu Hanoi Westlake
              vẫn giữ được vẻ bình yên hiếm có giữa nhịp sống nhộn nhịp hối hả
              của đô thị.&nbsp;
            </p>
          </div>
        </div>
      </div>
    </div>
    <section class="acm-block section-blocks fade-on-scroll visible">
      <div class="center-column main-heading-wrapper">
        <div class="page-content">
          <h2 class="h1-like"><span>Ẩm thực</span></h2>
        </div>
        <div class="section-block-list">
          <article class="item-block">
            <div class="thumbnail-wrap">
              <div class="thumbnail lazy-load"
                data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e380bb1b8b6.jpg/620x415/fit;c:895,1283,5503,4366/80/07ecdbd20d1af5f1e10a8fe9204d2c90.jpg"
                data-loaded="true" style="
                  background-image: url('//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e380bb1b8b6.jpg/620x415/fit;c:895,1283,5503,4366/80/07ecdbd20d1af5f1e10a8fe9204d2c90.jpg');
                "></div>
            </div>
            <div class="section-block-content page-content">
              <h3 class="sb-title">Sunset Bar</h3>
              <p class="sb-descr">
                Sunset Bar - thiên đường của cocktail. Tại đây, quý khách sẽ tìm
                thấy một trải nghiệm độc đáo, khác biệt hoàn toàn với bất kì nơi
                đâu tại Hà Nội. Nối giữa 03 đảo hồ và sở hữu cảnh quan thơ mộng
                của hồ Tây, Sunset Bar là một điểm đến lý tưởng cho những buổi
                hẹn hò lãng mạn - tản bộ trên cầu và thưởng thức những ly
                cocktail thượng hạng hay dịch vụ trà chiều đẳng cấp sẽ là những
                trải nghiệm khó quên.
              </p>
              <!-- <a href="/vn/dining/sunset-bar" class="view-link text-link">
                Tìm hiểu thêm
              </a> -->
            </div>
          </article>
          <article class="item-block">
            <div class="thumbnail-wrap">
              <div class="thumbnail lazy-load"
                data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e462e498a65.jpg/620x415/fit;c:440,875,5417,4205/80/c073dd0cfd27ea62e15cfad5e7bcc155.jpg"
                data-loaded="true" style="
                  background-image: url('//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e462e498a65.jpg/620x415/fit;c:440,875,5417,4205/80/c073dd0cfd27ea62e15cfad5e7bcc155.jpg');
                "></div>
            </div>
            <div class="section-block-content page-content">
              <h3 class="sb-title">Nhà hàng Café du Lac</h3>
              <p class="sb-descr">
                Lấy cảm hứng từ văn hoá Pháp, nhà hàng Café du Lac mang hơi thở
                của một nhà hàng Pháp giữa lòng thủ đô Hà Nội. Từ thiết kế cổ
                điển trong từng chi tiết kiến trúc đến vị trí lý tưởng trên mặt
                nước hồ Tây yên bình, Huyền Thu Hanoi Westlake luôn mong
                muốn dành tặng quý khách hàng một trải nghiệm đẳng cấp nhưng vô
                cùng thân thuộc và gần gũi.
              </p>
              <!-- <a href="/vn/dining/cafe-du-lac" class="view-link text-link">
                Tìm hiểu thêm
              </a> -->
            </div>
          </article>
          <article class="item-block">
            <div class="thumbnail-wrap">
              <div class="thumbnail lazy-load"
                data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e613e1798f5.jpg/620x415/fit/80/f5e909fdb54d3c9558b3a25adc2d9f48.jpg"
                data-loaded="true" style="
                  background-image: url('//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e613e1798f5.jpg/620x415/fit/80/f5e909fdb54d3c9558b3a25adc2d9f48.jpg');
                "></div>
            </div>
            <div class="section-block-content page-content">
              <h3 class="sb-title">Nhà hàng Milan</h3>
              <p class="sb-descr">
                Nhà hàng Milan sẽ đánh thức mọi giác quan của quý khách, mang
                đến những hương vị ấn tượng nhất của ẩm thực Ý truyền thống.
                Được đặt tại tầng hai của tòa nhà chính khách sạn, nhà hàng là
                một sự pha trộn giữa thiết kế châu Âu hiện đại và Á Đông độc
                đáo, một bức tranh với những gam màu rực rỡ.
              </p>
              <!-- <a href="/vn/dining/milan-restaurant" class="view-link text-link">
                Tìm hiểu thêm
              </a> -->
            </div>
          </article>
          <article class="item-block">
            <div class="thumbnail-wrap">
              <div class="thumbnail lazy-load"
                data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e60df068fe7.jpg/620x415/fit/80/3dba5a1b176a7c69e3d794ae8af70728.jpg"
                data-loaded="true" style="
                  background-image: url('//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e60df068fe7.jpg/620x415/fit/80/3dba5a1b176a7c69e3d794ae8af70728.jpg');
                "></div>
            </div>
            <div class="section-block-content page-content">
              <h3 class="sb-title">Nhà hàng Sài Gòn</h3>
              <p class="sb-descr">
                Với thiết kế thuần Việt, gian bếp bằng kính độc đáo với tầm nhìn
                toàn cảnh nhà hàng sẽ tạo cơ hội cho quý khách có thể khiến quý
                khách quan sát được hết các màn biểu diễn tài tình của các đầu
                bếp ưu tú, nhà hàng Saigon mang tới những món ăn truyền thống
                Việt Nam đa dạng, phong phú và đậm đà bản sắc.
              </p>
              <!-- <a
                href="/vn/dining/saigon-restaurant"
                class="view-link text-link"
              >
                Tìm hiểu thêm
              </a> -->
            </div>
          </article>
          <article class="item-block">
            <div class="thumbnail-wrap">
              <div class="thumbnail lazy-load"
                data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e6142f685e7.jpg/620x415/fit/80/cddd05b2a6c0301fb2ecea0652cbf614.jpg"
                data-loaded="true" style="
                  background-image: url('//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e6142f685e7.jpg/620x415/fit/80/cddd05b2a6c0301fb2ecea0652cbf614.jpg');
                "></div>
            </div>
            <div class="section-block-content page-content">
              <h3 class="sb-title">Diplomat Lounge</h3>
              <p class="sb-descr">
                Diplomat Lounge là một sự lựa chọn hoàn hảo cho những buổi trà
                chiều cùng bạn bè, đồng nghiệp và người thân. Dành thời gian thư
                giãn và thưởng thức những tách trà thượng hạng, cà phê, cùng với
                những món ăn nhẹ, hay kết thúc một ngày dài với ly rượu vang đỏ
                hoặc cognac vào buổi tối.
              </p>
              <!-- <a href="/vn/dining/diplomat-lounge" class="view-link text-link">
                Tìm hiểu thêm
              </a> -->
            </div>
          </article>
          <article class="item-block">
            <div class="thumbnail-wrap">
              <div class="thumbnail lazy-load"
                data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e9b9d1ba6c6.jpg/620x415/fit/80/43c61744435e0d724134b1fbc1dfc096.jpg"
                data-loaded="true" style="
                  background-image: url('//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/63e9b9d1ba6c6.jpg/620x415/fit/80/43c61744435e0d724134b1fbc1dfc096.jpg');
                "></div>
            </div>
            <div class="section-block-content page-content">
              <h3 class="sb-title">Penfolds Lounge</h3>
              <p class="sb-descr">
                Đến với Huyền Thu Hanoi Westlake, mọi mong muốn của quý
                khách hàng đều được đáp ứng. Trong một không gian ấm cúng, sang
                trọng, tại Penfolds Lounge, cùng tận hưởng bữa tối thân mật với
                20 người, phù hợp cho những bữa tiệc cá nhân hay những buổi gặp
                gỡ trong công việc.
              </p>
              <!-- <a href="/vn/dining/penfolds-lounge" class="view-link text-link">
                Tìm hiểu thêm
              </a> -->
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="acm-block featured-promos fade-on-scroll visible">
      <div class="center-column main-heading-wrapper">
        <div class="acm-block-headings page-content">
          <h2 class="h1-like"><span>Ưu đãi Đặc biệt</span></h2>
        </div>
        <div class="featured-promos-list">
          <div class="slideshow swiper-container-horizontal">
            <div class="slideshow-wrapper swiper-wrapper" tabindex="-1" style="
                transition-duration: 0ms;
                transform: translate3d(-2308.33px, 0px, 0px);
              ">
              <article class="item-slide swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index="1" style="width: 436.667px; margin-right: 25px" aria-hidden="true">
                <div class="thumbnail-wrap">
                  <div class="thumbnail lazy-load"
                    data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/66ab3c6f200ea.jpeg/800x1000/fit/80/5f9d3ccecfc1a54f32807415c3e61242.jpg">
                  </div>
                </div>
                <div class="featured-promo-content page-content">
                  <h3 class="fp-title">
                    ‘Meet the Masters’ Workshop: Chìa khóa Hôn nhân Hạnh phúc
                  </h3>
                  <p class="fp-descr">
                    Đắm chìm trong những câu chuyện về mùi hương và sắc màu thần
                    kỳ chúng mang lại trong đời sống hôn nhân, hay cùng nhau
                    sáng tạo hương thơm đặc trưng cho riêng hai người. Bạn đã
                    sẵn sàng mang giấc mơ về một câu chuyện tình yêu trong cổ
                    tích thành hiện thực?
                  </p>
                  <!-- <a
                    href="https://hanoi.intercontinental.com/vn/special-offers/meet-the-masters-workshop"
                    class="view-link text-link"
                    target="_blank"
                    tabindex="-1"
                    >Tìm hiểu thêm</a
                  > -->
                </div>
              </article>
              <article class="item-slide swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index="2" style="width: 436.667px; margin-right: 25px" aria-hidden="true">
                <div class="thumbnail-wrap">
                  <div class="thumbnail lazy-load"
                    data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/66ab39d44f3c3.jpeg/800x1000/fit/80/9624fe89be84ac73254555ef9e44aacf.jpg">
                  </div>
                </div>
                <div class="featured-promo-content page-content">
                  <h3 class="fp-title">Thực đơn đặc biệt Tháng Tám - Cốm</h3>
                  <p class="fp-descr">
                    Từ Chả cốm thơm lừng ăn cùng bún tươi và nước chấm chua ngọt
                    đến Tôm Nha Trang tẩm Cốm chiên giòn độc đáo, bạn sẽ không
                    muốn bỏ lỡ tinh hoa ẩm thực ngày thu trứ danh của người Hà
                    Nội!
                  </p>
                  <!-- <a
                    href="https://hanoi.intercontinental.com/vn/special-offers/green-rice-specialities"
                    class="view-link text-link"
                    target="_blank"
                    tabindex="-1"
                    >Tìm hiểu thêm</a
                  > -->
                </div>
              </article>
              <article class="item-slide swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                data-swiper-slide-index="3" style="width: 436.667px; margin-right: 25px" aria-hidden="true">
                <div class="thumbnail-wrap">
                  <div class="thumbnail lazy-load"
                    data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64523763861b2.jpg/800x1000/fit;c:409,0,1149,1281/80/c3ec9256220216b6ad918d415a22bed5.jpg">
                  </div>
                </div>
                <div class="featured-promo-content page-content">
                  <h3 class="fp-title">Gói nghỉ dưỡng Je T’aime</h3>
                  <p class="fp-descr">
                    Bạn đang tìm kiếm một kỳ nghỉ hoàn hảo dành tặng “nửa yêu
                    thương” của mình? Đừng bỏ lỡ gói nghỉ dưỡng Je T'aime tại
                    Huyền Thu Hanoi Westlake!
                  </p>
                  <!-- <a
                    href="https://hanoi.intercontinental.com/vn/special-offers/jetaimepackage"
                    class="view-link text-link"
                    target="_blank"
                    tabindex="-1"
                    >Tìm hiểu thêm</a
                  > -->
                </div>
              </article>
              <article class="item-slide swiper-slide" data-swiper-slide-index="0"
                style="width: 436.667px; margin-right: 25px" aria-hidden="true">
                <div class="thumbnail-wrap">
                  <div class="thumbnail lazy-load"
                    data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/6682616d5f5a2.jpg/800x1000/fit;c:636,0,1794,2000/80/d9c35b0107370171cef696cadedaea9b.jpg">
                  </div>
                </div>
                <div class="featured-promo-content page-content">
                  <h3 class="fp-title">
                    Bộ sưu tập Bánh Trung Thu 2024 - Thiên Nguyệt Hoà Âm
                  </h3>
                  <p class="fp-descr">
                    Thiên Nguyệt Hòa Âm - Thức quà truyền thống mang hình ảnh
                    hòa quyện giữa những nét đẹp thiên nhiên, ẩn chứa bao giá
                    trị văn hóa sâu sắc và lời chúc ý nghĩa cho một mùa Trung
                    thu vẹn tròn.
                  </p>
                  <a href="https://hanoi.intercontinental.com/vn/special-offers/mooncake-collection-2024"
                    class="view-link text-link" target="_blank" tabindex="-1">Tìm hiểu thêm</a>
                </div>
              </article>
              <article class="item-slide swiper-slide swiper-slide-prev" data-swiper-slide-index="1"
                style="width: 436.667px; margin-right: 25px" aria-hidden="true">
                <div class="thumbnail-wrap">
                  <div class="thumbnail lazy-load"
                    data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/66ab3c6f200ea.jpeg/800x1000/fit/80/5f9d3ccecfc1a54f32807415c3e61242.jpg">
                  </div>
                </div>
                <div class="featured-promo-content page-content">
                  <h3 class="fp-title">
                    ‘Meet the Masters’ Workshop: Chìa khóa Hôn nhân Hạnh phúc
                  </h3>
                  <p class="fp-descr">
                    Đắm chìm trong những câu chuyện về mùi hương và sắc màu thần
                    kỳ chúng mang lại trong đời sống hôn nhân, hay cùng nhau
                    sáng tạo hương thơm đặc trưng cho riêng hai người. Bạn đã
                    sẵn sàng mang giấc mơ về một câu chuyện tình yêu trong cổ
                    tích thành hiện thực?
                  </p>
                  <!-- <a
                    href="https://hanoi.intercontinental.com/vn/special-offers/meet-the-masters-workshop"
                    class="view-link text-link"
                    target="_blank"
                    tabindex="-1"
                    >Tìm hiểu thêm</a
                  > -->
                </div>
              </article>
              <article class="item-slide swiper-slide swiper-slide-active" data-swiper-slide-index="2"
                style="width: 436.667px; margin-right: 25px" aria-hidden="false">
                <div class="thumbnail-wrap">
                  <div class="thumbnail lazy-load"
                    data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/66ab39d44f3c3.jpeg/800x1000/fit/80/9624fe89be84ac73254555ef9e44aacf.jpg">
                  </div>
                </div>
                <div class="featured-promo-content page-content">
                  <h3 class="fp-title">Thực đơn đặc biệt Tháng Tám - Cốm</h3>
                  <p class="fp-descr">
                    Từ Chả cốm thơm lừng ăn cùng bún tươi và nước chấm chua ngọt
                    đến Tôm Nha Trang tẩm Cốm chiên giòn độc đáo, bạn sẽ không
                    muốn bỏ lỡ tinh hoa ẩm thực ngày thu trứ danh của người Hà
                    Nội!
                  </p>
                  <!-- <a
                    href="https://hanoi.intercontinental.com/vn/special-offers/green-rice-specialities"
                    class="view-link text-link"
                    target="_blank"
                    >Tìm hiểu thêm</a
                  > -->
                </div>
              </article>
              <article class="item-slide swiper-slide swiper-slide-next" data-swiper-slide-index="3"
                style="width: 436.667px; margin-right: 25px" aria-hidden="true">
                <div class="thumbnail-wrap">
                  <div class="thumbnail lazy-load"
                    data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64523763861b2.jpg/800x1000/fit;c:409,0,1149,1281/80/c3ec9256220216b6ad918d415a22bed5.jpg"
                    data-loaded="true" style="
                      background-image: url('//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64523763861b2.jpg/800x1000/fit;c:409,0,1149,1281/80/c3ec9256220216b6ad918d415a22bed5.jpg');
                    "></div>
                </div>
                <div class="featured-promo-content page-content">
                  <h3 class="fp-title">Gói nghỉ dưỡng Je T’aime</h3>
                  <p class="fp-descr">
                    Bạn đang tìm kiếm một kỳ nghỉ hoàn hảo dành tặng “nửa yêu
                    thương” của mình? Đừng bỏ lỡ gói nghỉ dưỡng Je T'aime tại
                    Huyền Thu Hanoi Westlake!
                  </p>
                  <!-- <a
                    href="https://hanoi.intercontinental.com/vn/special-offers/jetaimepackage"
                    class="view-link text-link"
                    target="_blank"
                    >Tìm hiểu thêm</a
                  > -->
                </div>
              </article>
              <article class="item-slide swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0"
                style="width: 436.667px; margin-right: 25px" aria-hidden="true">
                <div class="thumbnail-wrap">
                  <div class="thumbnail lazy-load"
                    data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/6682616d5f5a2.jpg/800x1000/fit;c:636,0,1794,2000/80/d9c35b0107370171cef696cadedaea9b.jpg"
                    data-loaded="true" style="
                      background-image: url('//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/6682616d5f5a2.jpg/800x1000/fit;c:636,0,1794,2000/80/d9c35b0107370171cef696cadedaea9b.jpg');
                    "></div>
                </div>
                <div class="featured-promo-content page-content">
                  <h3 class="fp-title">
                    Bộ sưu tập Bánh Trung Thu 2024 - Thiên Nguyệt Hoà Âm
                  </h3>
                  <p class="fp-descr">
                    Thiên Nguyệt Hòa Âm - Thức quà truyền thống mang hình ảnh
                    hòa quyện giữa những nét đẹp thiên nhiên, ẩn chứa bao giá
                    trị văn hóa sâu sắc và lời chúc ý nghĩa cho một mùa Trung
                    thu vẹn tròn.
                  </p>
                  <!-- <a
                    href="https://hanoi.intercontinental.com/vn/special-offers/mooncake-collection-2024"
                    class="view-link text-link"
                    target="_blank"
                    >Tìm hiểu thêm</a
                  > -->
                </div>
              </article>
              <article class="item-slide swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index="1" style="width: 436.667px; margin-right: 25px" aria-hidden="true">
                <div class="thumbnail-wrap">
                  <div class="thumbnail lazy-load"
                    data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/66ab3c6f200ea.jpeg/800x1000/fit/80/5f9d3ccecfc1a54f32807415c3e61242.jpg"
                    data-loaded="true" style="
                      background-image: url('//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/66ab3c6f200ea.jpeg/800x1000/fit/80/5f9d3ccecfc1a54f32807415c3e61242.jpg');
                    "></div>
                </div>
                <div class="featured-promo-content page-content">
                  <h3 class="fp-title">
                    ‘Meet the Masters’ Workshop: Chìa khóa Hôn nhân Hạnh phúc
                  </h3>
                  <p class="fp-descr">
                    Đắm chìm trong những câu chuyện về mùi hương và sắc màu thần
                    kỳ chúng mang lại trong đời sống hôn nhân, hay cùng nhau
                    sáng tạo hương thơm đặc trưng cho riêng hai người. Bạn đã
                    sẵn sàng mang giấc mơ về một câu chuyện tình yêu trong cổ
                    tích thành hiện thực?
                  </p>
                  <!-- <a
                    href="https://hanoi.intercontinental.com/vn/special-offers/meet-the-masters-workshop"
                    class="view-link text-link"
                    target="_blank"
                    tabindex="-1"
                    >Tìm hiểu thêm</a
                  > -->
                </div>
              </article>
              <article class="item-slide swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index="2" style="width: 436.667px; margin-right: 25px" aria-hidden="true">
                <div class="thumbnail-wrap">
                  <div class="thumbnail lazy-load"
                    data-background-image="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/66ab39d44f3c3.jpeg/800x1000/fit/80/9624fe89be84ac73254555ef9e44aacf.jpg"
                    data-loaded="true" style="
                      background-image: url('//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/66ab39d44f3c3.jpeg/800x1000/fit/80/9624fe89be84ac73254555ef9e44aacf.jpg');
                    "></div>
                </div>
                <div class="featured-promo-content page-content">
                  <h3 class="fp-title">Thực đơn đặc biệt Tháng Tám - Cốm</h3>
                  <p class="fp-descr">
                    Từ Chả cốm thơm lừng ăn cùng bún tươi và nước chấm chua ngọt
                    đến Tôm Nha Trang tẩm Cốm chiên giòn độc đáo, bạn sẽ không
                    muốn bỏ lỡ tinh hoa ẩm thực ngày thu trứ danh của người Hà
                    Nội!
                  </p>
                  <!-- <a
                    href="https://hanoi.intercontinental.com/vn/special-offers/green-rice-specialities"
                    class="view-link text-link"
                    target="_blank"
                    tabindex="-1"
                    >Tìm hiểu thêm</a
                  > -->
                </div>
              </article>
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </div>
        </div>
        <!-- <div class="featured-promos-button-wrapper">
          <a href="/booking" class="button"> Xem thêm Ưu đãi </a>
        </div> -->
      </div>
    </section>
  </section>
  //

  <footer id="footer">
    <div class="center-column">
      <nav id="footer-menu" class="footer-menu">
        <ul>
          <li><a href="/vn/contact-us">Liên hệ chúng tôi</a></li>
          <li>
            <a href="https://www.ihg.com/content/us/en/customer-care/privacy-and-cookie-center" target="_blank">Bảo mật
              và Điều khoản</a>
          </li>
          <li>
            <a href="https://www.tripadvisor.com.sg/Hotel_Review-g293924-d815139-Reviews-InterContinental_Hanoi_Westlake-Hanoi.html"
              target="_blank">Đánh giá từ Khách hàng</a>
          </li>
          <li><a href="/vn/owner-information">Thông tin Chủ sở hửu</a></li>
          <li>
            <a href="/vn/personal-data-statement">Chính sách bảo mật thông tin</a>
          </li>
          <li>
            <a href="https://www.ihg.com/intercontinental/hotels/us/en/reservation"
              target="_blank">InterContinental.com</a>
          </li>
        </ul>
      </nav>
      <div class="footer-flex">
        <div class="footer-block col-1">
          <a class="logo-icon" href="/" title="InterContinental Hanoi Westlake">
            <img class="lazy-load" data-src="../../public/assets/logo-dark.svg" width="238" height="92"
              alt="InterContinental Hanoi Westlake" src="../../public/assets/logo-dark.svg" data-loaded="true" /></a>
          <div id="IWSfrContainer" style="font-family: Arial, Helvetica, sans-serif"></div>
          <small class="copyright">© Copyright 2024. All rights reserved. Huyền Thu Hanoi
            Westlake</small>
        </div>
        <div class="footer-block col-2">
          <ul class="socials">
            <li>
              <a class="facebook" href="https://www.facebook.com/intercontinentalhanoiwestlake" target="_blank">
                facebook
                <svg width="178px" height="60px">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a class="twitter" href="https://twitter.com/ichanoiwestlake" target="_blank">
                twitter
                <svg width="178px" height="60px">
                  <use xlink:href="#twitter"></use>
                </svg>
              </a>
            </li>
            <li>
              <a class="instagram" href="http://instagram.com/interconhanoiwestlake" target="_blank">
                instagram
                <svg width="178px" height="60px">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a class="linkedin" href="https://www.linkedin.com/company/intercontinental-hanoi-westlake"
                target="_blank">
                linkedin
                <svg width="178px" height="60px">
                  <use xlink:href="#linkedin"></use>
                </svg>
              </a>
            </li>
            <li>
              <a class="youtube" href="https://www.youtube.com/channel/UCJ6JdsM9pmcPrzigHC7mfYg" target="_blank">
                youtube
                <svg width="178px" height="60px">
                  <use xlink:href="#youtube"></use>
                </svg>
              </a>
            </li>
            <li>
              <a class="tripadvisor"
                href="https://www.tripadvisor.com/Hotel_Review-g293924-d815139-Reviews-InterContinental_Hanoi_Westlake-Hanoi.html"
                target="_blank">
                tripadvisor
                <svg width="178px" height="60px">
                  <use xlink:href="#tripadvisor"></use>
                </svg>
              </a>
            </li>
          </ul>
          <article id="footer-contacts">
            <p class="footer-address">
              <svg>
                <use xlink:href="#pointer"></use>
              </svg>
              <span>5 Tu Hoa street, Tay Ho district, Vietnam</span>
            </p>
            <p class="footer-phone">
              <svg>
                <use xlink:href="#phone"></use>
              </svg>
              <span>
                Reserve by Phone:
                <a href="tel:+84-24-6270-8888">+84 24 6270 8888</a>
              </span>
            </p>
            <p class="footer-email">
              <svg>
                <use xlink:href="#email"></use>
              </svg>
              <span>
                <a href="mailto:res.hanoi@ihg.com">res.hanoi@ihg.com</a>
              </span>
            </p>
          </article>
          <nav id="footer-additional-menu" class="footer-menu">
            <ul></ul>
          </nav>
        </div>
        <div class="footer-block col-3">
          <div>
            <a style="width: 30%; display: inline-block"
              href="https://www.ihg.com/content/us/en/customer-care/lowest-internet-rate-terms-conditions"
              target="_blank"><img class="lazy-load" style="height: 50px; width: auto; margin: 20px auto"
                data-src="../../public/assets/bpg.png" width="238" height="92" alt="InterContinental Hanoi Westlake"
                src="../../public/assets/bpg.png" data-loaded="true" /></a>
            <a href="https://www.ihg.com/intercontinental/content/gb/en/loyalty"
              style="width: 30%; margin-left: 10%; display: inline-block" target="_blank"><img class="lazy-load"
                style="height: 50px; width: auto; margin: 20px auto" data-src="../../public/assets/ambassador.png"
                width="238" height="92" alt="InterContinental Hanoi Westlake" src="../../public/assets/ambassador.png"
                data-loaded="true" /></a>
            <a href="https://www.ihg.com/onerewards/content/gb/en/home" target="_blank"
              style="width: 60%; display: inline-block"><img class="lazy-load"
                style="height: 50px; width: auto; margin: 20px auto" data-src="../../public/assets/ihglogo.png"
                width="238" height="92" alt="InterContinental Hanoi Westlake" src="../../public/assets/ihglogo.png"
                data-loaded="true" /></a>
          </div>
          <div class="footer-phone">
            <p style="font-size: calc(0.44118vw + 14.58824px)">
              Book Online or Call
            </p>
            <div style="
                display: flex;
                flex-direction: row;
                align-content: center;
                margin: auto;
                flex-wrap: wrap;
                margin-bottom: 25px;
              ">
              <span> <a href="tel:+1-888-424-6835">+1 888 424 6835</a> </span>
            </div>
          </div>
          <article id="newsletter"></article>
        </div>
      </div>
    </div>
    <div class="white-bg">
      <div class="center-column">
        <div id="footer-logos-small">
          <a href="https://www.ihg.com/onerewards" target="_blank">
            <img class="lazy-load" data-src="../../public/assets/footer-logos.png" width="1260" height="268"
              alt="Footer Logos" src="../../public/assets/footer-logos.png" data-loaded="true" />
          </a>
        </div>
      </div>
    </div>
  </footer>

  <div class="wrapper open" v-if="isShowDialog" style="z-index: 100;">
    <div class="overlay"></div>
    <div class="dialog" role="dialog" aria-labelledby="title" aria-describedby="content">
      <button class="close" @click="closeDialog">✖️</button>
      <h1 style="text-align: center; font-size: 36px; font-weight: 700;">Thông báo</h1>
      <div class="content" style="text-align: center;">
        <p>Bạn chưa đăng nhập vào hệ thống</p>
      </div>
      <div style="text-align: end;">
        <button @click="handleRegister">Đăng nhập</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import axios from "axios";
import { onBeforeMount, onMounted, ref } from "vue";
import { useDatesStore } from '@/stores/dates'
import { useUserStore } from '@/stores/user'

const useUser = useUserStore();

const user = ref<any>({})

const isShowDialog = ref<boolean>(false);

onBeforeMount(() => {
  user.value = useUser.user;
  // console.log(125371253, user.value)
  // console.log(11111111111111,user.value);
})

const checkin = ref<Date>(new Date);
const checkout = ref<Date>(new Date);

const handleShowBooking = () => {
  const showBooking = document.querySelector<HTMLElement>("#booking");

  if (showBooking && showBooking.style.left != "0%") {
    showBooking.style.left = "0%";
  } else if (showBooking && showBooking.style.left == "0%") {
    showBooking.style.left = "-101%";
  } else {
    throw new Error("Không tìm thấy element");
  }
};

const closeDialog = () => {
  isShowDialog.value = false;
}

const handleShowList = () => {
  if (!user) {
    isShowDialog.value = true;
    return;
  }
  router.push({ name: "list" });
}

const useDates = useDatesStore();
const selectCheckin = () => {
  console.log(checkin.value)

  useDates.getCheckIn(checkin.value)
}

const selectCheckout = () => {
  console.log(checkout.value)
  useDates.getCheckOut(checkout.value)
}

import { useRoomStore } from "@/stores/rooms";

const useRoom = useRoomStore()

const handleBooking = async () => {
  router.push({ name: "booking" });
};

const handleRegister = () => {
  router.push({ name: "register" });
}

const getRoom = async () => {
  return await axios.get(`http://localhost:8081/hotelmaster/room/available-in-range?startDate=${checkin.value}&endDate=${checkout.value}`);
}
</script>

<style scoped>
@import url("../css/home/main.css");
@import url("../css/home/style.css");

* {
  font-family: "ITC New Baskerville"
}

.dialog {
  background: #ffffff;
  max-width: 600px;
  padding: 1rem;
  position: fixed;
  /* max-height: 200px; */
  overflow: hidden;

}

.dialog button:not(.close) {
  padding: 15px;
  background-color: #b38b7a;
  font-weight: 600;
  color: #fff;
  border: unset;
  outline: unset;
  border-radius: 8px;
  min-width: 150px;
  min-height: 45px;
  cursor: pointer;
  transition: 350ms ease-in-out;
}

.dialog button:not(.close):hover {
  color: #fff;
  background: #44443C;
}

.wrapper.open {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  visibility: visible;
}

.wrapper {
  opacity: 0;
  transition: visibility 0s, opacity 0.25s ease-in;
}

.overlay {
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}


.close {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close i {
  font-size: 20px;
}

.close:hover {
  background-color: gainsboro;
}
</style>
