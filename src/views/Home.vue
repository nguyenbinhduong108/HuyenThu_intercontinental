<template>
  <header id="header">
    <a href="#content" id="skip-to-content">Skip to Content (Press Enter)</a>
    <a class="logo" href="/">
      <img
        src="../../public/assets/logo.svg"
        alt="InterContinental Hanoi Westlake Logo"
        width="225"
        height="87"
        title="InterContinental Hanoi Westlake"
        class="white-logo"
      />
      <img
        src="../../public/assets/logo-dark.svg"
        alt="InterContinental Hanoi Westlake Logo"
        width="200"
        height="80"
        title="InterContinental Hanoi Westlake"
        class="dark-logo"
      />
    </a>
    <button class="booking-trigger button" @click="handleShowBooking">Đặt phòng ngay</button>
    <div
      id="mobile-navigation"
      class="scrolling-wrapper"
      role="dialog"
      aria-modal="true"
      aria-label="Popup Corporate Menu"
    >
      <div class="main-menu-wrapper">
        <nav class="top-menu" aria-label="Side Top Menu"><ul></ul></nav>
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
                  <a href="/vn/dining/ihg-dining-program"
                    >IHG One Rewards Dining Privileges</a
                  >
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
                  <a href="/vn/meetings-events/journey-to-tomorrow"
                    >Journey To Tomorrow</a
                  >
                </li>
                <li>
                  <a href="/vn/meetings-events/incredible-proposals-package"
                    >Gói Cầu Hôn “Say Yes at Sunset”!</a
                  >
                </li>
                <li>
                  <a
                    href="/vn/meetings-events/incredible-first-birthdays-package"
                    >Gói Tiệc Sinh Nhật Một Tuổi</a
                  >
                </li>
                <li>
                  <a
                    href="/vn/meetings-events/incredible-longevity-celebrations-package"
                    >Gói Tiệc Mừng Thọ</a
                  >
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

  <div
    id="photos"
    role="region"
    aria-roledescription="carousel"
    aria-label="Top Image Slideshow"
  >
    <div class="slideshow">
      <div class="slideshow-wrapper">
        <figure class="slide">
          <picture>
            <source
              type="image/webp"
              media="(max-width: 420px)"
              srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/420x830/fit/80/a60b7dd5c0b3bc895cebb471fcdfe8a7.webp
              "
            />
            <source
              type="image/webp"
              media="(max-width: 767px)"
              srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/767x600/fit/80/af6bc0471d195b97bbe6d1b682c5a484.webp
              "
            />
            <source
              type="image/webp"
              media="(max-width: 1280px)"
              srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/1280x768/fit/80/3379e1cc56efd8b98b833901133bf604.webp
              "
            />
            <source
              type="image/webp"
              srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/1920x1080/fit/80/2d25496641e30753045c483a288c0b89.webp
              "
            />
            <source
              type="image/jpeg"
              media="(max-width: 420px)"
              srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/420x830/fit/80/357f25353d602dd5d1ca38c631a77cb7.jpg
              "
            />
            <source
              type="image/jpeg"
              media="(max-width: 767px)"
              srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/767x600/fit/80/04d1016e002a9832bdc5eaefd296cf39.jpg
              "
            />
            <source
              type="image/jpeg"
              media="(max-width: 1280px)"
              srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/1280x768/fit/80/244bd16d7ec53c033d7d0252689722ce.jpg
              "
            />
            <source
              type="image/jpeg"
              srcset="
                //d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/1920x1080/fit/80/393f8b151ff2281dbaa043b4f529f36d.jpg
              "
            />
            <img
              class="slide-image"
              src="//d3rx7ba35c2ox5.cloudfront.net/-1166611616/cms/cache/v2/64dc8d1e29a41.jpg/1920x1080/fit/80/393f8b151ff2281dbaa043b4f529f36d.jpg"
              style="object-position: 50% 50%"
              alt="Shape"
              height="1080"
              width="1920"
            />
          </picture>
          <video
            class="video muted vimeo-video-tag video-background"
            src="https://player.vimeo.com/progressive_redirect/download/856698772/rendition/1080p/0821%281%29%20%281080p%29.mp4?loc=external&amp;signature=ca9ee00df1a0ea61ac3dd31072eaca589a4afee208eb7a1afd9f155091c0931e"
            type="video/mp4"
            autoplay
            loop
            muted
            playsinline
          ></video>
        </figure>
      </div>
    </div>
    <div class="booking-trigger button" @click="handleShowBooking">Đặt phòng ngay</div>
  </div>
  <article id="booking" tabindex="-1">
    <div class="center-column">
      <form action="/booking" method="post" target="_blank">
        <div class="booking-close-button close"><span></span></div>
        <fieldset>
          <legend>Đặt phòng</legend>
          <div class="column dates">
            <label for="booking-dates">Dates:</label>
            <input type="text" id="booking-dates" value />
            <div class="input-overlay"></div>
            <div id="booking-datepicker" class="hasDatepicker">
              <div class="arrival-departure-status">
                <div
                  class="arrival visible"
                  data-text="Select Arrival Date"
                ></div>
                <div class="departure" data-text="Select Departure Date"></div>
              </div>

              <div
                class="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"
                style="display: block"
              >
                <div
                  class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"
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
                  ><a
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
                    <span class="ui-datepicker-month">August</span>&nbsp;<span
                      class="ui-datepicker-year"
                      >2024</span
                    >
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
                      <th scope="col"><span title="Wednesday">We</span></th>
                      <th scope="col"><span title="Thursday">Th</span></th>
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
                      <td class="ui-datepicker-unselectable ui-state-disabled">
                        <span class="ui-state-default">1</span>
                      </td>
                      <td class="ui-datepicker-unselectable ui-state-disabled">
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
                      <td class="ui-datepicker-unselectable ui-state-disabled">
                        <span class="ui-state-default">5</span>
                      </td>
                      <td class="ui-datepicker-unselectable ui-state-disabled">
                        <span class="ui-state-default">6</span>
                      </td>
                      <td class="ui-datepicker-unselectable ui-state-disabled">
                        <span class="ui-state-default">7</span>
                      </td>
                      <td class="ui-datepicker-unselectable ui-state-disabled">
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
                          aria-label="Check In, undefined,  9th, 2024"
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
                          aria-label="Check In, undefined,  10th, 2024"
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
                          aria-label="Check In, undefined,  11th, 2024"
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
                          aria-label="Check In, undefined,  12th, 2024"
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
                          aria-label="Check In, undefined,  13th, 2024"
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
                          aria-label="Check In, undefined,  14th, 2024"
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
                          aria-label="Check In, undefined,  15th, 2024"
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
                          aria-label="Check In, undefined,  16th, 2024"
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
                          aria-label="Check In, undefined,  17th, 2024"
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
                          aria-label="Check In, undefined,  18th, 2024"
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
                          aria-label="Check In, undefined,  19th, 2024"
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
                          aria-label="Check In, undefined,  20th, 2024"
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
                          aria-label="Check In, undefined,  21st, 2024"
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
                          aria-label="Check In, undefined,  22nd, 2024"
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
                          aria-label="Check In, undefined,  23rd, 2024"
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
                          aria-label="Check In, undefined,  24th, 2024"
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
                          aria-label="Check In, undefined,  25th, 2024"
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
                          aria-label="Check In, undefined,  26th, 2024"
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
                          aria-label="Check In, undefined,  27th, 2024"
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
                          aria-label="Check In, undefined,  28th, 2024"
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
                          aria-label="Check In, undefined,  29th, 2024"
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
                          aria-label="Check In, undefined,  30th, 2024"
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
                          aria-label="Check In, undefined,  31st, 2024"
                          >31</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <input
              type="hidden"
              id="booking-checkin"
              name="checkin"
              value="08/10/2024"
            />
            <input
              type="hidden"
              id="booking-checkout"
              name="checkout"
              value="08/12/2024"
            />
          </div>
          <div class="column rooms">
            <label id="horizontal-booking-rooms">Phòng nghỉ:</label>
            <div class="select-wrapper" data-select-class="booking-rooms">
              <select
                class="booking-rooms"
                name="rooms"
                aria-labelledby="horizontal-booking-rooms"
              >
                <option value="1" selected>1 Phòng nghỉ</option>
                <option value="2">2 Phòng nghỉ</option>
                <option value="3">3 Phòng nghỉ</option>
                <option value="4">4 Phòng nghỉ</option>
                <option value="5">5 Phòng nghỉ</option>
                <option value="6">6 Phòng nghỉ</option>
                <option value="7">7 Phòng nghỉ</option>
                <option value="8">8 Phòng nghỉ</option>
                <option value="9">9 Phòng nghỉ</option>
              </select>
              <div class="select-icon"></div>
            </div>
            <div class="select-icon"></div>
          </div>
          <div class="column adults">
            <label for="booking-adults">Adults:</label>
            <div class="select-wrapper" data-select-class="undefined">
              <select id="booking-adults" name="adults">
                <option value="1" selected>1 Người lớn</option>
                <option value="2">2 Người lớn</option>
                <option value="3">3 Người lớn</option>
                <option value="4">4 Người lớn</option>
                <option value="5">5 Người lớn</option>
              </select>
              <div class="select-icon"></div>
            </div>
            <div class="select-icon"></div>
          </div>
          <div class="column children">
            <label for="booking-children">Children:</label>
            <div class="select-wrapper" data-select-class="undefined">
              <select id="booking-children" name="children">
                <option value="0" selected>0 Trẻ em</option>
                <option value="1">1 Child</option>
                <option value="2">2 Trẻ em</option>
                <option value="3">3 Trẻ em</option>
                <option value="4">4 Trẻ em</option>
              </select>
              <div class="select-icon"></div>
            </div>
            <div class="select-icon"></div>
          </div>

          <button @click="handleBooking" class="button" style="width: 100%; margin-top: 20px">Kiểm tra tình trạng phòng</button>
        </fieldset>
      </form>
    </div>
  </article>
  <article id="booking-home">
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
  </article>

  <footer id="footer">
    <div class="center-column">
      <nav id="footer-menu" class="footer-menu">
        <ul>
          <li><a href="/vn/contact-us">Liên hệ chúng tôi</a></li>
          <li>
            <a
              href="https://www.ihg.com/content/us/en/customer-care/privacy-and-cookie-center"
              target="_blank"
              >Bảo mật và Điều khoản</a
            >
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com.sg/Hotel_Review-g293924-d815139-Reviews-InterContinental_Hanoi_Westlake-Hanoi.html"
              target="_blank"
              >Đánh giá từ Khách hàng</a
            >
          </li>
          <li><a href="/vn/owner-information">Thông tin Chủ sở hửu</a></li>
          <li>
            <a href="/vn/personal-data-statement"
              >Chính sách bảo mật thông tin</a
            >
          </li>
          <li>
            <a
              href="https://www.ihg.com/intercontinental/hotels/us/en/reservation"
              target="_blank"
              >InterContinental.com</a
            >
          </li>
        </ul>
      </nav>
      <div class="footer-flex">
        <div class="footer-block col-1">
          <a class="logo-icon" href="/" title="InterContinental Hanoi Westlake">
            <img
              class="lazy-load"
              data-src="../../public/assets/logo-dark.svg"
              width="238"
              height="92"
              alt="InterContinental Hanoi Westlake"
              src="../../public/assets/logo-dark.svg"
              data-loaded="true"
          /></a>
          <div
            id="IWSfrContainer"
            style="font-family: Arial, Helvetica, sans-serif"
          ></div>
          <small class="copyright"
            >© Copyright 2024. All rights reserved. InterContinental Hanoi
            Westlake</small
          >
        </div>
        <div class="footer-block col-2">
          <ul class="socials">
            <li>
              <a
                class="facebook"
                href="https://www.facebook.com/intercontinentalhanoiwestlake"
                target="_blank"
              >
                facebook
                <svg width="178px" height="60px">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                class="twitter"
                href="https://twitter.com/ichanoiwestlake"
                target="_blank"
              >
                twitter
                <svg width="178px" height="60px">
                  <use xlink:href="#twitter"></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                class="instagram"
                href="http://instagram.com/interconhanoiwestlake"
                target="_blank"
              >
                instagram
                <svg width="178px" height="60px">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                class="linkedin"
                href="https://www.linkedin.com/company/intercontinental-hanoi-westlake"
                target="_blank"
              >
                linkedin
                <svg width="178px" height="60px">
                  <use xlink:href="#linkedin"></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                class="youtube"
                href="https://www.youtube.com/channel/UCJ6JdsM9pmcPrzigHC7mfYg"
                target="_blank"
              >
                youtube
                <svg width="178px" height="60px">
                  <use xlink:href="#youtube"></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                class="tripadvisor"
                href="https://www.tripadvisor.com/Hotel_Review-g293924-d815139-Reviews-InterContinental_Hanoi_Westlake-Hanoi.html"
                target="_blank"
              >
                tripadvisor
                <svg width="178px" height="60px">
                  <use xlink:href="#tripadvisor"></use>
                </svg>
              </a>
            </li>
          </ul>
          <article id="footer-contacts">
            <p class="footer-address">
              <svg><use xlink:href="#pointer"></use></svg>
              <span>5 Tu Hoa street, Tay Ho district, Vietnam</span>
            </p>
            <p class="footer-phone">
              <svg><use xlink:href="#phone"></use></svg>
              <span>
                Reserve by Phone:
                <a href="tel:+84-24-6270-8888">+84 24 6270 8888</a>
              </span>
            </p>
            <p class="footer-email">
              <svg><use xlink:href="#email"></use></svg>
              <span>
                <a href="mailto:res.hanoi@ihg.com">res.hanoi@ihg.com</a>
              </span>
            </p>
          </article>
          <nav id="footer-additional-menu" class="footer-menu"><ul></ul></nav>
        </div>
        <div class="footer-block col-3">
          <div>
            <a
              style="width: 30%; display: inline-block"
              href="https://www.ihg.com/content/us/en/customer-care/lowest-internet-rate-terms-conditions"
              target="_blank"
              ><img
                class="lazy-load"
                style="height: 50px; width: auto; margin: 20px auto"
                data-src="../../public/assets/bpg.png"
                width="238"
                height="92"
                alt="InterContinental Hanoi Westlake"
                src="../../public/assets/bpg.png"
                data-loaded="true"
            /></a>
            <a
              href="https://www.ihg.com/intercontinental/content/gb/en/loyalty"
              style="width: 30%; margin-left: 10%; display: inline-block"
              target="_blank"
              ><img
                class="lazy-load"
                style="height: 50px; width: auto; margin: 20px auto"
                data-src="../../public/assets/ambassador.png"
                width="238"
                height="92"
                alt="InterContinental Hanoi Westlake"
                src="../../public/assets/ambassador.png"
                data-loaded="true"
            /></a>
            <a
              href="https://www.ihg.com/onerewards/content/gb/en/home"
              target="_blank"
              style="width: 60%; display: inline-block"
              ><img
                class="lazy-load"
                style="height: 50px; width: auto; margin: 20px auto"
                data-src="../../public/assets/ihglogo.png"
                width="238"
                height="92"
                alt="InterContinental Hanoi Westlake"
                src="../../public/assets/ihglogo.png"
                data-loaded="true"
            /></a>
          </div>
          <div class="footer-phone">
            <p style="font-size: calc(0.44118vw + 14.58824px)">
              Book Online or Call
            </p>
            <div
              style="
                display: flex;
                flex-direction: row;
                align-content: center;
                margin: auto;
                flex-wrap: wrap;
                margin-bottom: 25px;
              "
            >
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
            <img
              class="lazy-load"
              data-src="../../public/assets/footer-logos.png"
              width="1260"
              height="268"
              alt="Footer Logos"
              src="../../public/assets/footer-logos.png"
              data-loaded="true"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import router from '@/router';

const handleShowBooking = () => {
  const showBooking = document.querySelector<HTMLElement>('#booking');

  if(showBooking && showBooking.style.left != '0%'){
    showBooking.style.left = '0%';
  }
  else if(showBooking && showBooking.style.left == '0%'){
    showBooking.style.left = '-101%';
  }
  else{
    throw new Error("Không tìm thấy element");
  }
}

const handleBooking = () => {
  router.push({name: 'booking'});
}
</script>

<style scoped>
@import url("../css/home/main.css");
@import url("../css/home/style.css");
</style>
