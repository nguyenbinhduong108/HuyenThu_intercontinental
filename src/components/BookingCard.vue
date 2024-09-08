<template>
  <div class="booking">
    <div class="room-rate-container">
      <div class="room-rate-card">
        <div class="roomPhotos">
          <img :src='room.imageUrl.replace("https://", "https://i.") + ".jpg"' alt="" />
        </div>

        <div class="roomInfoPrice">
          <div class="roomInfo">
            <h2>Phòng {{ room.roomNumber }}</h2>
            <!-- <h2>Room {{ room.roomNumber }}</h2> -->

            <div class="room-info-details">
              <div class="room-attributes">
                <span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="false" focusable="false" role="img" aria-label="Max occupancy">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8.89953 3.60852C8.89953 5.31645 7.61091 6.71703 5.99953 6.71703C4.38815 6.71703 3.09953 5.31646 3.09953 3.60852C3.09953 1.90058 4.38814 0.5 5.99953 0.5C7.6109 0.5 8.89953 1.90057 8.89953 3.60852ZM10.4934 10.4502C10.5091 10.5923 10.4991 10.746 10.4396 10.9056C10.3076 11.2603 9.97849 11.4793 9.52807 11.4793H2.46998C2.01951 11.4793 1.69048 11.2599 1.55891 10.9049C1.49983 10.7455 1.48995 10.592 1.50573 10.45C1.50984 10.4181 1.51068 10.4115 1.50974 10.4201C1.67994 8.85573 2.66565 7.57382 4.16703 7.15213C4.2963 7.11582 4.43475 7.13303 4.5512 7.19989C4.85271 7.37302 5.50017 7.51487 5.98952 7.5251C6.49811 7.51489 7.14621 7.37276 7.44832 7.19966C7.5647 7.13298 7.703 7.11586 7.83213 7.15214C9.33148 7.5734 10.3169 8.85245 10.489 10.4164C10.49 10.4237 10.4913 10.4334 10.4934 10.4502Z"
                      fill="#555555"></path>
                    <mask id="mask0" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="1" y="0" width="10"
                      height="12">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.89953 3.60852C8.89953 5.31645 7.61091 6.71703 5.99953 6.71703C4.38815 6.71703 3.09953 5.31646 3.09953 3.60852C3.09953 1.90058 4.38814 0.5 5.99953 0.5C7.6109 0.5 8.89953 1.90057 8.89953 3.60852ZM10.4934 10.4502C10.5091 10.5923 10.4991 10.746 10.4396 10.9056C10.3076 11.2603 9.97849 11.4793 9.52807 11.4793H2.46998C2.01951 11.4793 1.69048 11.2599 1.55891 10.9049C1.49983 10.7455 1.48995 10.592 1.50573 10.45C1.50984 10.4181 1.51068 10.4115 1.50974 10.4201C1.67994 8.85573 2.66565 7.57382 4.16703 7.15213C4.2963 7.11582 4.43475 7.13303 4.5512 7.19989C4.85271 7.37302 5.50017 7.51487 5.98952 7.5251C6.49811 7.51489 7.14621 7.37276 7.44832 7.19966C7.5647 7.13298 7.703 7.11586 7.83213 7.15214C9.33148 7.5734 10.3169 8.85245 10.489 10.4164C10.49 10.4237 10.4913 10.4334 10.4934 10.4502Z"
                        fill="white"></path>
                    </mask>
                    <g mask="url(#mask0)"></g>
                  </svg>
                  <label>3</label>
                </span>

                <span>
                  <!-- <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="false" focusable="false" role="img" aria-label="Room Size">
                    <path
                      d="M4.0625 7.3125H2.64062C2.51367 7.3125 2.4375 7.23633 2.4375 7.10938V6.70312C2.4375 6.60156 2.51367 6.5 2.64062 6.5H4.0625V4.875H2.64062C2.51367 4.875 2.4375 4.79883 2.4375 4.67188V4.26562C2.4375 4.16406 2.51367 4.0625 2.64062 4.0625H4.0625V2.4375H2.64062C2.51367 2.4375 2.4375 2.36133 2.4375 2.23438V1.82812C2.4375 1.72656 2.51367 1.625 2.64062 1.625H4.0625V0.8125C4.0625 0.380859 3.68164 0 3.25 0H0.8125C0.355469 0 0 0.380859 0 0.8125V12.1875C0 12.2637 0 12.3398 0.0253906 12.3906L4.0625 8.37891V7.3125ZM12.1875 8.9375H11.375V10.3594C11.375 10.4863 11.2734 10.5625 11.1719 10.5625H10.7656C10.6387 10.5625 10.5625 10.4863 10.5625 10.3594V8.9375H8.9375V10.3594C8.9375 10.4863 8.83594 10.5625 8.73438 10.5625H8.32812C8.20117 10.5625 8.125 10.4863 8.125 10.3594V8.9375H6.5V10.3594C6.5 10.4863 6.39844 10.5625 6.29688 10.5625H5.89062C5.76367 10.5625 5.6875 10.4863 5.6875 10.3594V8.9375H4.62109L0.609375 12.9746C0.660156 13 0.736328 13 0.8125 13H12.1875C12.6191 13 13 12.6445 13 12.1875V9.75C13 9.31836 12.6191 8.9375 12.1875 8.9375Z"
                      fill="#555555"></path>
                  </svg> -->
                  <!-- <label style="font-weight: 500">43 sqmt</label> -->
                </span>
              </div>
              <div class="roomDetails" @click="handleViewDetails(room.id)">Chi tiết</div>
              <!-- <div class="roomDetails" @click="handleViewDetails(room.id)">Room Details</div> -->
            </div>
          </div>
          <div class="roomPrice">
            <div class="roomPrice-component">
              <div class="discount">
                <div class="rate-price-component">
                  <div class="member-discount">GIẢM GIÁ CHO THÀNH VIÊN</div>
                  <div class="from-pr">From <del>152</del></div>
                  <div class="to-price">147 <span>VND</span></div>
                  <div class="per-night">mỗi đêm</div>
                  <div class="taxes">Không bao gồm 5% Phí dịch vụ.</div>
                </div>
                <!-- <div class="rate-price-component">
                  <div class="member-discount">MEMBER DISCOUNT</div>
                  <div class="from-pr">From <del>152</del></div>
                  <div class="to-price">147 <span>USD</span></div>
                  <div class="per-night">per night</div>
                  <div class="taxes">Excludes 5% Service Charge.</div>
                </div> -->
              </div>
              <div class="action">
                <button @click="handleShowMore">Xem thêm</button>
                <!-- <button @click="handleShowMore">Show more</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cash-free-rates-drawer" v-if="isShowMore">
        <div class="price-list">
          <div class="rate-card">
            <!-- <div class="rate-card-wrapper">
              <div id="member-discount" data-testid="member-discount-label" class="discount themeText ng-star-inserted">
                MEMBER DISCOUNT</div>
              <div class="rate-info-wrapper">
                <div class="rate-name-wrapper">
                  <p class="rate-name"><span id="rateNameOrPolicy" data-testid="rateNameOrPolicy">Free cancellation
                      <span class="notranslate">1</span> day prior to stay</span></p><span tabindex="0" role="button"
                    class="info-icon" aria-label="Rate details"><svg viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="true">
                      <path
                        d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                      </path>
                    </svg></span>
                </div>
                <div id="cancellationPolicy" class="policy">No deposit required</div>
              </div>
              <div class="price-and-action">
                <div id="price-rate">
                  <div class="rate-price-component ng-star-inserted">
                    <div data-testid="strikeThroughPriceSID" class="ng-star-inserted"> From <span
                        class="strikeThrough">179</span></div>
                    <div class="total-price d-flex flex-row ng-star-inserted"><span
                        class="cash ng-star-inserted">147</span><span class="currency">USD</span>
                    </div><span data-testid="guest-count-info" class="perNight ng-star-inserted"> per night
                    </span>
                  </div>
                </div>
                <div class="price-select-btn xsvp-d-none">
                  <button type="button" class="select-btn themeBorder themeBG" aria-labelledby="Select"
                    data-slnm-ihg="roomRateTSTGIDME0" data-testid="select-btn" aria-label="Select" @click="handleSelectNoService">Select</button>
                </div>
              </div>
            </div> -->
            <div class="rate-card-wrapper">
              <div id="member-discount" data-testid="member-discount-label" class="discount themeText ng-star-inserted">
                GIẢM GIÁ CHO THÀNH VIÊN</div>
              <div class="rate-info-wrapper">
                <div class="rate-name-wrapper">
                  <p class="rate-name"><span id="rateNameOrPolicy" data-testid="rateNameOrPolicy">Hủy miễn phí
                      <span class="notranslate">1</span> ngày trước khi lưu trú</span></p><span tabindex="0" role="button"
                    class="info-icon" aria-label="Rate details"><svg viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="true">
                      <path
                        d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                      </path>
                    </svg></span>
                </div>
                <div id="cancellationPolicy" class="policy">Không cần đặt cọc</div>
              </div>
              <div class="price-and-action">
                <div id="price-rate">
                  <div class="rate-price-component ng-star-inserted">
                    <div data-testid="strikeThroughPriceSID" class="ng-star-inserted"> Từ <span
                        class="strikeThrough">179</span></div>
                    <div class="total-price d-flex flex-row ng-star-inserted"><span
                        class="cash ng-star-inserted">147</span><span class="currency">VND</span>
                    </div><span data-testid="guest-count-info" class="perNight ng-star-inserted"> mỗi đêm
                    </span>
                  </div>
                </div>
                <div class="price-select-btn xsvp-d-none">
                  <button type="button" class="select-btn themeBorder themeBG" aria-labelledby="Select"
                    data-slnm-ihg="roomRateTSTGIDME0" data-testid="select-btn" aria-label="Select" @click="handleSelectNoService">Chọn</button>
                </div>
              </div>
            </div>
          </div>
          <div class="rate-card">
            <!-- <div class="rate-card-wrapper">
              <div id="member-discount" data-testid="member-discount-label" class="discount themeText ng-star-inserted">
                MEMBER DISCOUNT</div>
              <div class="rate-info-wrapper">
                <div class="rate-name-wrapper">
                  <p class="rate-name"><span id="rateNameOrPolicy" data-testid="rateNameOrPolicy">Free cancellation
                      <span class="notranslate">1</span> day prior to stay</span><span id="arrow-right"
                      class="fa fa-angle-right"></span></p><span tabindex="0" role="button" class="info-icon"
                    aria-label="Rate details"><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true" focusable="true">
                      <path
                        d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                      </path>
                    </svg></span>
                </div>
                <div id="cancellationPolicy" class="policy">No deposit required</div>
                <div class="includes_meals ng-star-inserted"><span class="amenity-svg themeFill"
                    data-testid="amenityIconID"><svg width="16" height="16" viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.91869 5.59257H3.90507C3.77464 5.59257 3.66368 5.46347 3.65685 5.33331C3.59748 4.23913 4.15325 3.58817 4.93773 3.46946C5.06426 3.28758 5.10125 3.03965 5.03117 2.75533C4.94456 2.40209 4.71582 2.04886 4.38879 1.75976C4.28659 1.66977 4.2788 1.51469 4.37029 1.41417C4.46179 1.31366 4.61947 1.306 4.72167 1.39598C5.12365 1.74922 5.40591 2.19148 5.5159 2.64044C5.63368 3.12291 5.54413 3.55751 5.26284 3.86575C5.21417 3.91935 5.14604 3.94712 5.07304 3.94616C4.52896 3.97966 4.10849 4.49378 4.15423 5.33331C4.16202 5.46925 4.05593 5.58491 3.91869 5.59257ZM11.3829 12.5482C10.8904 13.2403 10.1964 13.8042 9.37205 14.1765L12.5304 14.1765C12.6686 14.1765 12.7796 14.2866 12.7796 14.4216C12.7796 14.5575 12.6686 14.6666 12.5304 14.6666H1.58266C1.44445 14.6666 1.3335 14.5575 1.3335 14.4216C1.3335 14.2857 1.44445 14.1765 1.58266 14.1765H4.78466C4.31358 13.963 3.8756 13.6854 3.4921 13.3427C2.52463 12.4784 1.99126 11.3345 1.99126 10.1207V6.87359C1.99126 6.87263 1.99102 6.87168 1.99077 6.87072C1.99053 6.86976 1.99029 6.8688 1.99029 6.86785C1.99029 6.73191 2.10124 6.62279 2.23945 6.62279H11.9299C12.0681 6.62279 12.179 6.73191 12.179 6.86785L12.1788 6.86978L12.1781 6.87216C12.1776 6.87359 12.1771 6.87503 12.1771 6.87646V7.23161C13.5709 7.35585 14.6668 8.51044 14.6668 9.91381C14.6668 11.3995 13.4386 12.6085 11.928 12.6085C11.7469 12.6085 11.5649 12.5846 11.3829 12.5482ZM11.6623 12.101C11.7518 12.1116 11.8404 12.1183 11.929 12.1183C13.1641 12.1183 14.1695 11.1294 14.1695 9.91366C14.1695 8.78121 13.2965 7.84595 12.1781 7.72342V8.60412C12.1781 8.60556 12.1786 8.607 12.1791 8.60843C12.1796 8.60987 12.1801 8.6113 12.1801 8.61274C12.1801 8.61417 12.1796 8.61561 12.1791 8.61705C12.1786 8.61848 12.1781 8.61992 12.1781 8.62135V10.1214C12.1781 10.8307 11.9893 11.5018 11.6623 12.101ZM6.91751 5.59257H6.93114C7.06838 5.58491 7.17447 5.46925 7.16668 5.33331C7.11996 4.49378 7.54043 3.97966 8.08549 3.94616C8.15849 3.94712 8.22662 3.91935 8.27529 3.86575C8.55657 3.55751 8.64612 3.12291 8.52834 2.64044C8.41836 2.19148 8.1361 1.74922 7.73509 1.39598C7.63289 1.306 7.47521 1.31366 7.38371 1.41417C7.29222 1.51469 7.30001 1.66977 7.4022 1.75976C7.72924 2.04886 7.957 2.40209 8.04361 2.75533C8.11369 3.03965 8.07671 3.28758 7.95018 3.46946C7.16472 3.58817 6.60895 4.23913 6.6693 5.33331C6.67613 5.46347 6.78709 5.59257 6.91751 5.59257ZM9.94259 5.59257H9.92896C9.79854 5.59257 9.68758 5.46347 9.68075 5.33331C9.62041 4.23913 10.1771 3.58817 10.9616 3.46946C11.0872 3.28758 11.1242 3.03965 11.0541 2.75533C10.9675 2.40209 10.7387 2.04886 10.4117 1.75976C10.3095 1.66977 10.3017 1.51469 10.3932 1.41417C10.4847 1.31366 10.6424 1.306 10.7446 1.39598C11.1466 1.74922 11.4288 2.19148 11.5388 2.64044C11.6576 3.12291 11.568 3.55751 11.2867 3.86575C11.2381 3.91935 11.1699 3.94712 11.0969 3.94616C10.5529 3.97966 10.1324 4.49378 10.1781 5.33331C10.1859 5.46925 10.0798 5.58491 9.94259 5.59257Z">
                      </path>
                    </svg></span><span class="amenity-text themeText" data-testid="amenityTextID">Includes
                    breakfast</span></div>
              </div>
              <div class="price-and-action">
                <div id="price-rate">
                  <div class="rate-price-component ng-star-inserted">
                    <div data-testid="strikeThroughPriceSID" class="ng-star-inserted"> From <span
                        class="strikeThrough">199</span></div>
                    <div class="total-price d-flex flex-row ng-star-inserted"><span
                        class="cash ng-star-inserted">193</span><span class="currency">USD</span>
                    </div><span data-testid="guest-count-info" class="perNight ng-star-inserted"> per night
                    </span>
                  </div>
                </div>
                <div class="price-select-btn xsvp-d-none"><button type="button" class="select-btn themeBorder themeBG"
                    aria-labelledby="Select" data-slnm-ihg="roomRateTSTGIKME0" data-testid="select-btn"
                    aria-label="Select"  @click="handleSelectWithService">Select</button></div>
              </div>
            </div> -->
            <div class="rate-card-wrapper">
              <div id="member-discount" data-testid="member-discount-label" class="discount themeText ng-star-inserted">
                GIẢM GIÁ CHO THÀNH VIÊN</div>
              <div class="rate-info-wrapper">
                <div class="rate-name-wrapper">
                  <p class="rate-name"><span id="rateNameOrPolicy" data-testid="rateNameOrPolicy">Hủy miễn phí
                      <span class="notranslate">1</span> ngày trước khi lưu trú</span><span id="arrow-right"
                      class="fa fa-angle-right"></span></p><span tabindex="0" role="button" class="info-icon"
                    aria-label="Rate details"><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true" focusable="true">
                      <path
                        d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                      </path>
                    </svg></span>
                </div>
                <div id="cancellationPolicy" class="policy">Không cần đặt cọc</div>
                <div class="includes_meals ng-star-inserted"><span class="amenity-svg themeFill"
                    data-testid="amenityIconID"><svg width="16" height="16" viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.91869 5.59257H3.90507C3.77464 5.59257 3.66368 5.46347 3.65685 5.33331C3.59748 4.23913 4.15325 3.58817 4.93773 3.46946C5.06426 3.28758 5.10125 3.03965 5.03117 2.75533C4.94456 2.40209 4.71582 2.04886 4.38879 1.75976C4.28659 1.66977 4.2788 1.51469 4.37029 1.41417C4.46179 1.31366 4.61947 1.306 4.72167 1.39598C5.12365 1.74922 5.40591 2.19148 5.5159 2.64044C5.63368 3.12291 5.54413 3.55751 5.26284 3.86575C5.21417 3.91935 5.14604 3.94712 5.07304 3.94616C4.52896 3.97966 4.10849 4.49378 4.15423 5.33331C4.16202 5.46925 4.05593 5.58491 3.91869 5.59257ZM11.3829 12.5482C10.8904 13.2403 10.1964 13.8042 9.37205 14.1765L12.5304 14.1765C12.6686 14.1765 12.7796 14.2866 12.7796 14.4216C12.7796 14.5575 12.6686 14.6666 12.5304 14.6666H1.58266C1.44445 14.6666 1.3335 14.5575 1.3335 14.4216C1.3335 14.2857 1.44445 14.1765 1.58266 14.1765H4.78466C4.31358 13.963 3.8756 13.6854 3.4921 13.3427C2.52463 12.4784 1.99126 11.3345 1.99126 10.1207V6.87359C1.99126 6.87263 1.99102 6.87168 1.99077 6.87072C1.99053 6.86976 1.99029 6.8688 1.99029 6.86785C1.99029 6.73191 2.10124 6.62279 2.23945 6.62279H11.9299C12.0681 6.62279 12.179 6.73191 12.179 6.86785L12.1788 6.86978L12.1781 6.87216C12.1776 6.87359 12.1771 6.87503 12.1771 6.87646V7.23161C13.5709 7.35585 14.6668 8.51044 14.6668 9.91381C14.6668 11.3995 13.4386 12.6085 11.928 12.6085C11.7469 12.6085 11.5649 12.5846 11.3829 12.5482ZM11.6623 12.101C11.7518 12.1116 11.8404 12.1183 11.929 12.1183C13.1641 12.1183 14.1695 11.1294 14.1695 9.91366C14.1695 8.78121 13.2965 7.84595 12.1781 7.72342V8.60412C12.1781 8.60556 12.1786 8.607 12.1791 8.60843C12.1796 8.60987 12.1801 8.6113 12.1801 8.61274C12.1801 8.61417 12.1796 8.61561 12.1791 8.61705C12.1786 8.61848 12.1781 8.61992 12.1781 8.62135V10.1214C12.1781 10.8307 11.9893 11.5018 11.6623 12.101ZM6.91751 5.59257H6.93114C7.06838 5.58491 7.17447 5.46925 7.16668 5.33331C7.11996 4.49378 7.54043 3.97966 8.08549 3.94616C8.15849 3.94712 8.22662 3.91935 8.27529 3.86575C8.55657 3.55751 8.64612 3.12291 8.52834 2.64044C8.41836 2.19148 8.1361 1.74922 7.73509 1.39598C7.63289 1.306 7.47521 1.31366 7.38371 1.41417C7.29222 1.51469 7.30001 1.66977 7.4022 1.75976C7.72924 2.04886 7.957 2.40209 8.04361 2.75533C8.11369 3.03965 8.07671 3.28758 7.95018 3.46946C7.16472 3.58817 6.60895 4.23913 6.6693 5.33331C6.67613 5.46347 6.78709 5.59257 6.91751 5.59257ZM9.94259 5.59257H9.92896C9.79854 5.59257 9.68758 5.46347 9.68075 5.33331C9.62041 4.23913 10.1771 3.58817 10.9616 3.46946C11.0872 3.28758 11.1242 3.03965 11.0541 2.75533C10.9675 2.40209 10.7387 2.04886 10.4117 1.75976C10.3095 1.66977 10.3017 1.51469 10.3932 1.41417C10.4847 1.31366 10.6424 1.306 10.7446 1.39598C11.1466 1.74922 11.4288 2.19148 11.5388 2.64044C11.6576 3.12291 11.568 3.55751 11.2867 3.86575C11.2381 3.91935 11.1699 3.94712 11.0969 3.94616C10.5529 3.97966 10.1324 4.49378 10.1781 5.33331C10.1859 5.46925 10.0798 5.58491 9.94259 5.59257Z">
                      </path>
                    </svg></span><span class="amenity-text themeText" data-testid="amenityTextID">Bao gồm
                      bữa sáng</span></div>
              </div>
              <div class="price-and-action">
                <div id="price-rate">
                  <div class="rate-price-component ng-star-inserted">
                    <div data-testid="strikeThroughPriceSID" class="ng-star-inserted"> Từ <span
                        class="strikeThrough">199</span></div>
                    <div class="total-price d-flex flex-row ng-star-inserted"><span
                        class="cash ng-star-inserted">193</span><span class="currency">VND</span>
                    </div><span data-testid="guest-count-info" class="perNight ng-star-inserted"> mỗi đêm
                    </span>
                  </div>
                </div>
                <div class="price-select-btn xsvp-d-none"><button type="button" class="select-btn themeBorder themeBG"
                    aria-labelledby="Select" data-slnm-ihg="roomRateTSTGIKME0" data-testid="select-btn"
                    aria-label="Select"  @click="handleSelectWithService">Chọn</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

const props = defineProps({
  id: String
})
import { useBookingStore } from '@/stores/booking'
import router from '@/router';

const emit = defineEmits(['idSelect'])

const room = ref<any>({
  imageUrl: '',
  roomNumber: '',
  id: '',
})

const isShowMore = ref<boolean>(false)

const getRoom = async (id: any) => {
  return await axios.get(`http://localhost:8081/hotelmaster/room/${id}`);
}

onMounted(async () => {
  //   console.log((await getRoom(props.id)).data);
  room.value = (await getRoom(props.id)).data;
});

const handleViewDetails = (id: string) => {
  emit('idSelect', room.value.id);
}

const handleShowMore = () => {
  isShowMore.value = !isShowMore.value;
}

const useBooking = useBookingStore();

const handleSelectWithService = () => {
  useBooking.getPrice(147 + 20);
  router.push({ name: "payment" });

}

const handleSelectNoService = () => {
  useBooking.getPrice(147);
  router.push({ name: "payment" });
}


</script>


<style lang="scss">
@font-face {
  font-family: "Graphik Semibold";
  src: url(../assets/fonts/Graphik-Regular-Web.woff2);
  font-weight: 400;
}

@font-face {
  font-family: "Graphik Semibold";
  src: url(../assets/fonts/Graphik-Medium-Web.woff2);
  font-weight: 500;
}

@font-face {
  font-family: "Graphik Semibold";
  src: url(../assets/fonts/Graphik-Semibold-Web.woff2);
  font-weight: 600;
}

* {
  font-family: "Graphik Semibold";
  font-weight: 400;
}

.booking {
  .room-rate-container {
    border-radius: 10px;
    margin-bottom: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .room-rate-card {
      display: flex;

      .roomPhotos {
        width: 280px;
        height: 210px;
        margin-right: 20px;
        background-color: #1f4456;
        overflow: hidden;

        img {
          width: 280px;
          height: 210px;
          object-fit: cover;
        }
      }

      .roomInfoPrice {
        display: flex;
        flex: 1;
        padding-top: 20px;

        .roomInfo {
          h2 {
            font-size: 24px;
            color: #363434;
            word-break: break-word;
            font-weight: 600;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: left;
            margin-bottom: 8px;
          }

          .room-info-details {
            display: flex;
            flex-direction: column;
            gap: 20px;

            .room-attributes {
              display: flex;
              gap: 20px;

              label {
                margin-left: 5px;
                color: #555;
              }
            }

            .roomDetails {
              text-decoration: underline;
              background: none;
              color: #204357;
              border: none;
              padding: 0;
              cursor: pointer;
              outline: none;
              font-weight: 600;
            }
          }
        }

        .roomPrice {
          padding-right: 10px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: end;

          .discount {
            display: flex;
            justify-content: end;

            .rate-price-component {
              text-align: right;

              .member-discount {
                color: #b38b7a;
                font-weight: 600;
              }

              .from-pr {
                color: #555;
                font-size: 12px;
              }

              .to-price {
                font-size: 24px;
                font-weight: 600;

                span {
                  font-size: 14px;
                  font-weight: inherit;
                }
              }

              .per-night {
                color: #555;
                font-size: 12px;
              }

              .taxes {
                margin-top: 5px;
                font-size: 14px;
              }
            }
          }

          .action {
            display: flex;
            justify-content: end;
            margin-top: 8px;

            button {
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

              &:hover {
                color: #fff;
                background: #44443C;
              }
            }
          }
        }
      }
    }
  }
}

.roomPrice-component {
  display: flex;
  flex-direction: column;
}

.cash-free-rates-drawer {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  .price-list {
    font-family: Graphik-Regular;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;

    .rate-card {
      width: 32%;
      height: 100%;
      border-bottom: 1px solid #DDDDDD;
      padding: 15px 0;
      display: flex;
      flex-direction: row;
      gap: 3px;
      padding: 20px;
      border: 1px solid #C2C7CA;
      border-radius: 3px;
      display: flex;
      min-height: 205px;

      .rate-card-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 3px;

        .discount {
          font-size: 12px;
          line-height: 14px;
          margin-bottom: 5px;
          font-weight: 700;
          font-family: Graphik-Medium;
        }
      }
    }
  }

  .rate-name-wrapper {
    display: flex;
    flex-direction: row;
  }

  .rate-name {
    font-weight: 500;
    font-family: Graphik-Medium;
    font-size: 14px;
    color: #1f4456;
    line-height: 21px;
    margin-right: 10px;
    margin-bottom: 0;
    display: flex;
    align-items: baseline;
  }

  .info-icon {
    outline: none;
    cursor: pointer;
    margin-left: 5px;
    vertical-align: text-bottom;
    width: 18px;
    height: 18px;
  }

  .policy {
    font-size: 14px;
    line-height: 21px;
    color: #555;
  }

  .price-and-action {
    display: flex;
    flex-direction: row;
    margin-top: auto;
  }

  .rate-card .rate-card-wrapper .price-and-action #price-rate {
    align-self: end;
  }

  .rate-card .price-select-btn {
    align-self: end;
    margin-top: 20px;
  }

  .rate-price-component {
    display: flex;
    flex-direction: column !important;
    align-items: var(--rate-price-align-items, start);
    color: #555;
    font-size: 14px;
    line-height: 18px;
  }

  .rate-price-component .strikeThrough {
    text-decoration: line-through;
  }

  .rate-price-component .total-price {
    justify-content: flex-end;
    font-family: Graphik-Semibold, sans-serif;
    align-items: baseline;
    color: #000;
    gap: 3px;
  }

  .rate-price-component {
    display: flex;
    flex-direction: column !important;
    align-items: var(--rate-price-align-items, start);
    color: #555;
    font-size: 14px;
    line-height: 18px;
  }

  .rate-price-component .cash,
  .rate-price-component .free {
    font-size: 24px;
    line-height: 100%;
    white-space: nowrap;
    font-weight: 600;
  }

  .rate-price-component .currency {
    font-size: 14px;
    font-weight: 600;
  }

  .rate-card .price-select-btn {
    text-align: right;
    margin-left: auto;
    align-self: end;
    margin-top: 20px;
  }

  .select-btn {
    padding: 10px 15px;
    border: 1px solid;
    border-radius: 3px;
    color: #fff;
    font-family: Graphik-Medium;
    font-size: 16px;
    line-height: 19px;
    background-color: #b38b7a;
  }

  .includes_meals {
    display: flex;
    gap: 10px;
    direction: var(--direction);
    font-family: Graphik-Regular;
    font-size: 14px;
    line-height: 21px;
  }

  .themeFill {
    fill: #b38b7a;
  }

  .themeText {
    color: #b38b7a;
  }
}
</style>